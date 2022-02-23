/*
Alumno Zevallos Lambrescht Rben Darío
División K
Ejercicio 7 For
*/
function mostrar()
{
	let numero;
	let cantidadDivisores = 0;
	let i;

	do{
		numero = prompt("Ingrese un número entero mayor que 0:");
		numero = parseInt(numero);
	}while(numero < 0 || isNaN(numero));

	for (i = 1; i <= numero; i++) {
		if (numero % i == 0)
		{
			cantidadDivisores++;
		}
	}
	alert(`Hay ${cantidadDivisores} numeros divisores entre 1 y ${numero}`);


}//FIN DE LA FUNCIÓN