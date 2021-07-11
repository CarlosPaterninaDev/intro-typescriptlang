/*
    ===== Código de TypeScript =====
*/

// function Type(params: string) {
//   return params;
// }

function Type<T>(params: T) {
  return params;
}

let ImString = Type('Hola Mundo');
// let ImNumber = Type(111);
let ImNumber = Type(111);
let ImBoolean = Type(false);
let ImArray = Type([1, 2, 3, 4, 5]);

// let ImSpecificType= Type<string[]>([1,2,3,4,5])
let ImSpecificType = Type<string[]>(['one', 'two', 'three']);

function TypeReturnSpecific<T>(params: T): string {
  return `${params}`.toLocaleUpperCase();
}

let specificString = TypeReturnSpecific(false);
console.log(specificString);
