function mostrar()
{


	/*if (true){
		alert("Estoy dentro del if");
	}
	alert ("Estoy fuera del if")

	Si uso === compara el valor y tipo de datos
	!== comparo el valor y tipo de dato

	*/



	//Defino varfiable
	let edad;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//muestro el texto Niña Bonita si se cumple la condición edad = 15
	if (edad == 15){
		alert("Niña Bonita");
	}

}//FIN DE LA FUNCIÓN