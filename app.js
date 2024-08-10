// / Declaramos una función con el nombre exacto "formEuroToDollar"
// const fromEuroToDollar = function(valueInEuro) {
//     // Convertimos el valor a dólares
//     let valueInDollar = valueInEuro * 1.07;
//     // Retornamos el valor en dólares
//     return valueInDollar;
// }



// const sum = (a,b) => {
//     return a + b
// }
// console.log(sum(7,3))


//Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(euros)  {
   let valorEnDolares = euros * 1.07;
   return valorEnDolares 
}

const fromDollarToYen = function(dollar) {
    let valorEnYens = dollar * 156.5;
    return valorEnYens
}

const fromYenToPound = function (yenes) {
    let valorEnEuros = yenes * 0.87;
        return valorEnEuros
    
}



















module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound };