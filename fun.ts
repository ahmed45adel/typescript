/*  1. Create a function “reverse” that takes a string and return it in a reversed
order and make sure to use the right types. */
let example = 'ahmed';
const myReverse = (myString: string): string => {
    /* get last char put it in arr then decrease index */
    let myStringReversed = [];
    for (let i = myString.length - 1; i >= 0; i--) {
        myStringReversed.push(myString[i]);
    }
    console.log(myString, myStringReversed.join(""));
    return myStringReversed.join("");
}
myReverse(example);


/*  2. Create a function “currencyGenerator” that takes an array of number and
string respectively and return amount in the specified currency
EX : // 100, $ = $100. */
let numbers: number[] = [100, 200, 300];
let dollarSign: string = '$';
const currencyGenerator = (arr: number[], sign: string) => {
    for (let i = 0; i < numbers.length; i++) {
        let currency = `${numbers[i]}${sign}`
        console.log(currency)
    }
}
currencyGenerator(numbers, dollarSign);



/* 3. Create a function “wordsCounter” that takes a sentence and word and
return how many times that word appeared in this sentence.
EX : // wordsCounter ( “Type script superset of java script” , “script” ) ;
o/p : ‘ script‘ is repeated 2 times */

let mySentence: string = 'my name is ahmed ahmed';
let myWord: string = 'ahmed';
const wordsCounter = (sentence: string, word: string): number => {
    let mySentenceArr = mySentence.split(" ");
    let counter: number = 0;
    for (let item of mySentenceArr) {
        item === word && counter++
    }
    console.log(word, counter)
    return counter;
}
wordsCounter(mySentence, myWord);

/* 4-
● Create an interface `CartItem` and replace the param's type with it
● Make variantId optional
function addToCart(item: {id: number, title: string, variantId: number}) {
console.log('output is :', `Adding "${item.title}" to cart.`);
}
 addToCart({id: 1, title: 'Concrete shoes'}); */


interface CartItem {
    id: number;
    title: string;
    variantId?: number;
}
function addToCart(item: CartItem) {
    console.log("output is :", `Adding "${item.title}" to cart.`);
}
addToCart({ id: 1, title: "Concrete shoes" });

/* Create Book class include some properties and method .
Properties should all to be private
- Title
- Author
- Year
- Month
Methods
- getSummary ( ) that return { this ‘Title’ was written by ‘Author’ in this ‘Year’ and ‘Month’ }
1 - Access each property from outside and try to change values .
2- print getSummary ( ) in each cases you make change */

class Book {
    constructor(private title: string, private author: string, private year: number, private month: number) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.month = month;
    }
    getSummary() {
        return `this ${this.title} was written by ${this.author} in year ${this.year} and month ${this.month}`;
    }
    get valueOfTitle() {
        return this.title;
    }
    set setValueOfTitle(value: string) {
        this.title = value;
    }
}

let book1 = new Book('book 1', 'ahmed adel', 2021, 7);
console.log(book1.valueOfTitle); // book 1
console.log(book1.getSummary()); // this book 1 was written by ahmed adel in year 2021 and month 7
book1.setValueOfTitle = 'book 2'
console.log(book1.valueOfTitle); // book 2
console.log(book1.getSummary()); //this book 2 was written by ahmed adel in year 2021 and month 7


/* - Create a Vehicle class that has a constructor that takes 2
parameters wheels , speed .
- Set constructor parameter private .
- Try to access it from outside
- Add a method inside class to count how many times it’s called . */

class Vehicle {
    private static lastCount: number = 0;
    count: number;
    constructor(private wheels: number = 4, private speed: string = 'very fast') {
        this.wheels = wheels;
        this.speed = speed;
        this.count = ++Vehicle.lastCount;
    }
    counter() {
        return this.count;
    }
    get valueOfWheels() {
        return this.wheels;
    }
    set valueOfWheels(value) {
        this.wheels = value;
    }
    get valueOfSpeed() {
        return this.speed;
    }
    set valueOfSpeed(value) {
        this.speed = value;
    }
}

const b1 = new Vehicle();
console.log(b1.counter()) // 1
const b2 = new Vehicle();
console.log(b2.counter()) // 2
const b3 = new Vehicle();
console.log(b3.counter()) // 3

// ======== Exercise 5.1 ========
  // Goals:
  // • Add explicit parameter type to the greet method
  // • Add explicit return type to the greet method

  class MC {
    greet(event = 'party') {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log('[Exercise 5.1]', mc.greet('show'));


  // ======== Exercise 5.2 ========
  // Goals:
  // • Add explicit parameter types to constructor
  // • Add typed parameters for storing values

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const jane = new Person('Jane', 31);

  console.log('[Exercise 5.2]', `The new person's name is ${jane.name}.`);


  // ======== Exercise 5.3 ========
  // Goals:
  // • Explicitly make the title and salary properties publicly available
  // • Reduce class to three lines of code while maintaining functionality

  class Employee {
    title: string;
    salary: number;
    constructor(title: string, salary: number) {
      this.title = title;
      this.salary = salary;
    }
  }

  const employee = new Employee('Engineer', 100000);

  console.log('[Exercise 5.3]', `The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);


  // ======== Exercise 5.4 ========
  // Goals:
  // • Add complete typing
  // • Make the Snake class inherit from Animal
  // • Make the Pony class inherit from Animal
  // • Make it so that the name member cannot be publicly accessed

  class Animal {
    constructor(name) {}
    move(meters) {
      console.log(`${this.name} moved ${meters}m.`);
    }
  }

  class Snake {
    move(meters) {
      console.log('Slithering...');
      // should call on parent's `move` method, w/ a default
      // slither of 5 meters
    }
  }

  class Pony {
    move(meters) {
      console.log('Galloping...');
      // should call on parent's `move` method, w/ a default
      // gallop of 60 meters
    }
  }

  // The class Animal should not be instantiable.
  // Delete or comment out once the desired error is achieved.
  const andrew = new Animal("Andrew the Animal");
  andrew.move(5);

  const sammy = new Snake("Sammy the Snake");
  sammy.move();
  console.log(sammy.name); // Should return error

  const pokey = new Pony("Pokey the Pony");
  pokey.move(34);
  console.log(pokey.name); // Should return error

  // ======== Exercise 5.5 ========
  // Goals:
  // • Make it so that only the Desk and Chair classes can see the
  //   manufacturer member

  class Furniture {
    constructor(manufacturer: string = 'IKEA') {}
  }

  class Desk extends Furniture {
    kind() {
      console.log('[Exercise 5.5]', `This is a desk made by ${this.manufacturer}`);
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log('[Exercise 5.5]', `This is a chair made by ${this.manufacturer}`);
    }
  }

  const desk = new Desk();
  desk.kind();
  desk.manufacturer; // Should return error

  const chair = new Chair();
  chair.kind();
  chair.manufacturer; // Should return error


/* ********************************************solution for last 5 tasks******************************************* */
// ======== Exercise 5.1 ========
// Goals:
// • Add explicit parameter type to the greet method
// • Add explicit return type to the greet method
class MC {
    greet(event: string = 'party'): string {
        return `Welcome to the ${event}`;
    }
}

const mc = new MC();
console.log('[Exercise 5.1]', mc.greet('show'));


// ======== Exercise 5.2 ========
// Goals:
// • Add explicit parameter types to constructor
// • Add typed parameters for storing values

class Person {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
}

const jane = new Person('Jane', 31);

console.log('[Exercise 5.2]', `The new person's name is ${jane.name}.`);


// ======== Exercise 5.3 ========
// Goals:
// • Explicitly make the title and salary properties publicly available
// • Reduce class to three lines of code while maintaining functionality

class Employee {
    constructor(public title: string, public salary: number) {
        this.title = title;
        this.salary = salary;
    }
}

const employee = new Employee('Engineer', 100000);

console.log('[Exercise 5.3]', `The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);


// ======== Exercise 5.4 ========
// Goals:
// • Add complete typing
// • Make the Snake class inherit from Animal
// • Make the Pony class inherit from Animal
// • Make it so that the name member cannot be publicly accessed

class Animal {
    constructor(protected name: string) { }
    move(meters: number) {
        console.log(`${this.name} moved ${meters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name) }
    move(steps: number) {
        super.move(5)
        console.log('Slithering...');
        // should call on parent's `move` method, w/ a default
        // slither of 5 meters
    }
}

class Pony extends Animal {
    constructor(name: string) { super(name) }
    move(steps: number) {
        super.move(60);
        console.log('Galloping...');
        // should call on parent's `move` method, w/ a default
        // gallop of 60 meters
    }
}

// The class Animal should not be instantiable.
// Delete or comment out once the desired error is achieved.
const andrew = new Animal("Andrew the Animal");
andrew.move(5);

const sammy = new Snake("Sammy the Snake");
sammy.move(12);
console.log(sammy.name); // Should return error

const pokey = new Pony("Pokey the Pony");
pokey.move(34);
console.log(pokey.name); // Should return error


// ======== Exercise 5.5 ========
// Goals:
// • Make it so that only the Desk and Chair classes can see the
//   manufacturer member

class Furniture {
    constructor(protected manufacturer: string = 'IKEA') { }
}

class Desk extends Furniture {
    kind() {
        console.log('[Exercise 5.5]', `This is a desk made by ${this.manufacturer}`);
    }
}

class Chair extends Furniture {
    kind() {
        console.log('[Exercise 5.5]', `This is a chair made by ${this.manufacturer}`);
    }
}

const desk = new Desk();
desk.kind();
desk.manufacturer; // Should return error

const chair = new Chair();
chair.kind();
chair.manufacturer; // Should return error
