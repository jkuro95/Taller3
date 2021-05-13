

let etiquetaHoras = document.getElementById('horas');
let botonCalcularHoras = document.getElementById('botonCalcularHoras');
let botonCloseHoras = document.getElementById('botonCloseHoras');
let botonCloseHoras2 = document.getElementById('botonCloseHoras2');
let resultado1 = document.getElementById('resultadoSueldo');
let Modal1 = document.getElementById('Modal1');
let Modal2 = document.getElementById('Modal2');
let etiquetaPeso = document.getElementById('peso');
let etiquetaAltuta = document.getElementById('altura');
let botonCalcularPeso = document.getElementById('botonCalcularPeso');
let resultadoPeso = document.getElementById('resultadoPeso');
let resultadoPeso2 = document.getElementById('resultadoPeso2');
let botonClosePeso1 = document.getElementById('botonClosePeso1');
let botonClosePeso2 = document.getElementById('botonClosePeso2');

let botonCalculateSalario = document.getElementById('botonCalculateSalario');
let botonCalculatePeso = document.getElementById('botonCalculatePeso');

let botonLimpiarSueldo = document.getElementById("botonLimpiarSueldo");
let botonLimpiarPeso = document.getElementById("botonLimpiarPeso");



const  valorHora = 20000;
const valorHoraExtra = 25000;

botonCalculateSalario.addEventListener("click", cleanFormSueldo);
botonCalculatePeso.addEventListener("click", cleanFormPeso);
botonCalcularHoras.addEventListener("click", validarFormularioHoras);
botonCalcularPeso.addEventListener("click", validarFormularioPeso);
botonLimpiarSueldo.addEventListener("click", cleanFormSueldo);
botonLimpiarPeso.addEventListener("click", cleanFormPeso);

function cleanFormSueldo(){
  resultado1.textContent = "";
  etiquetaHoras.value = "";
}

function cleanFormPeso() {
  resultadoPeso.textContent = "";
  resultadoPeso2.textContent = "";
  etiquetaAltuta.value = "";
  etiquetaPeso.value = "";
}

function validarFormularioPeso() {

  let altura = Number(etiquetaAltuta.value);
  let peso = Number(etiquetaPeso.value);

  if (peso == 0 && altura == 0){
    etiquetaAltuta.classList.add("is-invalid");
    etiquetaPeso.classList.add("is-invalid");
  }else if(peso == 0){
    etiquetaAltuta.classList.remove("is-invalid");
    etiquetaPeso.classList.add("is-invalid");
  }else if(altura == 0){
    etiquetaAltuta.classList.add("is-invalid");
    etiquetaPeso.classList.remove("is-invalid");
  }else{
    etiquetaAltuta.classList.remove("is-invalid");
    etiquetaPeso.classList.remove("is-invalid");

    calcularIndiceMasaCorporal(peso, altura);

  }
}

function validarFormularioHoras() {

  let horas = Number(etiquetaHoras.value);

  if (horas == 0) {
    etiquetaHoras.classList.add('is-invalid');
  }else {
    etiquetaHoras.classList.remove('is-invalid');

    calcularSueldo(horas);

  }
}

function calcularIndiceMasaCorporal(peso, altura){
  console.log("aqui");

  let indiceMasaCorpo = peso / (altura * altura);

  console.log(indiceMasaCorpo);

  if(indiceMasaCorpo < 18.5){
    resultadoPeso.textContent = "Peso insuficiente"
    resultadoPeso2.textContent = "El indice de masa corporal es: " + indiceMasaCorpo;
  }else if(indiceMasaCorpo >= 18.5 && indiceMasaCorpo <= 24.9){
    resultadoPeso.textContent = "NormoPeso"
    resultadoPeso2.textContent = "El indice de masa corporal es: " + indiceMasaCorpo;
  }else if(indiceMasaCorpo >= 25 && indiceMasaCorpo <= 26.9){
    resultadoPeso.textContent = "Sobrepeso grado 1"
    resultadoPeso2.textContent = "El indice de masa corporal es: " + indiceMasaCorpo;
  }else if(indiceMasaCorpo >= 27 && indiceMasaCorpo <= 29.9){
    resultadoPeso.textContent = "Sobrepeso grado 2(preobesidad)"
    resultadoPeso2.textContent = "El indice de masa corporal es: " + indiceMasaCorpo;
  }else if(indiceMasaCorpo >=30 && indiceMasaCorpo <= 34.9){
    resultadoPeso.textContent = "Obesidad de tipo I"
    resultadoPeso2.textContent = "El indice de masa corporal es: " + indiceMasaCorpo;
  }else if(indiceMasaCorpo >= 35 && indiceMasaCorpo <= 39.9){
    resultadoPeso.textContent = "Obesidad de tipo II"
    resultadoPeso2.textContent = "El indice de masa corporal es: " + indiceMasaCorpo;
  }else if(indiceMasaCorpo >= 40 && indiceMasaCorpo <= 49.9){
    resultadoPeso.textContent = "Obesidad de tipo III"
    resultadoPeso2.textContent = "El indice de masa corporal es: " + indiceMasaCorpo;
  }else{
    resultadoPeso.textContent = "Obesidad de tipo IV"
    resultadoPeso2.textContent = "El indice de masa corporal es: " + indiceMasaCorpo;
  }
  
}

function calcularSueldo(horas) {

  let sueldo = 0;
  let horasExtras = 0;
  
  if (horas <= 40) {
    sueldo = horas * valorHora;
  }
  else{
    horasExtras = horas - 40;
    horas = 40;
    console.log(horas * valorHora);
    console.log(horasExtras * valorHoraExtra);
    sueldo = (horas * valorHora) + (horasExtras * valorHoraExtra);
  }

  resultado1.textContent = "El sueldo de esta semana sera: $" + sueldo;
}
 