// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = false 
// javascript is dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const oustsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 4648135497641463513n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "tanmay",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof oustsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
