function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 2 Switch
*/
{

	//tomo el mes
	let mesDelAno;
	let mensaje;
	//Guardo el valor seleccionado en el forulario html
	mesDelAno = document.getElementById("txtIdMes").value;
	//estructura switch

	switch(mesDelAno)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno";
			break;
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hacer frío";
			break;
		/*
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		*/
		default:
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
	}
	alert (mensaje);


}//FIN DE LA FUNCIÓN