function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 6 switch
*/ {
	//Declaro variable
	let hora;
	let mensaje;
	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);

	/*
	if ( hora >= 7 && hora <= 11)
	{
		mensaje = "Es de mañana. " + hora;
	}
	else if (hora >= 12 && hora <= 19)
	{
		mensaje = "Es de tarde. " + hora;
	}
	else if (hora >=20 && hora <= 23 || hora >= 0 && hora <= 6)
	{
		mensaje = "Es de noche, son las " + hora;
	}
	else
	{
		mensaje = "No es una hora válida"
	}
	*/
	

	switch (hora) {
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			mensaje = "Es de noche, son las " + hora;
			break;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana." + hora;
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Es de tarde." + hora;
			break;
		default:
			mensaje = "No es una hora válida: " + hora;
			break;
	}
	
	alert(mensaje);
}//FIN DE LA FUNCIÓN