/* any type */

let age: any;
let title; //also any type

age = 30;
age = false;

/* any type in arrays */

let thingsArray: any[] = ["apple", 1, false, null];

thingsArray.push({ id: 123 });

/* functions & any */

function addTogether(value: any): any {
  return value + value;
}

const resultOne = addTogether("hello");
const resultTwo = addTogether(5);

//useful when migrating from js to ts
//because using any won't cause errors initially
//but it's better to avoid using any
//because it defeats the purpose of using typescript
