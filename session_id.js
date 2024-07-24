
// // Function to generate a random string
// function generateRandomString(length) {
//   var result = '';
//   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

// // Generate a random string
// var randomSegment = generateRandomString(15);
// console.log(randomSegment);

// function generateUUID() {
//   return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
//       (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//   );
// }

// console.log(generateUUID());

const { v4: uuidv4 } = require('uuid');
let myUUID = uuidv4();
console.log(myUUID);

