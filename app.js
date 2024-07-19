let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado =[];
let numeroMaximo=10;
console.log(numeroSecreto);



function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
return;
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
   console.log(intentos);
    if(numeroSecreto===numeroUsuario){

        document.getElementById("reiniciar").removeAttribute("disabled")

        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos===1) ? "vez" : "veces"}`);
    
    }else { 
        if(numeroSecreto< numeroUsuario){
        asignarTextoElemento("p","Fallaste el número es menor");
        }else{
        asignarTextoElemento("p","Fallaste el número es mayor");
        }
        intentos++;
        limpiarCaja();
    }
   
    return;
}

function limpiarCaja(){

    let valorcaja= document.querySelector("#valorUsuario");
    valorcaja.value = "";



}

function generarNumeroSecreto(){

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //si el numero generado esta incluido en la lista

    if(listaNumeroSorteado.length==numeroMaximo){

        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    }else{
        if (listaNumeroSorteado.includes(numeroGenerado)){

            return generarNumeroSecreto();
        }else{
    
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){

    asignarTextoElemento("h1","Juego del numero secreto!");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos= 1;
}

function reiniciarJuego(){
//Limpiar caja
limpiarCaja()
//indicar mensaje de intervalos de números
//Generar numeros aleatorios
//Deshabilitar el botón de nuevo juego
condicionesIniciales()
//Inicializar el Número de intentos
document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();


/*
//Punto 1
function Saludar(){

console.log("Hola mundo");
return;

}
Saludar();


//punto 2
function nombre(Nombre){
    
    console.log("hola "+Nombre);

}
nombre("carlos");


//punto 3
function numero(Numero){
    return Numero*2
 

}
let numerodoble= numero(10);

console.log(numerodoble)


//punto 4
function CalcularPromedio(n1,n2,n3){

    return (n1+n2+n3)/3

}
let promedio = CalcularPromedio(5,5,5);

console.log(promedio)

//punto 5

function NumeroMayor(n1,n2){

if (n1>n2){
console.log (n1)

}else
console.log(n2)

}
NumeroMayor(10,2)


//punto 6
 function multiplicarNumero(n){
    return n*n

 }
let numeromultiplicado = multiplicarNumero(5)
console.log(numeromultiplicado)

*/
/*
//punto 1

function masaCorporal(peso,altura){
 
let IMC = peso/(altura**2);

console.log("su IMC es: "+IMC)

return;
}
masaCorporal(70,1.70)


//punto 2

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);  



//punto 3

function convertidor(dolar){

    return dolar*4.80;


}

let convertirdor = console.log(convertidor(11));

//Punto 4

function perimetroRectangular(base, altura){
   
    perimetro= (base*2)+(altura*2);
    area= base*altura

    console.log("perimetro: ",perimetro);
    console.log("area: ", area);


    return;

}

perimetroRectangular(5,10)

//punto 5

function perimetrocircular(radio,){
   
    perimetro= (radio*2)*3.14;
    area= (radio**2)*3.14;

    console.log("perimetro: ",perimetro);
    console.log("area: ", area);


    return;

}

perimetrocircular(5)

// punto 6

function tablaMultiplicar(numero){
    i=1;
    while (i<=10){
    resultado=numero*i;
    console.log("el resultado de ",numero, "* ",i ," = ",resultado);
    i++;
    
    }


}
tablaMultiplicar(12);



function mostrarTablaDeMultiplicar(numero1) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero1 * i;
      console.log(numero1 + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero1 = 7;
  mostrarTablaDeMultiplicar(numero);
  */

  //punto 1
  let listaGenerica=[];
  //punto 2
  let lenguajesDeProgramacion= ["javaScript","C","C++","Klotlin","Python"];
//punto 3
  lenguajesDeProgramacion.push("Java","Ruby","GoLang")
//punto 4
  function mostrarLenguajes(){
 for(i=0;i<lenguajesDeProgramacion.length;i++){
    console.log(lenguajesDeProgramacion[i])    
 }
  }
  mostrarLenguajes();
//punto 5
  function LenguajesInversos(){
    for(i=lenguajesDeProgramacion.length-1;i>=0;i--){
    console.log(lenguajesDeProgramacion[i]);
    }
  }
  LenguajesInversos();
  //punto 6

  function CalcularPromedioLista(lista){
    let suma=0;
    for(i=0;i<lista.length;i++){
        suma +=lista[i];
    }
    return suma/lista.length;
    
  }
  let numero=[10,30,20,50,40];
  let promedio= CalcularPromedioLista(numero);
  console.log("Media: ", promedio);

  //punto 7

  function numeroMasGrandeYPequeño(lista){
    let mayor=lista[0];
    let menor=lista[0];
    for(i=1;i<lista.length;i++){

        if(lista[i]>mayor){
            mayor=lista[i];
        }if (lista[i]<menor){
            menor=lista[i];

        }
    }
    console.log("mayor: ", mayor);
    console.log("menor:",menor)
  }
  let numeros=[11,5,2,1,4];
  numeroMasGrandeYPequeño(numeros);

  //punto 8
  function sumaDeLista(lista){
   let suma=0;
   for(i=0;i<lista.length;i++){
   suma+=lista[i];

   }
   console.log("suma: ", suma)

  }

  let numeross=[2,5,2,2];
  sumaDeLista(numeross);

  //punto 9
  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
  





