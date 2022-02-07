/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Ruben Dario Zevallos Lambrescht
Division K
Ejercicio 8 While
*/
function mostrar() {
	let contador;
	let numero;
	let respuesta;
	let sumaPositivos = 0;
	let multiplicacionNegativos = 1;
	contador = false;
	do {
		numero = parseInt(prompt("Ingrese un número:"));
		if (numero >= 0) {
			sumaPositivos += numero;
		} else {
			contador = true;
			multiplicacionNegativos *= numero;
		}
		respuesta = prompt("Desea agregar otro número (s/n):").toLowerCase();
	} while (respuesta == 's');
	document.getElementById("txtIdSuma").value = sumaPositivos;
	if (contador == false){
		multiplicacionNegativos = 0;
	}
		document.getElementById("txtIdProducto").value = multiplicacionNegativos;
	
}//FIN DE LA FUNCIÓN