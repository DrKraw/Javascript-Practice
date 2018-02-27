// Challenge 1: Reverse a string
function reverseString(str){
  // reverse array method
    // return str
    // .split('').reverse().join('');

    // old skool for loop way

    // let revString = '';
    //
    // for(let i = 0; i <= str.length -1; i++){
    //   revString = str[i] + revString;
    // }
    // return revString;

    // using the char variable
    let revString = '';

    for(let char of str){
      revString = char + revString;
    }
    return revString;

    // using a foreach
    // let revString = '';

    // str.split('').forEach(function(char){
    //    revString = char + revString;
    // });
    // return revString;

    //using ES6 arrow function
    // return str.split('').reduce((revString, char) => char +
    // revString, '');
}

const output = reverseString('donal');
console.log(output);
