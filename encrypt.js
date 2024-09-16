'use strict';

const { encrypt, decrypt } = require('./encryp');

const textToEncrypt = 'AGs Project';
const encryptedText = encrypt(textToEncrypt);
console.log('Encrypted:', encryptedText);

const decryptedText = decrypt(encryptedText);
console.log('Decrypted:', decryptedText);
