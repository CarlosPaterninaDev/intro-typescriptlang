/*
    ===== Código de TypeScript =====
*/

export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Samsung Galaxy A71',
  price: 600,
};

const computer: Product = {
  description: 'Acer Nitro 5',
  price: 1500,
};

const products: Product[] = [];
products.push(phone);
products.push(computer);

export function calculateIVA(products: Product[]): number[] {
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * 0.19];
}

const [total, IVA] = calculateIVA(products);

// console.log(total);
// console.log(IVA);
