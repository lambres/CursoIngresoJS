/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Ruben Dario Zevallos Lambrescht
División K
Ejercicio While 5
*/
function mostrar()
{
	var sexoIngresado;

	do{
		sexoIngresado = prompt("ingrese f ó m .");
	}while (!(sexoIngresado == "f" || sexoIngresado == "m"));

	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN