/* union types */

let someId: number | string; //union type, this variable can either hold a number || string

let email: string | null;

email = "omarscoppola97@gmail.com";
email = null;

type Id = number | string;
let anotherId: Id;

anotherId = "aosdaosidaisjdasd";
anotherId = "126123";

/* union type pitfall */

function swapIdType(id: Id): Id {
  if (typeof id === "string") {
    //can use string methods
    return parseInt(id);
  } else {
    //can use number methods
    return id.toString();
  }
}

const idOne = swapIdType(123);
const idTwo = swapIdType("456");

/* tagged interfaces */
interface Car {
  type: "car";
  wheels: number;
  topSpeed: number;
}

interface Animal {
  type: "animal";
  legs: number;
  hasTail: boolean;
}

function logDetails(value: Car | Animal): void {
  if (value.type === "car") {
    console.log(`this is a car with ${value.wheels} wheels`);
  } else {
    console.log(`this is an animal with ${value.legs} legs`);
  }
}
