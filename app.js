// Convertir de Dólares a Yenes
function fromDollarToYen(dollars) {
    const conversionRate = 115.5; // 1 USD = 115.5 JPY
    return dollars * conversionRate;
  }
  
  // Convertir de Euros a Dólares
  function fromEuroToDollar(euros) {
    const conversionRate = 1.05; // 1 EUR = 1.05 USD
    return euros * conversionRate;
  }
  
  // Convertir de Yenes a Libras Esterlinas
  function fromYenToPound(yens) {
    const conversionRate = 0.0068; 
    return yens * conversionRate;
  }
  let dollars = 100;
let euros = 50;
let yens = 1000;

console.log(`100 USD en Yenes: ${fromDollarToYen(dollars)} JPY`); 
console.log(`50 EUR en Dólares: ${fromEuroToDollar(euros)} USD`); 
console.log(`1000 JPY en Libras Esterlinas: ${fromYenToPound(yens)} GBP`); 