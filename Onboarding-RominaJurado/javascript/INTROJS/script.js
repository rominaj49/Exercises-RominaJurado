//```Difficulty Level: Low
//Create a variable called myName and store your first name in it:
// In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "Rose". Then add a line of code to print the variable name to the console after the previous message. 

// Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix (do this step for the next exercises too)

// Create a variable called myLastName and store your last name in it.
// Create a variable called myAge and save your age in it. 
// Tip! Do not use string quotes for numbers.
// Create a variable called myPet and save the name of your pet in it. If you don't have a pet, you can invent a name.
// Create a variable called petAge and save the pet's age in it.
// (As in the previous case, you can invent this number if you don't have a pet).
// Create a variable called fullName and store the concatenation of myFirstName and myLastName in it.
// Create a variable called presentationText and save in it a text comprised of all the variables created so far.

let myName= "ROMINA";
console.log(myName)
let myLastName = "JURADO"
console.log(myLastName)
let myAge=21;
console.log(myAge)
let myPet= "SIA";
console.log(myPet)
let petAge=4;
console.log(petAge);
let nombreCompleto = myName + myLastName;
console.log(nombreCompleto)
let presentationText= "Hola mi nombre es: " + myName + " " + myLastName + " tengo " + myAge + " años. " + "Mi gata se llama: " + myPet + " tiene: " + petAge + " años."
console.log(presentationText)

// Difficulty Level: Medium
// Create a variable sumAges, subtractAges, productAges, divisionAges and calculate their respective operations with the variables myAge and agePet.
// Create an object called student with a minimum of 5 properties, display said object using console.table( ) and also display each of the object's properties separately through the console.
// Create an object called pet with a minimum of 5 properties, display said object using console.table( ) and also display each of the object's properties separately through the console.
// Create an array called fruits with a minimum of 5 elements and display the entire array in the console and also display each of the elements separately in the console.

let sumAges = myAge + petAge;
let restAges = myAge - petAge;
let productAges = myAge * petAge;
let divisionAges = myAge / petAge;

const estudiante = {
    nombre: "Romina",
    edad: 21,
    grado: "A",
    curso: ["Math", "English", "Science"],
    matriculado: true
};
console.table(estudiante);
console.log("Mi nombre es: ", estudiante.nombre);
console.log("Mi edad es: ", estudiante.edad);
console.log("Mi grado es: ", estudiante.grado);
console.log("Mi curso es: ", estudiante.curso);
console.log("Esta matriculada: ", estudiante.matriculado);

let pet = {
    nombre: "Sia",
    tipo: "Gato",
    edad: 4,
    color: "Blanca",
    adoptado: true
  };
console.log("Objeto Pet:");
console.table(pet);
console.log("Nombre:", pet.nombre);
console.log("Tipo:", pet.tipo);
console.log("Edad:", pet.edad);
console.log("Color:", pet.color);
console.log("¿Adoptado?", pet.adoptado);

let frutas = ["Uva", "Manzana", "Melon", "Limon", "Pera"];

console.log("Array de frutasss:", frutas);
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta: " + (i+1) + ":", frutas[i]);
}

// Difficulty Level: High
// Use a prompt ( ) that allows the entry of an age on the screen and compare it with the number 18, once this is done, save the result in a variable called IamAdult and display a message in the console that says:
// "I am an adult" (and the value of the variable).
// Create an array called "numbers" with a minimum of 5 elements and display the entire array and each of the elements separately in the console.
// Create an array called "family" with a minimum of 5 objects and display the entire array and each of the elements separately in the console.
// Create a variable called "randomText" forming a phrase with the second element of the fruits array, the fourth element at numbers array and the first property of the fifth object of the family array.```

const ageInput = prompt("Ingresa tu edad:");
const age = parseInt(ageInput); //lo parsea a un int

if (age >=18) {
    console.log("Eres un adulto. ¡Bienvenido!");
} else {
    console.log("Eres menor de edad. Acceso restringido.");
}


let numeros = [10, 23, 7, 42, 15];
console.log("Array:", numeros);
console.log("elemento nro 0:", numeros[0]);
console.log("elemento nro 1:", numeros[1]);
console.log("elemento nro 2:", numeros[2]);
console.log("elemento nro 3:", numeros[3]);
console.log("elemento nro 4:", numeros[4]);
console.log("su longitud es:", numeros.length); //funcion length

let familia = [
    { nombre: "Romina", edad: 21, parent: "Hija"},
    { nombre: "Maria", edad: 50, parent: "Mamá" },
    { nombre: "Cristian", edad: 30, parent: "Hijo"},
    { nombre: "keyla", edad: 28, parent: "Hija"},
    { nombre: "Sia", edad: 4, parent: "mascota"}
  ];
  
  console.log("Familia:", familia);

  for (var j = 0; j < familia.length; j++) {
    console.log("Miembro " + (j + 1) + ":", familia[j]);
  }
  
  let randomText = "En mi familia, " + familia[1].nombre + " tiene " + numeros[3] + " años y es mi " + familia[4].parent.toLowerCase() + ".";
  console.log("randomText:", randomText);