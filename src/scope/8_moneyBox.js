// Sin closure
/* function moneyBox(coins) {
  let savedCoins = 0;
  savedCoins += coins;
  console.log(`MoneyBox: $${savedCoins}`);
}

moneyBox(2);
moneyBox(2); */

function moneyBox(name) {
  const user = name;
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox ${user}: $${saveCoins}`);
  }

  return countCoins;
}

const myMoneyBox = moneyBox("Andy");
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

// Creación de instancias independientes con su propio contexto léxico.
const moneyBoxAna = moneyBox("Oscar");
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);