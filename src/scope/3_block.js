function fruits() {
  // Utilizamos let y const dentro de un bloque para usar dichas variables únicamente dentro de dicho bloque.
  if (true) {
    // Function Scope
    var fruit1 = 'Apple';

    //  Block Scope
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana';

    console.log(fruit2);
    console.log(fruit3);
  }

  console.log(fruit1);
}

fruits();