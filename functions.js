1. // Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)

function number(n){
  let result=1
  for(i=1;i<=n;i++){
    result *=i;
  }
    return result;
}

console.log(number(5));


// 2 .  Create an anonymous function that takes an array of numbers as an argument and returns the array with each number doubled. Assign this function to a variable called doubleArray.  

const Arry=function(number){
  
  return number.map(function(number){
    return number*2
  })
  
}
const num=[1,2,3,4]
console.log(Arry(num))


// 3. Define a function expression factorial that takes one number as a parameter and returns its factorial.

let n = 5;
function factorial(n) { 
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * factorial( n - 1 ); 
    } 
} 

console.log(factorial(n));


// 4. Write a function processArray that takes an array and a callback function as parameters. The function should apply the callback function to each element of the array and return a new array with the results. Use an anonymous function as the callback to double each number in the array.

const originalArray = [1, 2, 3, 4,];


function processArray(array, callback) {
  return array.map(callback);
}

const doubledArray = processArray(originalArray, function(number) {
  return number * 2;
});

console.log(doubledArray); 

