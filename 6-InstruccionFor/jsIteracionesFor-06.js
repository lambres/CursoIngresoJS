/*
Alumno Zevallos Lambrescht Rben Darío
División K
Ejercicio 6 For
al presionar el botón pedir un número.
mostrar los numeros pares desde el 1 al n&uacute;mero ingresado,
y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar() {
	let numero;
	let cantidadPares = 0;
	let i;

	numero = prompt("Ingrese un número:");
	numero = parseInt(numero);
	for (i = 1; i <= numero; i++) {
		if (i % 2 == 0)
		{
			cantidadPares++;
			console.log(i);
		}

	}
	alert(`Hay ${cantidadPares} numeros pares entre 1 y ${numero}`);



}//FIN DE LA FUNCIÓN