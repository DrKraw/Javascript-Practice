// Validate a Palindrome
// A Palindrome is a word that is the same backwards and frontwards like Hannah

// function isPalindrome(str) {
//   const revString = str.split('').reverse().join('');
//
//   return revString === str;
//
// }
//
// const output = isPalindrome('racecar');
// console.log(output);
// check whether a string is a Palindrome or not

function isPalindrome(str) {
   const revString = str.split('').reverse().join('');

   return revString === str;
}

const output = isPalindrome('fuck');
console.log(output);
