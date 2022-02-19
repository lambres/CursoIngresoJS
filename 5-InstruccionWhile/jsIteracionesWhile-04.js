/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Ruben Dario Zevallos Lambrescht
División K
Ejercicio While 4
*/
function mostrar()
{
	var numeroIngresado;
	
	do {
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
		numeroIngresado = parseInt(numeroIngresado);
	}while (numeroIngresado > 9 || numeroIngresado < 0);
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN