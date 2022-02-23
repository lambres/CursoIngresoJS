/*
Alumno Zevallos Lambrescht Rben Darío
División K
Ejercicio 6 For
*/
function mostrar() {
	let numero;
	let cantidadPares = 0;
	let i;

	numero = prompt("Ingrese un número:");
	numero = parseInt(numero);
	for (i = 0; i < numero; i++) {
		if (i % 2 == 0)
		{
			cantidadPares++;
		}

	}
	alert(`Hay ${cantidadPares} numeros pares entre 1 y ${numero}`);



}//FIN DE LA FUNCIÓN