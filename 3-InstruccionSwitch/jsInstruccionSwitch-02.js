function mostrar()
{

	//tomo el mes
	let mesDelAno;
	//Guardo el valor seleccionado en el forulario html
	mesDelAno = document.getElementById("txtIdMes").value;
	//estructura switch

	switch(mesDelAno){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert ("Abrigate que hacer frío");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
	}



}//FIN DE LA FUNCIÓN