//Valores y simbolos
const simbolos = ["corazon", "diamante", "pica", "trebol"]; 
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//Selección de elementos del dom que se veran alterados
let izquierdaArriba = document.querySelector("#izquierdaArriba");
let numero = document.querySelector("#numero");
let derechaAbajo = document.querySelector("#derechaAbajo");

//Función que elige aleatoriamente un valor y lo expresa
function eleccionCarta(arr1, arr2){
    let carta =[]
    carta.push(arr1[Math.floor(Math.random()*arr1.length)]);
    carta.push(arr2[Math.floor(Math.random()*arr2.length)]);
    return carta
}

//Función que elige aleatoriamente un color y lo expresa
function asignarColor(arr){
    if(arr[0] === "corazon" || arr[0] === "diamante"){
        izquierdaArriba.style.color = "red";
        numero.style.color = "red";
        derechaAbajo.style.color = "red";
    }
    else{
        izquierdaArriba.style.color = "black";
        numero.style.color = "black";
        derechaAbajo.style.color = "black";
    }
}

//Función que elige aleatoriamente un simbolo y lo expresa
function asignarSimbolos(arr) {
  if (arr[0] === "corazon") {
    izquierdaArriba.innerHTML = "♥";
    derechaAbajo.innerHTML = "♥";
  } else if (arr[0] === "diamante") {
    izquierdaArriba.innerHTML = "♦";
    derechaAbajo.innerHTML = "♦";
  } else if (arr[0] === "trebol") {
    izquierdaArriba.innerHTML = "♣";
    derechaAbajo.innerHTML = "♣";
  } else {
    izquierdaArriba.innerHTML = "♠";
    derechaAbajo.innerHTML = "♠";
  }
}
function asignarValor(arr){
    numero.innerHTML = arr[1];
}

//Función que recoge f(asignaarColor, asignarSimbolos, asignarValor)
function generacionCarta(){
    let carta = eleccionCarta(simbolos, valores);
    asignarColor(carta);
    asignarSimbolos(carta);
    asignarValor(carta);
}


window.onload = function(){generacionCarta()}
document.querySelector(".boton").addEventListener("click", generacionCarta)
