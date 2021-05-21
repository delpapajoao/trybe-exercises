/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    console.log(numbers);
*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaDosNumeros = 0;

let mediaAritmetica = 0;

let valorMaior = 0;

let menorValor = 0;

let divisaoArray = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaDosNumeros = somaDosNumeros + numbers[index]; 
    console.log(somaDosNumeros)  
}

mediaAritmetica = somaDosNumeros / numbers.length;
    console.log(mediaAritmetica)

if (mediaAritmetica > 20) {
    console.log("Valor maior que 20")
}
else {
    console.log("Valor menor ou igual a 20")
}

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > valorMaior) {
        valorMaior = numbers[index]
    }
}
console.log("maiorValor =", valorMaior)

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 0)
        console.log(index, "Par")
    else 
        console.log(index, "impar")
}

for (let index = 0; index < numbers.length; index += 1) {
    if (index == 0) {
        menorValor = numbers[index];
    }
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}
console.log("menorValor =", menorValor)

let array = []

for (let index = 0; index < 25; index += 1 ) {
    array[index] = index + 1;
}
console.log(array)

for (let index = 0; index < 25; index += 1 ) {
    array[index] = index + 1;
    divisaoArray = array[index] / 2;
    console.log(divisaoArray)
}

