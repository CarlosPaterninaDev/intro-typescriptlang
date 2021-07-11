/*
    ===== Código de TypeScript =====
*/

function sum(a: number, b: number): number {
  return a + b;
}

const concat = (a: string, b: string): string => a + b;

function mult(number: number, otherNumber?: number, base: number = 2): number {
  return number * base;
}

const result = sum(10, 10);
const concatenate = concat('good', 'bye');

const resultmult = mult(100, 10);

console.log(result);
console.log(concatenate);
console.log(resultmult);

interface Character {
  name: string;
  hp: number;
  showHP: () => void;
}

function heal(character: Character, pointHeal: number): void {
  character.hp += pointHeal;
  console.log(character.showHP());
}

const legolas: Character = {
  hp: 100,
  name: 'Legolas',
  showHP() {
    console.log(`${this.name} HP: ${this.hp}`);
  },
};

heal(legolas, 10);
