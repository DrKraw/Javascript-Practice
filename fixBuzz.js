/* Write a program that prints all the numbers
   from 1 to 100. For multiples of 3, instead of
   the number, print "Fizz", for multiples of 5
   print "Buzz". For numbers which are multiples
   of both 3 and 5, print "FIzzbuzz".
 */

 function fizzBuzz(){
   //  every multiple of 3 print fizz
   //  every multiple of 5 print Buzz
   //  every multiple of of both 3 and 5 print FizzBuzz
   for(let i = 1; i <= 100; i++){
     if(i % 3 === 0 && i % 5 === 0){
       console.log('FizzBuzz');
     } else if(i % 3 === 0){ // if there is no remainder then then its a multiple
       console.log('Fizz');
     } else if (i % 5 === 0){
       console.log('Buzz');
     } else {
       console.log(i);
     }
   }
 }
 // call the function ..
 const output = fizzBuzz();
 console.log(output);
