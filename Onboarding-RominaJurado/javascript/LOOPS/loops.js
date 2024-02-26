// 1. Usando un bucle "for", cree un programa que permita el ingreso de un número entre 1 y 100 a través de un mensaje, luego imprime a través de la consola todos los números que están entre el número ingresado y 0 (es decir, en orden descendente) .
// Supongamos que el número introducido es 5. Este sería el resultado:
// 5
// 4
// 3
// 2
// 1
// 0
// 2. Usando un bucle "for", cree un programa que permita la entrada de un número a través de un mensaje entre 1 y 10, y muestre a través de la consola su tabla de multiplicar (solo los primeros 10 múltiplos).
// Supongamos que el número ingresado es 5. Este sería el resultado:
// 1x5=5
// 2x5=10
// 3x5=15
// 4x5=20
// 5x5=25
// 6x5=30
// 7x5=35
// 8x5=40
// 9x5=45
// 10x5=50
// 3. Usando un bucle " while ", cree un programa que permita la entrada de números a través de un mensaje. Los números deben sumarse (acumularse) en una variable resultante. La entrada de números finalizará cuando el usuario ingrese un 0. Al final, muestre el valor de la variable suma a través de la consola.
// Supongamos que ingresó 1, luego 3 y luego 0. Este sería el resultado: 4.
// ¡Consejo! Tenga cuidado, recuerde que el mensaje devuelve una cadena.
// 4.  Usando ahora un bucle "do while" y siguiendo las mismas instrucciones del ejercicio anterior, visualiza en la consola, el valor de la variable que acumula la suma de los números ingresados.
// Supongamos que ingresaste 1, luego 3 y luego 0. Este sería el resultado: 4
// ¡Consejo! use comillas invertidas para esto.
// 5. Usando un bucle "for in", crea un objeto con al menos 5 propiedades, haz un programa que recorra dicho objeto y solo muestre todas las claves de sus propiedades en la consola.
// En la consola debería verse así:
// nombre
// apellido
// origen
// estudios
// ​​​​​​6​Usando un bucle "for in", cree un programa que se ejecute a través del objeto creado en el ejercicio anterior y solo muestre los valores de cada una de las claves en la consola.

let nro = parseInt(prompt("Ingrese un número entre 1 y 100:"));

if (nro >= 1 && nro <= 100) {
    for (let i = nro; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("Numero fuera del rango especificado.");
}

let nro_1 = parseInt(prompt("Ingrese un número entre 1 y 10:"));

if (nro_1 >= 1 && nro_1 <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i}x${nro_1}=${i * nro_1}`);
    }
} else {
    console.log("Numero fuera del rango especificado.");
}

let suma = 0;
let nro3;
while ((nro3 = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"))) !== 0) {
    suma += nro3;
}
console.log(suma);


let suma_segundo = 0;
let nro3_segundo;
do {
    nro3_segundo = parseInt(prompt("Ingrese un número (ingrese 0 para finalizar):"));
    suma_segundo += nro3_segundo;
} while (nro3_segundo !== 0);
console.log(suma_segundo);


let perdona = {
    nombre: "Romina",
    apellido: "Jurado",
    origen: "Argentina",
    estudios: "Universitarios",
    edad: 21
};

for (let clave in perdona) {
    if (perdona.hasOwnProperty(clave)) {
        console.log(clave);
    }
}

// Nivel de dificultad: Medio
// 1. Utilizando el bucle que consideres, vamos a utilizar la variable que almacenaba la suma de los números en el ejercicio 3 como "número secreto". El nuevo programa permitirá ingresar números a través de un mensaje hasta que el número ingresado sea igual al guardado en la variable del ejercicio #3.
// Si el valor ingresado es mayor que el número "secreto", notifica al usuario a través de la consola ("el número ingresado es mayor que el secreto", lo mismo si el valor es menor.
// Así sucesivamente hasta que el usuario adivine el número secreto. Finalmente, muestra un mensaje de felicitación en pantalla y te indica cuántos intentos has realizado ("¡Has acertado! El número secreto era <número> y has hecho <x> intentos"
// 2. Usando el bucle que consideres correcto, crea un programa que reciba un número a través de un mensaje y muestre todos sus divisores (divisores) a través de la consola.
// Consejo: DIVISORES/DIVISORES: son todos números naturales que dividen exactamente a otro número natural. Ejemplo: “Los divisores de '15' son: 1, 3, 5 y 15. (La división de '15' entre cualquiera de estos números es exacta)
// Supongamos que se ingresó 50. Este sería el resultado 50, 25, 10, 5, 2, 1.
// ¡Consejo! recordar o investigar al operador 
// 3. Teniendo en cuenta la función de timbre, crea un bucle (el que consideres) que muestre una cadena a través de la consola que a su vez concatene la cadena que devuelve la función tantas veces como el número que el usuario ingresa en el teclado.
// Por ejemplo, si el usuario ingresa el número 5, el resultado debería ser:
// Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong
// función Campana() {
//       console.log("Ding Dong");
//       devuelve "Ding Dong",
// }
// 4. Partiendo de las constantes dateLimit y fechas, haz un bucle (el que consideres) que muestre en la consola las fechas del array mayores o iguales a la fecha almacenada en la constante dateLimite.
// límite de fecha constante = "1997-8-3"
// fechas constantes = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]
// 5. Usando un bucle "for of", cree una matriz de cadenas con colores e imprima cada uno de los colores incluidos en la matriz a través de la consola.
// En la consola debería verse así (por ejemplo):
// Rojo
// Verde
// Azul
// Violeta
// Marrón
// Negro
// Blanco
// 6. Ahora toma como referencia el bucle del ejercicio anterior y colócalo dentro de una función para que realice la misma tarea pero pueda reutilizarse tantas veces como sea necesario sin tener que reescribir el código del bucle.
// 7. Usando un bucle "for of", crea un arreglo con 5 números y haz un programa que recorra ese arreglo y muestre el doble de cada uno de los elementos, en la consola.
// En la consola debería verse así:

// el numero es 5 y su doble es 10
// el numero es 7 y su doble es 14
// el numero es 1 y su doble es 2
// el numero es 3 y su doble es 6
// el numero es 50 y su doble es 100

// 8. Usando el bucle que creas correcto, crea un arreglo con al menos 4 objetos con 4 propiedades, cada uno de esos objetos creados debe representar a un miembro de un grupo familiar.
// (pueden ser personas ficticias).
// Luego haz un programa (al decir programa la intención es que no sea solo el bucle, sino una función que contenga el bucle) que muestre un mensaje de presentación para cada elemento del array a través de la consola.
// En la consola debería verse como el ejemplo.
// Hola, soy María López (madre) y tengo 40 años.
// Hola, soy Juan Perez (padre) y tengo 38 años.
// Hola, soy Romina Perez (hija) y tengo 13 años.
// Hola, soy Tomás Perez (hijo) y tengo 10 años.
// Modelo de objetos
// {nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre'}
// ¡Consejo! use comillas invertidas para esto.

let secreto = 42; // Puedes cambiar este número secreto
let trys = 0;

while (true) {
    let numeroIngresado = parseInt(prompt("Adivina el número secreto:"));

    if (numeroIngresado > secreto) {
        console.log("El número ingresado es mayor que el secreto.");
    } else if (numeroIngresado < secreto) {
        console.log("El número ingresado es menor que el secreto.");
    } else {
        console.log(`Adivinaste, el número secreto es ${secreto} e hiciste ${trys} intentos.`);
        break;
    }
    trys++;
}


function campana() {
    return "Ding Dong";
}
let repes = parseInt(prompt("Ingrese un número para repetir la campana:"));
for (let i = 0; i < repes; i++) {
    console.log(campana());
}



let nro2 = parseInt(prompt("Ingrese un número para encontrar sus divisores:"));
console.log(`Los divisores de ${nro2} son:`);
for (let i = 1; i <= nro2; i++) {
    if (nro2 % i === 0) {
        console.log(i);
    }
}


const limite = "1997-8-3";
const fechas = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];

for (let fecha of fechas) {
    if (fecha >= limite) {
        console.log(fecha);
    }
}


let colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];
for (let color of colores) {
    console.log(color);
}



let numeros = [5, 7, 1, 3, 50];

for (let numero of numeros) {
    console.log(`El número es ${numero} y su doble es ${numero * 2}`);
}


let familia = [
    { nombre: 'Romina', apellido: 'Jurado', edad: 21, miembro: 'hija' },
    { nombre: 'Maria', apellido: 'Surco', edad: 50, miembro: 'madre' },
    { nombre: 'Keyla', apellido: 'Jurado', edad: 29, miembro: 'hija' },
];

for (let miembro of familia) {
    console.log(`Hola, soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años.`);
}


// Difficulty Level: High
// 1. Using the loop that you consider, create a program that allows the entry of numbers on the screen through a prompt and
// calculates the sum of the even numbers on the one hand and
// the odd numbers on the other.
// The data entry ends when the user enters a 0.
// In the console it should look like this (for example):
// Even number: 38
// Odd numbers 30
// 2. Using the loop that you think is correct, create an array of 10 numbers and make a program that prints the largest number in the array, on the screen.
let par = 0;
let impar = 0;

let numero = parseInt(prompt("Ingresa un número (ingresa 0 para detener):"));
while (numero>0) {

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        par += numero;
    } else {
        impar += numero;
    }

    numero = parseInt(prompt("Ingresa un número (ingresa 0 para detener):")); 
}

console.log(`suma de numeros pares: ${par}`);
console.log(`suma de numeros impares: ${impar}`);


let vec_num = [42, 43, 12, 32, 100, 11, 22, 43, 23, 54];
let may = vec_num[0]; 

for (let i = 1; i < vec_num.length; i++) {
    if (vec_num[i] > may) {
        may = vec_num[i];
    }
}

console.log(`El numero mas grande es: ${may}`);