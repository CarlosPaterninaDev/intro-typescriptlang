/*
    ===== Código de TypeScript =====
*/

// Encapsulation
// class Superhero {
//     public alter: string;
//     private realName: string;
//     static phrase: string;
//   }

interface Superhero {
  alter: string;
  realName: string;
  phrase: string;
}

const superman: Superhero = {
  alter: 'superman',
  realName: 'Clark',
  phrase: 'Yay!',
};

// class Superhero {
//   alter: string;
//   realName: string;
//   phrase: string;

// }

class Superhero {
  constructor(public alter: string, public realName: string, public phrase: string) {}
}

const ironman: Superhero = new Superhero('ironman', 'tony', '$$$');

console.log(ironman);
console.log(superman);

class Person {
  constructor(public name: string, public address: string) {}
}

class Engineer extends Person {
  constructor(public name, public address, public job: string) {
    super(name, address);
  }
}

const carlos: Engineer = new Engineer('carlos', 'barranquilla', 'frontend');
console.log(carlos);
