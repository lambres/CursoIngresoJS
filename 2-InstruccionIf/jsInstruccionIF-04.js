function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 4 JS
*/
{
	//Defino varfiable
	let edad;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//muestro el texto Eres mayor de edad si se cumple la condicion > 18 años
	if (edad >= 13 && edad <= 17) {
		alert("Eres Adolescente");
	} else {
		alert("No eres Adolescente");
	}

}//FIN DE LA FUNCIÓN