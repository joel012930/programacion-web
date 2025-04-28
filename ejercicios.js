//nivel 1-
//ejercicios if
//1)
let numero = 15;
if (numero > 10) {
  console.log("el numero es mayor a 10 ");
}
//2)

let numero1 = 9;
let numero2 = 12;
if (numero1 > numero2) {
  console.log("el primer numero es mayor ");
}
if (numero1 < numero2) {
  console.log("el segundo numero es mayor ");
}
// 1. Mostrar números del 1 al 5
let contador = 1;
while (contador <= 5) {
  console.log(contador);
  contador++;
}

// 2. Sumar números del 1 al 4
let suma = 0;
let i = 1;
while (i <= 4) {
  suma += i;
  i++;
}
console.log("La suma es:", suma);
// 1. Imprimir números del 0 al 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. Sumar números del 0 al 4
let sumaTotal = 0;
for (let i = 0; i < 5; i++) {
  sumaTotal += i;
}
console.log("La suma total es:", sumaTotal);
// Variable con número y mostrar si es negativo, cero o positivo
let number2 = 4;

if (numero2 < 0) {
  console.log("Negativo");
} else if (numero2 === 0) {
  console.log("Cero");
} else {
  console.log("Positivo");
}
// Contar del 1 al 10 sin mostrar el 5
let contador2 = 1;

while (contador2 <= 10) {
  if (contador2 !== 5) {
    console.log(contador2);
  }
  contador2++;
}

// Recorrer del 1 al 10 y sumar solo pares
let sumaPares = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}
console.log("La suma de los números pares es:", sumaPares);
// Crear array de 10 números
let numeros = [3, 7, 2, 8, 5, 6, 1, 9, 4, 0];

let sumaMayores = 0;
let contadorMenores = 0;

// Recorrer array
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 5) {
    sumaMayores += numeros[i];
  } else {
    contadorMenores++;
  }
}

// Restar 1 en 1 el valor de sumaMayores hasta llegar a 0
while (sumaMayores > 0) {
  console.log(sumaMayores);
  sumaMayores--;
}

// Mostrar resultados finales
console.log("Cantidad de números menores o iguales a 5:", contadorMenores);
