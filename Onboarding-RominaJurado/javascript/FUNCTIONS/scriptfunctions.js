// Nivel de dificultad: bajo
// Declarando funciones
// 1. Este primer ejercicio es para aprender a declarar una función. En este caso se debe declarar una función nombrada llamada "agregar" que dentro de su cuerpo, debe ejecutar una instrucción que muestre el resultado de 100 x 20 en la consola.
// 2. Llamar/ejecutar funciones.
// Ya tenemos la declaración, el siguiente paso es llamar/ejecutar la función "agregar". Ejecútalo y comprueba que el resultado se muestra en la consola.
// 3. Añadiendo parámetros.
// Ahora es el momento de agregar parámetros a nuestra función. Agrega dos parámetros y llámalos como quieras. Recuerda indicar dentro del cuerpo de la función donde irán esos parámetros.
// 4. Usando argumentos.
// Ya hemos agregado parámetros a la declaración de nuestra función, el siguiente paso es "pasarle argumentos". Para hacer esto, cree dos variables como la siguiente en el ejemplo:
// sea número1 = 100;
// sea número2 = 20;
// 5. Agregando el <retorno>.
// Con nuestra función nombrada configurada correctamente, es hora de cambiar el console.log del cuerpo de la función. Cree una variable de resultado dentro del cuerpo de la función que almacenará el resultado de 100 x 20 y haga que la función devuelva esa variable.
// 6. Convierta la función nombrada del ejercicio anterior en una función anónima y llámela/ejecútela.
function agregar() {
    console.log(100 * 20);
}
agregar();

function agregarConParametros(parametro1, parametro2) {
    console.log(parametro1 + parametro2);
}
let numero1 = 100;
let numero2 = 20;
agregarConParametros(numero1, numero2);


function suma(parametro1, parametro2) {
    let resultado = parametro1 + parametro2;
    return resultado;
}
console.log(suma(numero1, numero2));

let anonnym = function(parametro1, parametro2) {
    let resultado = parametro1 + parametro2;
    return resultado;
};

console.log(anonnym(numero1, numero2));

// Nivel de dificultad: Medio
// 1. Cree una función con nombre llamada "saludar" que
// recibe un parámetro de cadena que representa un nombre, y
// muestra un saludo personalizado usando el nombre proporcionado en la consola.
// Llame/ejecute la función con su propio nombre para verificar que funciona correctamente.
// 2. Crea una función anónima que
// recibe dos parámetros numéricos y
// devuelve el resultado de la multiplicación de ambos.
// Llama/ejecuta la función con dos valores diferentes y muestra el resultado a través de la consola.
// 4. Cree una función con nombre llamada "área" que
// recibe dos parámetros numéricos, uno que representa la base y el otro la altura de un triángulo.
// devolver su área.
// 5. Cree otra función con nombre llamada "perímetro" que
// recibe tres parámetros numéricos que representan cada uno de los lados de un triángulo, y
// devuelve el perímetro del triángulo.
// ¡Consejo! Recuerda las fórmulas para el área y el perímetro de los triángulos.
// 6. Crea una función que
// toma dos parámetros numéricos que representan el precio y la cantidad de un producto,
// y devuelve el precio total de la compra.
// Si el número de productos es mayor o igual a 10, ==> se aplica un descuento del 10% sobre el precio total.
// Si el número de productos es mayor o igual a 20, ==> se aplica un descuento del 20% sobre el precio total.
// Llame/ejecute la función con diferentes valores de precio y cantidad para verificar que funciona correctamente
// 7. Cree una función con nombre llamada isAnAdult que
// recibe un parámetro numérico que representa la edad de una persona, y
// devuelve un mensaje indicando si la persona es Adulto o no.
// Si la Edad es mayor o igual a 18 "Eres mayor de edad"
// Si la edad es menor de 18 años "No eres adulto"
// Llame a la función con diferentes valores de edad para verificar que funciona correctamente.
// Llame a la función con diferentes valores de edad para verificar que funciona correctamente.

function saludar(nombre) {
    console.log("Hola " + nombre + " Bienvenida ");
} saludar("Romina");

let multiplicar = function(num1, num2) {
    return num1 * num2;
}; console.log("Resultado:", multiplicar(5, 8));

function area(base, altura) {
    return (base * altura) / 2;
}

function perimetro(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

function pTotal(precio, cantidad) {
    let total = precio * cantidad;

    if (cantidad >= 20) {
        total *= 0.8; 
    } else if (cantidad >= 10) {
        total *= 0.9; 
    }

    return total;
}
let precio = pTotal(10, 20);
console.log("Precio total cn descuento:" + precio);

function esAdulto(edad) {
    if (edad >= 18) {
        return "Sos mayor de edad.";
    } else {
        return "No sos adulto.";
    }
}
console.log(esAdulto(25));
console.log(esAdulto(15));


// Nivel de dificultad: alto
// 1. Crea una función (declarala como quieras) que
// toma un parámetro numérico que representa el ingreso anual de una persona, y
// les devuelve el impuesto que deben pagar.
// Si Ingresos menores o iguales a $10,000, ==> impuesto del 10% de los ingresos.
// Si Ingresos mayores a $10,000 y menores o iguales a $20,000, ==> impuesto del 15% de los ingresos.
// Si Ingresos mayores a $20,000, ==> impuesto del 20% de los ingresos.
// Utilice condicionales anidados para implementar esta función.
// Llame/ejecute la función con diferentes valores de entrada para verificar que funciona correctamente.
// 2. Cree una función (declárela como desee) para verificar un día que
// recibe un parámetro numérico y devuelve un mensaje indicando si es día hábil o no.}
// Si el número es 1, 2, 3, 4, 5, mensaje: "Es un día hábil".}
// Si el número es 6 o 7, mensaje: "Es fin de semana".
// Utilice la estructura de control de interruptores anidados para implementar esta función.
// Llame a la función con diferentes valores de día para verificar que funciona correctamente.
// 3. Crea un programa usando una función (declárala como quieras) que toma un parámetro que representa Información Personal (ingrésala por teclado).
// Primero se debe ingresar el Nombre, y
// si viene vacío ==> el programa debe detenerse y mostrar un console.error con un mensaje "El nombre no puede estar vacío"
// Luego se le debe pedir al usuario que ingrese el Apellido y se debe validar como Nombre en el paso anterior.
// Finalmente se debe solicitar al usuario que ingrese la edad y también se debe validar.
// Una vez verificados todos los datos, la función debe guardar todos esos datos en un objeto con 3 propiedades: nombre, apellido y edad y mostrarlo a través de la consola.
// Para finalizar, la función debe ser llamada/ejecutada y probada con diferentes valores.
// 4. Crea un programa que se compone de 3 funciones (declaralas como quieras):
// Primera función de saludo: que toma un parámetro que representa un nombre y devuelve una cadena “Hola, mi nombre es [parámetro]”
// 2da función:calcularAge: que toma dos parámetros que representan el año de nacimiento y el año actual. Esta función devolverá el resultado del año actual menos el año de nacimiento.
// 3ª función: presente: llamar/ejecutar las otras dos funciones y ejecutar una alerta con la presentación del usuario
// Los datos del usuario deben ser ingresados en pantalla y el resultado final también se muestra en pantalla.


function impuestos(ingresos) {
    if (ingresos <= 10000) {
        return ingresos * 0.1;  // 10% de impuesto
    } else if (ingresos <= 20000) {
        return ingresos * 0.15; // 15% de impuesto
    } else {
        return ingresos * 0.2;  // 20% de impuesto
    }
}

console.log("valor1:", impuestos(8000));
console.log("valor2:", impuestos(15000));
console.log("valor3:", impuestos(25000));

function esDiaHabil(dia) {
    switch (dia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es dia habil.";
        case 6:
        case 7:
            return "Es fin de semana";
        default:
            return "Numer invalido.";
    }
}
console.log(esDiaHabil(3));
console.log(esDiaHabil(6));
console.log(esDiaHabil(299));

function inform() {
    let nombre = prompt("Ingrese su nombre:");
    if (!nombre) {
        console.error("El nombre no puede estar vacío.");
        return;
    }

    let apellido = prompt("Ingrese su apellido:");
    let edad = prompt("Ingrese su edad:");
    if (!isNaN(edad)) {
        let persona = {
            nombre: nombre,
            apellido: apellido,
            edad: parseInt(edad)
        };
        console.log("Información personal:", persona);
    } else {
        console.error("La edad debe ser un valor numérico.");
    }
} inform();




function saludo(nombre) {
    return "Hola, mi nombre es " + nombre;
}
function calcularEdad(anioNac, anioAct) {
    return anioNac - anioAct;
}
function presentar() {
    let nombre = prompt("Ingrese su nombre:");
    let anioNacimiento = prompt("Ingrese su año de nacimiento:");

    if (!isNaN(anioNacimiento)) {
        let anioActual = new Date().getFullYear();
        let edad = calcularEdad(parseInt(anioNacimiento), anioActual);
        let saludo1 = saludo(nombre);
        alert(saludo1 + ". Tienes o cumplirás: " + edad + "años!!");
    } else {
        alert("El año de nacimiento debe ser un valor numérico.");
    }
} presentar();