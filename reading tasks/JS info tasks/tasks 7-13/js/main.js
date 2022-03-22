// TASK 7

// Map to names
// importance: 5

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.


//  let john = { name: "John", age: 25 };
//  let pete = { name: "Pete", age: 30 };
//  let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(currentUsers => {return currentUsers.name})

// console.log( names ); // John, Pete, Mary







// TASK 8
// Map to objects
// importance: 5

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.



//  let john = { name: "John", surname: "Smith", id: 1 };
//  let pete = { name: "Pete", surname: "Hunt", id: 2 };
//  let mary = { name: "Mary", surname: "Key", id: 3 };

//  let users = [ john, pete, mary ];

//  let usersMapped = users.map(currentUser =>({
//    fullName: `${currentUser.name} ${currentUser.surname}`,
//    id: currentUser.id
//  }))

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log(usersMapped)

//   alert( usersMapped[0].id ) // 1
//   alert( usersMapped[0].fullName ) // John Smith

// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.






// TASK 9

// Sort users by age
// importance: 5

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(arr) {
//   arr.sort((a,b) => a.age-b.age)
// }

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete







// TASK 10

// Shuffle an array
// importance: 3

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

// All element orders should have an equal probability. For instance, [1,2,3]
// can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

// let task10Array = [1,2,3]

// function shuffle(arr) {
//   let currentIndex = arr.length, randomIndex;

//   while(currentIndex !=0) {
//     randomIndex= Math.floor(Math.random()*currentIndex);
//     currentIndex--;
//     [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
//   }
//   return arr;
// }

// console.log(shuffle(task10Array))






// TASK 11

// Get average age
// importance: 4

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let task11Array = [ john, pete, mary ];

// function getAverageAge(arr){
//   ages = arr.map(user => user.age)
//   combinedAges= ages.reduce((a,b) => a+b)

//   return combinedAges/arr.length
// }

// alert( getAverageAge(task11Array) ); // (25 + 30 + 29) / 3 = 28






// TASK 12

// Filter unique array members
// importance: 4

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

// function unique(arr){
//   filteredArray = arr.filter(function(currentString, index) {
//     return arr.indexOf(currentString) === index;
//   })
//   return filteredArray
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O






// TASK 13

// Create keyed object from array
// importance: 4

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
// For example:

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */

// Such function is really handy when working with server data.
// In this task we assume that id is unique. There may be no two array items with the same id.
// Please use array .reduce method in the solution.


let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr){
  userObj = {}
  arr.reduce(function(prevUser,currentUser){
  
  })
  
}

let usersById = groupById(users);