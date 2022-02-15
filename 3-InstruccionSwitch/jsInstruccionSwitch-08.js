function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 8 Switch
*/

{
	let destino;
	let mensaje;
	destino = document.getElementById("txtIdDestino").value;
	switch (destino){
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace Frio";
			break;
		default:
			mensaje = "Hace calor";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN