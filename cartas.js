//Valores y simbolos a considerar
const simbolos = ["corazon", "diamante", "pica", "trebol"]; 
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//Selección de elementos del dom que se veran alterados
//Elementos del naipe
let izquierdaArriba = document.querySelector("#izquierdaArriba");
let numero = document.querySelector("#numero");
let derechaAbajo = document.querySelector("#derechaAbajo");

//Función que elige aleatoriamente un valor y lo expresa
function eleccionCarta(array1, array2){
    let carta = []
    carta.push(array1[Math.floor(Math.random()*array1.length)]);
    carta.push(array2[Math.floor(Math.random()*array2.length)]);
    return carta
}

//Función que elige aleatoriamente un color y lo expresa
function asignarColor(array){
    if(array[0] === "corazon" || array[0] === "diamante"){
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
function asignarSimbolos(array) {
  if (array[0] === "corazon") {
    izquierdaArriba.innerHTML = "♥";
    derechaAbajo.innerHTML = "♥";
  } else if (array[0] === "diamante") {
    izquierdaArriba.innerHTML = "♦";
    derechaAbajo.innerHTML = "♦";
  } else if (array[0] === "trebol") {
    izquierdaArriba.innerHTML = "♣";
    derechaAbajo.innerHTML = "♣";
  } else {
    izquierdaArriba.innerHTML = "♠";
    derechaAbajo.innerHTML = "♠";
  }
}

//Función que elige aleatoriamente un valor y lo expresa
function asignarValor(array){
    numero.innerHTML = array[1];
}

//Función que recoge fx(asignarColor, asignarSimbolos, asignarValor)
function generacionCarta(){
    let carta = eleccionCarta(simbolos, valores);
    asignarColor(carta);
    asignarSimbolos(carta);
    asignarValor(carta);
}

window.onload = function(){generacionCarta()}
document.querySelector(".boton").addEventListener("click", generacionCarta)
