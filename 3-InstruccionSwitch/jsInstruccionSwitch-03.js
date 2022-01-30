function mostrar()
{
	//tomo el mes
	let mesDelAno;
	//Guardo el valor seleccionado en el forulario html
	mesDelAno = document.getElementById("txtIdMes").value;
	//estructura switch
	switch(mesDelAno){
		case("Febrero"):
			alert("Este mes no tiene mas de 29 días");
			break;
		default:
			alert("Este mes tiene 30 o mas días")
	}
	


}//FIN DE LA FUNCIÓN