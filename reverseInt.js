// Reverse an integer in JavaScript

// function reverseInt(int) {
//   const revString = int.toString().split('').reverse()
//   .join('');
//   // the * Math.sign(int); function will add an operator sign if there is one.
//   return parseInt(revString) * Math.sign(int);
// }
//
// const output = reverseInt(-12345);
// console.log(output);

// If there is no - or + operator

function reverseInt(int){
  const revString = int.toString().split('').reverse()
  .join('');

  return parseInt(revString);
}

const output = reverseInt(234);
console.log(output);
