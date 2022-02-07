/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 8 IF
*/


function mostrar()
{
	//defino dos variables, una para la edad y otra para el estado civil
	let edad;
	let estadoCivil;

	//tomo los valores del formulario HTML y los asigno a las variables
	/*txtIdEdad
	estadoCivil Soltero Casado Divorciado*/

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad >= 18 && estadoCivil == "Soltero"){
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN