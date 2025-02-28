/* classes 101  */

type Base = "classic" | "thick" | "thin" | "garlic";

interface HasFormatter {
  format(): string;
}

/* Inheritance && abstract class */
abstract class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`;
  }

  format() {
    return `This menu item is called ${this.title} and is $${this.price}`;
  }
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    //using the super to have the parameters from the menuItem
    super(title, price);
  }

  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(b: Base): void {
    this.base = b;
  }
}

const pizzaOne = new Pizza("omar special", 27);
console.log(pizzaOne);

/* classes as Types */
function addMushroomsToPizzas(pizzas: Pizza[]): void {
  for (const p of pizzas) {
    p.addTopping("mushrooms");
  }
}

/* addMushroomsToPizzas([pizzaOne]);
console.log(pizzaOne); */

function printMenuItem(item: MenuItem): void {
  console.log(item.details);
}

console.log(pizzaOne.details);

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

printFormatted(pizzaOne);

/* abstract class */
