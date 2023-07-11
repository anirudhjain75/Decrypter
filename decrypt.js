const fs = require('fs');
const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');

dotenv.config();

const inputFile = 'encrypted_file.txt';

const getYek = () => {
    const hex = atob(process.env.KEY);
    let strKey = '';
    for (var n = 0; n < hex.length; n += 2) { strKey += String.fromCharCode(parseInt(hex.substr(n, 2), 16)); }
    return strKey;
}

const key = getYek();
const outputDirectory = 'decrypted_files/';

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Read the encrypted file
const encryptedData = fs.readFileSync(inputFile, 'utf8');

// Decrypt the data
const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);

// Generate a unique filename based on current timestamp
const timestamp = Date.now();
const outputFileName = `${outputDirectory}decrypted_file_${timestamp}.json`;

// Write the decrypted data to the output file
fs.writeFileSync(outputFileName, decryptedData, 'utf8');

console.log(`Decrypted data has been saved to ${outputFileName}`);
