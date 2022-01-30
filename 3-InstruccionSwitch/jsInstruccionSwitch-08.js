function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;
	switch (destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Hace Frio");
			break;
		default:
			alert("Hace calor");
			break;
	}
}//FIN DE LA FUNCIÓN