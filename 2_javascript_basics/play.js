// ************************************************************************

// js core syntax

// ************************************************************************

/*
var name = "Jimi";
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
*/

// ************************************************************************

// let and const

// ************************************************************************

/*
const name = "Jimi";
var age = 29;
const hasHobbies = true;

age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
*/

// ************************************************************************

// arrow functions

// ************************************************************************

/*
const name = "Jimi";
var age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

const add = (a, b) => a + b;
const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));
*/

// ************************************************************************

// working with object, property and method

// ************************************************************************

/*
const person = {
  name: "Jimi",
  age: 25,
  greet() {
    console.log("Hi, I'm " + this.name);
  },
};

person.greet();
*/

// ************************************************************************

// Arrays and arrays methods

// ************************************************************************
/*
const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);
*/

// ************************************************************************

// Array, Objects and Reference Types

// ************************************************************************
/*
const hobbies = ["Sports", "Cooking"];
hobbies.push("programming");
console.log(hobbies);
*/

// ************************************************************************

// spread and rest operators

// ************************************************************************

/*
const hobbies = ["Sports", "Cooking"];
const copiedArray = [...hobbies];
// const copiedArray = hobbies.slice();
console.log(copiedArray);

const person = {
  name: "Jimi",
  age: 25,
  greet() {
    console.log("Hi, I'm " + this.name);
  },
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3));

const toArray2 = (...args) => {
  return args;
};

console.log(toArray2(1, 2, 3, 4, 5));
*/

// ************************************************************************

// destructuring

// ************************************************************************

const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

// const printName = (personData) => {
const printName = ({ name }) => {
  // console.log(personData.name);
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
