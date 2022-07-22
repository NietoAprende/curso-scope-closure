'use strict';

const myGlobal = 0;

// Cada función cuenta con su propio ámbito léxico.
function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  // Función interna - Crea un closure
  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();