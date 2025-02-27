/* tuples */

let employee: [string, number, boolean] = ["Omar", 27, true];

/* tuples examples */
let hsla: [number, string, string, number] = [200, "50%", "50%", 0.3];

let xy: [number, number] = [100, 200];

function useCoords(): [number, number] {
  //get coords
  const lat = 100;
  const long = 50;
  return [lat, long];
}

const [lat, long] = useCoords();

/* named tuples */

let users: [name: string, age: number];

users = ["omar", 27];
