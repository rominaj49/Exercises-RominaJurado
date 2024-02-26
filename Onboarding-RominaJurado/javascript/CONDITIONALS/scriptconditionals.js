//// Nivel de dificultad: Bajo
//1. A partir del siguiente ejemplo, crea un bloque condicional que evalúe si la variable num1 es mayor que num2, de ser así, imprime el valor de num1 a través de la consola, de lo contrario imprime num2.
// let numero1 = 4
// let numero2 = 5
//2. Basado en el ejercicio 1, ahora modifica el bloque de la siguiente manera:
// Si num1 es mayor que num2, imprime num1 a través de la consola,
// si num2 es mayor, imprime num2 y finalmente
// si son iguales imprime una cadena que dice “Los números son iguales”
//3. Basado en el ejercicio 1, crea un bloque condicional que evalúe si estas variables son iguales o no, de ser así imprime una cadena a través de la consola “Los números son iguales”, en caso contrario “Los números son diferentes”
//4. A partir del siguiente ejemplo, crea un bloque condicional que evalúe si una de estas variables es mayor que la otra; si es así, muestre “La fecha [variable 1] es mayor que [variable 2]” por consola, y, si son iguales, imprima “Las fechas son iguales”
// ¡Consejo! Utilice comillas invertidas para imprimir a través de la consola.
// let fecha1 = "2018-9-2"
// let fecha2 = "2023-7-5"
// La fecha 2023-7-5 es mayor que la fecha 2018-9-2
//5. Ahora intenta cambiar el valor de las variables. Al igual que en los ejercicios anteriores, se debe imprimir una cadena a través de la consola que diga si la fecha 1 es mayor que la fecha 2 o todo lo contrario.
//¡Consejo! Investiga cómo se comparan las cuerdas.
//6. En este caso, crea un bloque condicional que evalúe cuál de los tres números almacenados en las variables es el mayor. Imprime una cadena a través de la consola que dice “El número [ ] es el más grande”.
// let numero1 = 5
// let numero2 = 7
// let que el número 3 = 9

let numero1 = 4;
let numero2 = 5;

if (numero1 === numero2) {
    console.log("Los números son iguales");
} else {
    console.log("Los números son diferentes");
}
if (numero1 > numero2) {
    console.log(numero1);
} else if (numero2 > numero1) {
    console.log(numero2);
} else {
    console.log("Los números son iguales");
}

let numero_1 = 5;
let numero_2 = 7;
let numero_3 = 9;

if (numero_1 > numero_2 && numero_1 > numero_3) {
    console.log(`El número ${numero_1} es el más grande`);
} else if (numero_2 > numero_1 && numero_2 > numero_3) {
    console.log(`El número ${numero_2} es el más grande`);
} else if (numero_3 > numero_1 && numero_3 > numero_2) {
    console.log(`El número ${numero_3} es el más grande`);
} else {
    console.log("Hay al menos dos números iguales");
}

let fechanro1 = "2023-9-2";
let fechanro2 = "2023-9-5";

if (fechanro1 > fechanro2) {
    console.log(`La fecha ${fechanro1} es mayor que la fecha ${fechanro2}`);
} else if (fechanro2 > fechanro1) {
    console.log(`La fecha ${fechanro2} es mayor que la fecha ${fechanro1}`);
} else {
    console.log("Las fechas son iguales");
}


// Nivel de dificultad: Medio
// 1. Usando un "interruptor", crea un programa que te permita ingresar estos nombres de colores en la pantalla: rojo, azul o verde. E imprimir en pantalla en cada caso:
// rojo: “El color de la pasión”
// azul: “El color del mar”.
// verde: “El color de la naturaleza”
// ¡Consejo! No olvides la declaración de descanso.
// 2. Usando un switch, crea un programa que te permita ingresar en la pantalla:
// dos valores numéricos (número del 1 al 100)
// una operación (suma, resta, multiplicación, división)
// e imprimir en pantalla en cada caso:
// suma: primer valor + el segundo
// resta: primer valor - el segundo
// multiplicación: primer valor * segundo
// división: primer valor / segundo
// Con el literal correspondiente ("la suma de <num1> y <num2> es...", etc.)
// ¡Consejo! No olvides la declaración de descanso.
// 3. A partir de la siguiente estructura, crea un bloque condicional que
// recibe 2 objetos que representan personas con las propiedades: nombre, edad, altura
// e imprimir por consola en el mismo console.log:
// ¿Cuál de las dos personas es más alta?
// ¿Cuál es el mayor?
// ¡Consejo! Puede utilizar operadores lógicos o if anidados.
// let persona = {
// nombre = Juan,
// edad = 39,
// altura = 1,69
// }
// Resultado de ejemplo: "Juan es más alto y mayor que Rosa"
// 4. Crea un programa que te permita ingresar en la pantalla:
// tu nombre, edad, altura y visión.
// e imprimimos a través de la consola una cadena “Estás calificado para conducir”,
// Para ello la persona deberá:
// Tener al menos 18 años.
// Mide más de 110 cm.
// Tener una visión de al menos 8 sobre 10.
// ¡Consejo! Recuerde el mensaje ( ) para ingresar datos en la pantalla.
// 5. Crea un programa que te permita ingresar tu edad en la pantalla e imprimirla en la pantalla si eres:
// infantil (0 a 12 años)
// adolescente (13 a 18 años)
// joven mayor (19 a 45 años)
// personas mayores (mayores de 45 años)
// ¿De verdad es tan viejo? (más de 100 espectáculos)
// ¡Consejo! Recuerde alerta ( ) para mostrar datos en la pantalla.
// 6. Crea un programa que te permita ingresar solo números del 1 al 3 en la pantalla y luego cualquier otro dato numérico. Imprimir en pantalla:
// 1: “El número ingresado es [ ]”
// 2: “El doble del número ingresado es [ ]”
// 3: “Tres veces el número ingresado es [ ]”
//otro: “Ese valor no está permitido”
// ¡Consejo! Recuerde alerta ( ) para mostrar datos en la pantalla.
let color = prompt("Ingrese un color (rojo, azul o verde):");

switch (color) {
    case "rojo":
        console.log("El color de la pasión");
        break;
    case "azul":
        console.log("El color del mar");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    default:
        console.log("Color no reconocido");
}

let num1 = parseInt(prompt("Ingrese el primer número (del 1 al 100):"));

if (num1 >= 1 && num1 <= 100) {
    let num2 = parseInt(prompt("Ingrese el segundo número (del 1 al 100):"));
    if (num2 >= 1 && num2 <= 100) {
        let operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división):");

        switch (operacion) {
            case "suma":
                console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
                break;
            case "resta":
                console.log(`La resta de ${num1} y ${num2} es: ${num1 - num2}`);
                break;
            case "multiplicación":
                console.log(`La multiplicación de ${num1} y ${num2} es: ${num1 * num2}`);
                break;
            case "división":
                // Verificar que el divisor no sea cero
                if (num2 !== 0) {
                    console.log(`La división de ${num1} y ${num2} es: ${num1 / num2}`);
                } else {
                    console.log("No se puede dividir por cero.");
                }
                break;
            default:
                console.log("Operación no reconocida");
        }
    } else {
        console.log("El segundo número no está en el rango del 1 al 100");
    }
} else {
    console.log("El primer número no está en el rango del 1 al 100");
}

let edad = parseInt(prompt("Ingrese edad:"));
if (edad >= 0 && edad <= 12) {
    alert("Usted es infantil");
} else if (edad <= 18) {
    alert("Usted es adolescente");
} else if (edad <= 45) {
    alert("Usted es joven mayor");
} else if (edad <= 100) {
    alert("Usted es persona mayor");
} else {
    alert("¿De verdad es tan viejo?");
}


let persona1 = {
    nombre: "Romina",
    edad: 20,
    altura: 1.62
};

let persona2 = {
    nombre: "Jhonatan",
    edad: 27,
    altura: 1.68
};

if (persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} es más alto`);
} else if (persona2.altura > persona1.altura) {
    console.log(`${persona2.nombre} es más alto`);
} else {
    console.log("Ambas personas tienen la misma altura");
}
if (persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} es mayor`);
} else if (persona2.edad > persona1.edad) {
    console.log(`${persona2.nombre} es mayor`);
} else {
    console.log("Ambas personas tienen la misma edad");
}
// Nivel de dificultad: Alto
// 1. Crea un programa que permita ingresar los siguientes datos en pantalla:
// Nombre del cliente, Pase (vip o normal), Entrada (sí o no).
// Personas que tienen tu nombre ==> muestran un mensaje de bienvenida
// o pase VIP ==> mostrar un mensaje de bienvenida
// Si tienes un ticket, pregunta si quieres usarlo
// Si es afirmativo ==> mostrar un mensaje de bienvenida
// Si es negativo ==> mostrar mensaje de despedida
// Y por último en caso de no tener el mismo nombre o pase o entrada VIP preguntar “¿quieres comprar?”. Y en caso:
// negativo ==> mostrar mensaje de despedida
// afirmativo ==> solicitar dinero disponible, en caso:
// Más de 1000 ==> muestra una venta exitosa y un mensaje de bienvenida
// Menos de 1000 ==> mostrar mensaje de rechazo de venta

let cliente = prompt("Ingrese su nombre:");
let pase = prompt("Ingrese su pase (vip o normal):"); 
let entrada = prompt("¿Tiene entrada? (sí o no):"); 

if (cliente === "romina" || pase === "vip") {
    console.log("Bienvenido");
    let ticket;
    ticket = prompt("¿Quieres usar tu ticket? (sí o no):");
    if (ticket === "si") {
        console.log("¡Bienvenido! Gracias por usar tu ticket.");
    } else {
        console.log("Adioss!");
    }
  } 
  else {
    let comprar;
    comprar = prompt("¿Quieres comprar? (sí o no):");
    if (comprar === "si") {
        let dineroDisponible = parseFloat(prompt("Ingrese su dinero disponible:"));
        if (dineroDisponible >= 1000) {
            console.log("Bienvenido");
        } else {
            console.log("Venta rechazada");
        }
    } else {
        console.log("¡Hasta luego!");
    }
  
}