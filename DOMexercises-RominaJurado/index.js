console.log(fruits)

const main= document.getElementById("frutas-lista")

function fruitsCards(fruits){
    return`
    <div>
       <div class="bg-gray-200 p-4 rounded-lg shadow-md w-64 ">
            <img src="${fruits.foto}" class="w-full h-48 object-cover mb-4" alt="The Nun II">
            <h5 class="text-xl font-semibold mb-2">${fruits.nombre}</h5>
            <p class="text-gray-600">${fruits.descripcion}</p>
        </div>
    </div>
                `;
}

function imprimirFruits(listFruits, elemento){

    let template= ""
    for( const fruit of listFruits){
       template+= fruitsCards(fruit)
    }
    elemento.innerHTML = template
}

imprimirFruits(fruits,main)

const dulces = fruits.filter(fruta => fruta.esDulce);
const lista = document.getElementById('frutas-dulces-lista');
const ul = document.createElement('ul');
dulces.forEach(fruta => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${fruta.nombre}</strong>`;
    ul.appendChild(li);
  });
lista.appendChild(ul);



///////////////////////////////////////////////////////////ejercicios
const imprimirMensaje = (mensaje) => {console.log(mensaje);}


const crearmultiplicación = (num1, num2) => { let resultado = num1 * num2; return resultado; }


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const nuevoaArr = array.map((element) => crearmultiplicación(element, 2));
console.log(nuevoaArr);

const cervezas = [
    { nombre: 'CervezaEWE', ibu: 50 },
    { nombre: 'CervezaWED', ibu: 32 },
    { nombre: 'CervezaFAD', ibu: 44 },
    { nombre: 'CervezaET', ibu: 43 },
    { nombre: 'CervezaFE', ibu: 30 }

  ];

const cervezaMyor = (cervezas) => {
    return cervezas.sort((a, b) => b.alcohol - a.alcohol).slice(0, 10);
}
console.log(cervezaMyor(cervezas))

const nombreCerveza = (cervezas, nombre) => {
    const encontro = cervezas.find(cerveza => cerveza.nombre === nombre);
    return encontro || false;
  };
console.log(nombreCerveza(cervezas, "CervezaEWE"))


const ibuCerveza = (cerveza, valor) => {
    const encontro = cerveza.find(cerveza => cerveza.ibu === valor);
    if (encontro) {
      return encontro;
    } else {
      console.log(`No existe cerveca en el array con ibu de ${valor}`);
      return false; 
    }
  };
console.log(ibuCerveza(cervezas, 322))

const indiceNombre = (cerveza, nombreC) => {
const pos = cerveza.findIndex(cerveza => cerveza.nombre === nombreC);
  if (pos !=-1 ) {
    return pos;
  } else {
    return nombreC + " no existe"; 
  }
}
console.log(indiceNombre(cervezas, "CervezaFE" )) //funciona ok


const cervezas2 = [
    { nombre: 'CervezaEWE', ibu: 50, abv: 3},
    { nombre: 'CervezaWED', ibu: 32, abv: 8 },
    { nombre: 'CervezaFAD', ibu: 44, abv: 4 },
    { nombre: 'CervezaET', ibu: 43, abv: 1 },
    { nombre: 'CervezaFE', ibu: 30, abv: 2 }

  ];

const cervezasMenores = (cervezas, nivel) => {
    const cervezasF = cervezas.filter(cerveza => cerveza.abv <= nivel);
    
    return cervezasF.map(({ nombre, abv, ibu }) => ({ nombre, abv, ibu }));
  };
console.log(cervezasMenores(cervezas2, 3 ))//funciona

const tablaC_HTML = (cervezas, elemento) => {
    const tabla = document.createElement('table');
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>Nombre</th>
          <th>ABV</th>
          <th>IBU</th>
        </tr>
      </thead>
      <tbody>
        ${cervezas.map(cerveza => `
          <tr>
            <td>${cerveza.nombre}</td>
            <td>${cerveza.abv}</td>
            <td>${cerveza.ibu}</td>
          </tr>
        `).join('')}

      </tbody>
    `;
  
    const contenedor = document.getElementById(elemento);
    contenedor.innerHTML = '';
    contenedor.appendChild(tabla);
  };

  tablaC_HTML(cervezas2, "cervezas-lista");