function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 4 Switch
*/ {
	let mes;
	let mensaje;
	mes = document.getElementById("txtIdMes").value;
	switch (mes) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = `${mes} tiene 31 días.`;
			break;
		case "Febrero":
			mensaje = `${mes} tiene 28 días.`;
			break;
		default:
			mensaje = `${mes} tiene 30 días.`;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN