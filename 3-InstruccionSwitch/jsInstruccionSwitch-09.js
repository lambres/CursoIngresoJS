/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 9 Switch
*/
function mostrar()
{
	let estacion;
	let destino;
	let preciofinal;
	const precio = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if (destino == "Bariloche")
			{
				preciofinal = precio * 1.2;
			}
			else if (destino == "Mar del plata")
			{
				preciofinal = precio * 0.8;
			}
			else
			{
				preciofinal = precio * 0.9;
			}
			break;
		case "Verano":
			if (destino == "Bariloche")
			{
				preciofinal = precio * 0.8;
			}
			else if (destino == "Mar del plata")
			{
				preciofinal = precio * 1.2;
			}
			else
			{
				preciofinal = precio * 1.1;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destino == "Cordoba")
			{
				preciofinal = precio ;
			}
			else
			{
				preciofinal = precio* 1.1;
			}
			break;	
	}
	alert(`En ${estacion} a ${destino} el viaje cuesta ${preciofinal}`);
}//FIN DE LA FUNCIÓN