/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Ruben Darío Zevallos Lambrescht
Division K
Ejercicio 9 While
*/
function mostrar()
{	// declarar variables
	let numero;
	let maximo = 0;
	let minimo = 0;
	let primero = true;
	do {
		numero = parseInt(prompt("Ingrese un número:"));
		if (numero > maximo || primero) {
			maximo = numero;
		}
		else if (numero < minimo || primero){
			minimo = numero;
			primero = false;
		}
		respuesta = prompt("Desea agregar otro número (s/n):").toLowerCase();
	} while (respuesta == 's');
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN