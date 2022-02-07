function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 8 Switch
*/

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