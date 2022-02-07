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
	if (nota >= 9){
		alert(nota + " EXCELENTE");
	}else if(nota >= 4){
		alert(nota + " APROBÓ");
	}else{
		alert(nota + " Vamos, la proxima se puede")
	}
}//FIN DE LA FUNCIÓN