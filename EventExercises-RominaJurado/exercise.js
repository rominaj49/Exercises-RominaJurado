document.addEventListener("DOMContentLoaded", function() {
    const containerColor = document.getElementById("containerColor");
    const botonCambiar = document.getElementById("botonCambiar");
  
    let isBlue = false;
  
    botonCambiar.addEventListener("click", function() {
    containerColor.classList.toggle("bg-blue-500");
    containerColor.textContent = containerColor.classList.contains("bg-blue-500") ? "" : "";
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const botonEscribir = document.getElementById("botonEscribir");
    const containerGray = document.getElementById("containerGray");
    const botonBorrar = document.getElementById("botonBorrar");
  
    botonEscribir.addEventListener("input", function() {
      containerGray.textContent = botonEscribir.value;
    });
  
    botonBorrar.addEventListener("click", function() {
      botonEscribir.value = "";
      containerGray.textContent = "Limpiado";
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const pesoInput = document.getElementById("pesoInput");
    const alturaInput = document.getElementById("alturaInput");
    const calcularBoton = document.getElementById("calcularBoton");
    const resultadoInput = document.getElementById("resultadoInput");
    const containerHidden = document.getElementById("containerHidden")
    calcularBoton.addEventListener("click", function() {
      // Calculo
      const peso = parseFloat(pesoInput.value);
      const altura = parseFloat(alturaInput.value) / 100;
      const imc = peso / (altura * altura);
  
      // muestra
      resultadoInput.value = isNaN(imc) ? "Ingree valores" : imc.toFixed(1);
  
      // muestra e hidden y oculta 
      containerHidden.classList.remove("hidden");
      document.querySelector('label[for="resultadoInput"]').classList.remove("hidden");

    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const montoInput = document.getElementById("montoInput");
    const convertirBoton = document.getElementById("convertirBoton");
    const resultadoOutput = document.getElementById("resultadoOutput");
  
    convertirBoton.addEventListener("click", function() {

        const local = parseFloat(montoInput.value);
        const cambio = 500;
        const conversionTotal = local / cambio;
        resultadoOutput.value = isNaN(conversionTotal) ? "Entrada inválida" : conversionTotal.toFixed(0);
  
      document.querySelector('label[for="resultadoOutput"]').classList.remove("hidden");
    });
  });