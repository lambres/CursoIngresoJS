function mostrar()
/*
Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 1 Switch
*/ {

	//tomo el mes
	let mesDelAnio;
	let mensaje;
	//Guardo el valor seleccionado en el forulario html
	mesDelAnio = document.getElementById("txtIdMes").value;
	//estructura switch

	switch (mesDelAnio)
	{
		case "Enero":
			mensaje = "que comiences bien el año!!!";
			break;
		case "Marzo":
			mensaje = "a clases!!!.";
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!.";
			break;
	}
	
	if (mensaje != "")
	{
		alert(mensaje);
	}
}//FIN DE LA FUNCIÓN