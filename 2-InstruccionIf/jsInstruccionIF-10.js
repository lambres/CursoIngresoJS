/*
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 10 IF
*/


function mostrar()
{
	let nota;
	let maximo = 10;
	let minimo= 1;
	nota = Math.round((Math.random() * (maximo - minimo) + minimo));
	let mensaje;
	if (nota >= 9)
	{
		mensaje = nota + " EXCELENTE";
	}else if(nota >= 4)
	{
		mensaje = nota + " APROBÓ";
	}
	else
	{
		mensaje = nota + " Vamos, la proxima se puede";
	}
	alert (mensaje);
}//FIN DE LA FUNCIÓN