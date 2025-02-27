/* functions */

//traditional function
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

//arrow function
const substractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};

function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
  //if we want to specify the return type we can do it like this
  //return total; //but we need to change the return type from void to number
}

addAllNumbers([1, 2, 3, 4, 5]);

/* return type inference */

function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`;
}

const result = formatGreeting("Omar", "Hello");
