function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 7 IF
*/
{
	//defino dos variables, una para la edad y otra para el estado civil
	let edad;
	let estadoCivil;

	//tomo los valores del formulario HTML y los asigno a las variables
	/*txtIdEdad
	estadoCivil Soltero Casado Divorciado*/

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad <= 18 && estadoCivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN