// TASK 1
// Musketeers

// Write a program that:

//     Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
//     Shows each array element using a for loop.
const musketeers = ["Athos", "Porthos", "Aramis"]

for(let i=0;i< musketeers.length;i++){
  console.log(musketeers[i])
}

//     Adds the "D'Artagnan" value to the array.
//     Shows each array element using the forEach() method.
musketeers.push("D\'Artagnan")
musketeers.forEach(currentMusk => console.log(currentMusk))

//     Remove poor Aramis.
//     Shows each array element using a for-of loop.

const aramisInd = musketeers.indexOf("Aramis");
musketeers.splice(aramisInd, 1);

for(let currentMusk of musketeers){
  console.log(currentMusk);
}



// TASK 2
// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
// const values = [3, 11, 7, 2, 9, 10];

const values = [3, 11, 7, 2, 9, 10];

console.log(values.reduce((a,b)=> a+b));


// TASK 3
// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
// const valuesMax = [3, 11, 7, 2, 9, 10];

const valuesMax = [3, 11, 7, 2, 9, 10];

console.log(valuesMax.reduce((a,b) => Math.max(a, b)))


// TASK 4
// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

let wordList= []
let word =""

while(word.toLowerCase()!= "stop") {
  word = prompt("Give me a word")

  if(word.toLowerCase() === "stop") {
    wordList.forEach(currentWord => console.log(currentWord))
  } else {
    wordList.push(word);
  }
}

