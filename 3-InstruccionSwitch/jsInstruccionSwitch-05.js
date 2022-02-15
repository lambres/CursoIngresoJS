function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 5 Switch
*/
{
	//Declaro variable
	let hora;
	let mensaje;

	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);
	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN