# **Steps to Use**

1. Create file `encrypted_file.txt` in base directory
2. Run `cp env.sample .env` to create .env file
3. Update `.env` file with the AES key
4. Run `npm install` to install node modules.
    - Tested with node v16
5. Add encrypted text to `encrypted_file.txt` and run `npm start`

You should be able to see new file created with decrypted data.