function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 1 Switch
*/
{

	//tomo el mes
	let mesDelAno;
	//Guardo el valor seleccionado en el forulario html
	mesDelAno = document.getElementById("txtIdMes").value;
	//estructura switch

	switch(mesDelAno){
		case "Enero":
			alert("que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Julio":
			alert ("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
	}
	



}//FIN DE LA FUNCIÓN