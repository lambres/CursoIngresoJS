function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 3 IF
*/
{
	//Defino varfiable
	let edad;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//muestro el texto Eres mayor de edad si se cumple la condicion > 18 años
	if (edad >= 18)
	{
		alert("Eres mayor de edad");
	}else{
		alert("Eres menor de edad");
	}

}//FIN DE LA FUNCIÓN