/*
Alumno Zevallos Lambrescht Rben Darío
División K
Ejercicio 3 For
*/
function mostrar()
{
	let i;
	let repeticiones;

	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);

	for (i = 0; i < repeticiones; i++)
	{
		document.write("<br>" + (i + 1) + " Hola UTN FRA");
	}

}//FIN DE LA FUNCIÓN