// * destructuring object
const { coffeeStock, isCoffeeMachineReady } = require(`./coffeeStock.js`);

const makeCoffe = (type, miligram) => {
  if (coffeeStock[type] > miligram) return console.log(`Kopi berhasil dibuat`);
  return console.log(`Coffe gagal dibuat`);
};

makeCoffe("robusta", 20);
console.log(coffeeStock);
console.log(isCoffeeMachineReady);
