/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”
del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
  /*
  Ruben Dario Zevallos Lambrescht
  División K
  Ejercicio TP Adivina el numero 1 - A
  */
  //Genero el número RANDOM entre 1 y 100
  let maximo = 100;
	let minimo= 1;

	numeroSecreto = Math.round((Math.random() * (maximo - minimo) + minimo)); 
		//alert(numeroSecreto );
	contadorIntentos=0
  document.getElementById("txtIdIntentos").value =""
  document.getElementById("txtIdNumero").value =""
  

}

function verificar()
{
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio TP Adivina el numero 1 - B
*/
let nroIngreado;
let mensaje;
contadorIntentos += 1;
nroIngreado = parseInt(document.getElementById("txtIdNumero").value);
console.debug ("nroIngresado " + nroIngreado + " / numeroSecreto " + numeroSecreto);
if (nroIngreado < numeroSecreto){
    mensaje = "Falta ....";
}else if(nroIngreado==numeroSecreto){
    mensaje = "Usted es un ganador!!! y en solo " + contadorIntentos + " sintentos";
}else{
    mensaje = "se pasó…";
}

document.getElementById("txtIdIntentos").value = mensaje;
	
}