/* type aliases */

//example 1 - tuple

type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return [r, g, b];
}

//example 2 - object literal

type User = {
  name: string;
  score: number;
};

const userOne: User = { name: "Omar", score: 10 };

function formatUser(user: User): void {
  console.log(`${user.name} has a score of ${user.score}`);
}

formatUser(userOne);
