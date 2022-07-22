// Al iniciar un programa de JavaScript y al crear una función, se crea también un contexto de ejecución, el cual consta de dos fases, la fase de creación y la fase de ejecución.
// Durante la fase de creación, el motor de Js lee todo el programa, identifica variables y funciones; y les reserva un espacio en memoria. A este proceso se le conoce como "hoisting".

nameOfDog();

function nameOfDog() {
  console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';

// Como resultado, el programa anterior es equivalente al siguiente:
/* function nameOfDog() {
  console.log(`El mejor perrito es ${elmo}`);
}

var elmo;

nameOfDog();
elmo = 'Elmito'; */