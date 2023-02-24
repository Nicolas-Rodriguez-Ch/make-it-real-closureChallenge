// Ejercicio 1
// Estás diseñando un sistema de facturación. Debes representar la lista de facturas, donde cada factura está compuesta de un número, el nombre del cliente, la fecha, y unos ítems. Cada ítem tiene un id de producto, un precio por unidad y una cantidad.

// ¿Cómo representarías esta lista utilizando arreglos y objetos?

// const reciepts = [
//     {
//         number: number,
//         date: new Date,
//         items: {
//             prductId: productId,
//             pricePerUnit: pricePerUnit,
//             quantity: quantity
//         }
//     }
// ];

// Ejercicio 2
// Escribir una función crearContador que retorne una nueva función que incremente un número y lo retorne cada vez que es invocada:

// const contar = createContador()
// contar() // 1
// contar() // 2
// contar() // 3
// Recuerda de hacer uso de closures para evitar el uso de variables globales.

const crearContador = () =>{
    let counter = 0;
    return function contar(){
        console.log( counter+=1);
    }
}

const contar = crearContador();
contar(); // 1
contar(); // 2
contar(); // 3
contar(); // 4

// Ejercicio 3
// Escribir una función createGame que retorne una nueva función que reciba un número y permita adivinar un número secreto del 1 al 100. Si el número es mayor al número secreto la función retorna la cadena “Muy alto!”, si el número es menor retorna la cadena “Muy bajo!”. Si el número es el correcto retorna “Lo adivinaste, felicitaciones!”

// const guess = createGame() // numero secreto: 5
// guess(8) // "Muy alto!"
// guess(4) // "Muy bajo!"
// guess(5) // "Lo adivinaste, felicitaciones!"

const createGame = ()=>{
    return function secretNumber(num) {
        let secretNumber = Math.floor(Math.random()*100) +1;
        if (num > secretNumber) {return console.log(`Muy alto!`)};
        if (num < secretNumber) {return console.log(`Muy bajo!`)};
        if (num === secretNumber) {return console.log(`Lo adivinaste, felicitaciones!`)}
    }
}

const guess = createGame() // numero secreto: 5
guess(8) // "Muy alto!"
guess(4) // "Muy bajo!"
guess(5) // "Lo adivinaste, felicitaciones!"