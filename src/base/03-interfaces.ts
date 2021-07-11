/*
    ===== Código de TypeScript =====
*/

interface Hero {
  name: string;
  skills: string[];
  address: Address;
  showAddress: () => string;
}

interface Address {
  city: string;
  country: string;
  street: string;
}

const spiderman: Hero = {
  name: 'Spiderman',
  skills: ['healing', 'webs'],
  address: {
    city: 'NY',
    country: 'USA',
    street: 'Main St',
  },
  showAddress() {
    return `${this.name}, ${this.address.city} ${this.address.country}`;
  },
};

const address = spiderman.showAddress();

console.log(address);
