/*
    ===== Código de TypeScript =====
*/

import { calculateIVA, Product } from './05-destructuring-arguments';

const car: Product[] = [
  {
    description: 'Mouse',
    price: 15,
  },
  {
    description: 'Keyboard',
    price: 23,
  },
  {
    description: 'Monitor',
    price: 170,
  },
];

const [total, IVA] = calculateIVA(car);
console.log(total, IVA);
