

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const {fromEuroToDollar} = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)


    
})

test("un yen deberia 156.5 Yenes", function() {

    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(3.5);

    // Si 1 Yen son 156.5 yen, entonces 3.5 yen debe ser (3.5 * 156.5)
    const expecte = 3.5 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(547.75); 
})


test("un dolar deberia 0.87 centavos de dolar", function() {

    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const Euros = fromYenToPound(3.5);

    // Si 1 Euro son 0.87 centavos de euros, entonces 3.5 yen debe ser (3.5 * 156.5)
    const espero = 3.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(3.045); 
})