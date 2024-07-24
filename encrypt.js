const crypto = require('crypto');

// Function to generate a random initialization vector (IV)
function generateIV() {
  return crypto.randomBytes(16); // 16 bytes for AES
}

// Function to encrypt a message
function encryptMessage(message, key) {
  const iv = generateIV();
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + encrypted;
}

// Example usage
const originalMessage = 'test data';
const encryptionKey = '2a5f7c89b354d3e67a90123456789abcdeffedcba9876543210fedcba9876543'; // Replace with a strong, shared secret key

// Encrypt the message
const encryptedMessage = encryptMessage(originalMessage, encryptionKey);
console.log('Encrypted Message:', encryptedMessage);

