// Reversing an array

// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
// For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its 
// elements. Neither may use the standard reverse method.

function reverseArray(arr){
  let reverse = []
  arr.forEach(currentVal => reverse.unshift(currentVal))
  return reverse
}

function reverseArrayInPlace(arr){
  let endPoint = arr.length
  for(let i=0; i < endPoint; i++){
    let endVal = arr.pop()
    arr.splice(i, 0, endVal)
  }
  return arr
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]