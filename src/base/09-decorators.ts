/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'new Props';
    hello = 'override';
  };
}

@classDecorator
class GodClass {
  public property: string = 'Creator';

  print(): void {
    console.log('God say', this.property);
  }
}

const god = new GodClass();
console.log(god);
console.log(GodClass);
