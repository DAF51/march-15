
// // TASK 1

// // Adding character experience

// // Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

// // // TODO: create the character object here

// aurora = {
//   health: 150,
//   strength: 25,
//   xp: 0,


//   describe(){
//     return `Aurora has ${this.health} health, ${this.strength} points of strength and ${this.xp} points of xp`
//   }
// }

// // // Aurora is harmed by an arrow
// aurora.health -= 20;

// // // Aurora equips a strength necklace
// aurora.strength += 10;

// // // Aurora learn a new skill
// aurora.xp += 15;

// console.log(aurora.describe());




// TASK 2

// Modeling a dog

// Complete the following program to add the dog object definition.

// // TODO: create the dog object here

// dog = {
//   name: "NameGoesHere",
//   species: "SpeciesGoesHere",
//   measuring: "SizeGoesHere",

//   bark(){
//     return "BARK"
//   }
// }

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);





// TASK 3

// Modeling a circle

// Complete the following program to add the circle object definition. Its radius value is input by the user.

// const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here

// circle = {
//   radius: r,

//   circumference(){
//     return 2*Math.PI*this.radius
//   },

//   area(){
//     return Math.PI*(r**2)
//   }
// }

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);





// TASK 4

// Modeling a bank account

// Write a program that creates an account object with the following characteristics:

//     A name property set to "Alex".
//     A balance property set to 0.
//     A credit method adding the (positive or negative) value passed as an argument to the account balance.
//     A describe method returning the account description.

// Use this object to show its description, crediting 250, debiting 80, then show its description again.

class Account {
  constructor(name,balance){
    this.name = name,
    this.balance = balance
  }

  credit(num){
    this.balance+= num;
  }

  describe(){
    return `The holder of this account is named ${this.name}, their balance is ${this.balance}`
  }
}

const alex = new Account("Alex", 0)

console.log(alex.describe())
alex.credit(250)
console.log(alex.describe())
alex.credit(-80)
console.log(alex.describe())
