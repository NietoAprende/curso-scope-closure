// Al declarar, el valor por defecto es undefined
var firstName;
firstName = 'Andy';
console.log(firstName);

// Declaración y asignación
var lastName = 'David';
// Reasignación
lastName = 'Ana';
console.log(lastName);

// Declaración y asignación
var secondName = 'David';
// Redeclaración
// Al declarar variables de módulo o de función (var) podemos redeclarar sin ningún problema.
var secondName = 'Ana';
console.log(secondName);

// let - Declaración y asignación
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

// Reasignación
// Las variables declaradas como de bloque (let / const) no pueden ser redeclaradas en el mismo bloque.
// let fruit = 'Banana';

// const - Declaración y asignación
const animal = 'cat';
// Las variables declaradas con const no permiten ni la reasignación...
// animal = 'cat';
// Ni la redeclaración.
// const animal = 'Snake';
console.log(animal);

const vehicles = [];
vehicles.push("🛹");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);    