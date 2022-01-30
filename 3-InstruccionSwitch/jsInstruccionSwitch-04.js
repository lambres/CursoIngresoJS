function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;
	switch(mes){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert (`${mes} tiene 31 días.`);
			break;
		case "Febrero":
			alert (`${mes} tiene 28 días.`);
			break;
		default:
			alert (`${mes} tiene 30 días.`)
	}
	
	



}//FIN DE LA FUNCIÓN