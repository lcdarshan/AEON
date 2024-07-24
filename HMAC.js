const crypto = require('crypto');


function hashData(originalData, secretKey) {
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(originalData);
    return hmac.digest('hex');
}

// Function to verify and potentially recover original data
function verifyAndRecoverData(receivedHash, originalData, secretKey) {
    // Recalculate the hash using the same key and algorithm
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(originalData);
    const recalculatedHash = hmac.digest('hex');

    // Verify the integrity
    const isDataValid = recalculatedHash === receivedHash;
    console.log("Data Verification:", isDataValid);

    // If needed, recover the original data
    if (isDataValid) {
        const recoveredOriginalData = originalData;
        console.log("Recovered Original Data:", recoveredOriginalData);
    } else {
        console.log("Data verification failed.");
    }
}

const originalData = "username";
const SecretKey = "gm267&sd#@";
const hashedData = hashData(originalData, SecretKey);

console.log("original Data:",originalData)
console.log("Hashed Data", hashedData);
verifyAndRecoverData(hashedData, originalData, SecretKey);
console.log(verifyAndRecoverData)