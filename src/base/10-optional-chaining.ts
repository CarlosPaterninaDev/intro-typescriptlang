/*
    ===== Código de TypeScript =====
*/

interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Carlos',
};

const passenger2: Passenger = {
  name: 'Nely',
  children: ['trufa', 'kyra'],
};

function printChildren(passenger: Passenger): void {
  const countChildren = passenger.children?.length || 0;

  console.log(countChildren);
}

printChildren(passenger1);
printChildren(passenger2);
