/*
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación
del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	let estacion;
	let destino;
	let SeViaja;
	SeViaja=false;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if (destino == "Bariloche"){
				SeViaja = true;
			}
			break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas"){
				SeViaja = true;
			}
			break;
		case "Otoño":
			SeViaja = true;
			break;
		case "Primavera":
			if (destino != "Bariloche"){
				SeViaja = true;
			}
			break;
	}
	if (SeViaja){
		alert("Se viaja a " + destino);
	}else{
		alert("No se viaja a " + destino)
	}


}//FIN DE LA FUNCIÓN