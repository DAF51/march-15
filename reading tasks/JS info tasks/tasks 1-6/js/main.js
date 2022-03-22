// TASK 1
// Translate border-left-width to borderLeftWidth
// importance: 5

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.
// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string into an array, transform it and join back.

// function camelize(str) {
//   stringArray = str.split("-")

//   for(let i=0;i<stringArray.length;i++){
//     if(i===0) {
//       stringArray[i]= stringArray[i].toLowerCase()
//     } else {
//       wordCap = stringArray[i].charAt(0).toUpperCase()+stringArray[i].slice(1)
//       stringArray[i] = wordCap
//     }
//   }
//   return joinedString =stringArray.join("")
// }







// TASK 2

// Filter range
// importance: 4

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// function filterRange(arr, a, b) {
//   filteredArray =[]

//   arr.forEach(function(currentVal){
//     if(currentVal >= a && currentVal <= b) {
//       filteredArray.push(currentVal)
//     }
//   })
//   return filteredArray
// }

// task2NumArray = [1,2,3,4,5,6]

// console.log("The filtered array is "+filterRange(task2NumArray, 3,5))






// TASK 3

// Filter range "in place"
// importance: 4

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.
// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

// function filterRangeInPlace(arr, a, b){
//   arr.forEach(function(currentVal,i){
//     console.log(`The current Val is ${currentVal} and it's being compared against ${a} and ${b}`)
//     if(currentVal < a || currentVal > b)
//       arr.splice(i,1);
//       console.log(`The array is now ${arr}`)
//   })
// }

// let array = [5, 3, 8, 1];
// filterRangeInPlace(array, 1, 4)
// console.log(array)





// // TASK 4

// // Sort in decreasing order
// // importance: 4

// let task4Array = [5, 2, 1, -10, 8];

// task4Array.sort((a,b) => b-a)

// alert( task4Array ); // 8, 5, 2, 1, -10






// TASK 5

// Copy and sort array
// importance: 5

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

// let task5Array = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr){
//   let arrayCopy = arr.slice()
//   return arrayCopy.sort()
// }

// let sorted = copySorted(task5Array);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( task5Array ); // HTML, JavaScript, CSS (no changes)






// TASK 6

// Create an extendable calculator
// importance: 5

// Create a constructor function Calculator that creates “extendable” calculator objects.
// The task consists of two parts.

//     First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
//     Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

//     let powerCalc = new Calculator;
//     powerCalc.addMethod("*", (a, b) => a * b);
//     powerCalc.addMethod("/", (a, b) => a / b);
//     powerCalc.addMethod("**", (a, b) => a ** b);

//     let result = powerCalc.calculate("2 ** 3");
//     alert( result ); // 8

//     No parentheses or complex expressions in this task.
//     The numbers and the operator are delimited with exactly one space.
//     There may be error handling if you’d like to add it.

class Calculator {
  constructor(){
  }

  methods= {
    "-":(a,b) => a-b,
    "+":(a,b) => a+b
  };

  calculate(str){
    const equationArray = str.split(" "),
     num1 = Number(equationArray[0]),
     num2 = Number(equationArray[2]),
     operator = equationArray[1];

    return this.methods[operator](num1,num2)
    
  }

  addMethod(name, equation) {
    this.methods[name] = equation 
  }


}

 let calc = new Calculator;
 alert( calc.calculate("3 + 7"))

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8