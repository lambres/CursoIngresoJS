function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 3 Switch
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
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 días";
			break;
		default:
			mensaje = "Este mes tiene 30 o mas días";
	}
	alert (mensaje);
	


}//FIN DE LA FUNCIÓN