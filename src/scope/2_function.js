// Function Scope: Las variables declaradas aquí son accesibles únicamente dentro de esta función o funciones anidadas dentro de ella.
function greeting() {
  let userName = 'Andres';
  console.log(userName);

  if (userName === 'Andres') {
    console.log(`Hello ${userName}!`)
  }
}

greeting();
console.log(userName);