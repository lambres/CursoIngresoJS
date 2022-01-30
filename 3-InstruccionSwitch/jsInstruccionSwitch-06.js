function mostrar()
{
	//Declaro variable
	let hora;

	hora = parseInt(document.getElementById("txtIdHora").value);

	switch(hora){
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
			alert("Es de noche, son las " + hora);
			break;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana." + hora);
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde." + hora);
			break;
		default:
			alert("No es una hora válida: " + hora);
			break;
	}
}//FIN DE LA FUNCIÓN