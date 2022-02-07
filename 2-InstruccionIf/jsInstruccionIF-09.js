function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 9 IF
*/
{
	let numero;
	let maximo = 10;
	let minimo= 1;
	numero = parseInt(Math.random()*10);
	alert(numero);
	numero = Math.round((Math.random() * (maximo - minimo) + minimo));
	alert(numero);
}//FIN DE LA FUNCIÓN