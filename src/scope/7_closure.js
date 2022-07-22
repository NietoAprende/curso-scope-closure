function greeting() {
  let username = 'Andy';

  function displayUsername() {
    // Crea closure con 'username'
    return `Hello ${username}`;
  }

  return displayUsername();
}

const greet = greeting;
console.log(greet);
console.log(greet());