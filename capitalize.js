// Capitalize strings

function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ');
  // for(let i = 0; i < strArr.length; i++){
  //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
  //     strArr[i].substring(1);
  // }
  // return strArr.join(' ');
  //////////////////////////////////////////////////////
  // use map() function ...
  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(function(word){
  //       return word[0].toUpperCase() + word.substr(1)
  //   }).join(' ');
  //////////////////////////////////////////////////////
  // use regex & replace method
  return str.replace(/\b[a-z]/gi, function(char){
      return char.toUpperCase();
  });
}

const output = capitalizeLetters('i love javascript');
console.log(output);
