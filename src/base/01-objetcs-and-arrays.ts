/*
    ===== Código de TypeScript =====
*/

const skills = ['cyclon', 'X strike', 'heal'];
// let skills = ['cyclon', 'X strike', 'heal', 1];

skills.push('counter');
skills.push('tackle');

// skills.push(100);

interface Pokemon {
  name: string;
  hp: number;
  skills: string[];
  atk?: number;
}

const pokemon: Pokemon = {
  name: 'Picaku',
  hp: 100,
  skills,
};

pokemon.atk = 120;

console.table(pokemon);
