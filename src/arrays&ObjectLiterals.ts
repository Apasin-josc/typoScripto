/* arrays */

let names: string[] = ["Omar", "Jose", "QuePadre"];
let ages: number[] = [27, 28, 29];

names.push("Salsa");
ages.push(30);

/* type inference with arrays */

let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3];

const f = fruits[3];

let things = [1, true, "hello"];
const t = things[0];

/* object Literals */

let user: { firstName: string; age: number; id: number } = {
  firstName: "Omar",
  age: 27,
  id: 1,
};

/* type inference with object literals */

let person = {
  name: "Jose",
  score: 10,
};
