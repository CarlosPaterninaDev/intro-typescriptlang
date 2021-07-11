/*
    ===== Código de TypeScript =====
*/

interface Media {
  vol: number;
  second: number;
  song: string;
  detail: Details;
}

interface Details {
  author: string;
  year: number;
}

const mediaPlayer: Media = {
  vol: 90,
  second: 25,
  song: 'Dime que si',
  detail: {
    author: 'Los de adentro',
    year: 2000,
  },
};

const author = '';

const {
  vol: volumen,
  second,
  song,
  detail: { author: authorDetail },
} = mediaPlayer;
// const { author } = detail;

console.log(`Current Vol`, volumen);
console.log(`Current song`, song);
console.log(`Current second`, second);
console.log(`Current Author`, authorDetail);

const dragonBall: string[] = ['goku', 'vegeta', 'piccolo'];
const characterDBZ: string[] = ['goku', 'vegeta', 'piccolo'];

const [gokuuu, vegetaaaa, piccoloo] = dragonBall;
const [, , p] = characterDBZ;

// console.log(dragonBall[0]);
// console.log(dragonBall[1]);
// console.log(dragonBall[2]);

console.log(gokuuu);
console.log(vegetaaaa);
console.log(piccoloo);
console.log(p);
