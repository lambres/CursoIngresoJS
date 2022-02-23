/*
Alumno Zevallos Lambrescht Rben Darío
División K
Ejercicio 8 For
Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar() {
	let numero;
	let mensaje;
	let cantidadDivisores = 0;
	let i;

	do {
		numero = prompt("Ingrese un número entero mayor que 0:");
		numero = parseInt(numero);
	} while (numero < 0 || isNaN(numero));

	for (i = 1; i <= numero; i++) {
		if (numero % i == 0) {
			cantidadDivisores++;
		}
	}
	if (cantidadDivisores == 2) {
		mensaje = `El número ${numero} es primo`
	}
	else {
		mensaje = `El número ${numero} no es primo`
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN