/*Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre de 5 estudiantes de la UTN, 
Zevallos Lambrescht Ruben Darío
Clase Sábado 19/02 While
*/
function mostrar() {
	let altura;
	let edad;
	let temperatura;
	let sexo;
	let nota;
	let nombre;
	let contador;
	let acumuladorAltura;
	let promedioAltura;
	let cantidadF;
	let cantidadM;
	let cantidadNb;
	let cantidadAprobados;
	let acumuladorAlturaAprobados;
	let alturaPromedioAprobados;
	let mujeresAltas;
	let nombreMasAlto;
	let mayorCantidadXSexo;
	let maximaAltura;
	let primeroMayor37;
	let edadPrimeroMayor37;
	let mensajePrimeroMayor37;
	let primeraMujerAprobada;
	let nombrePrimerMujerAprobada;
	let mensajePrimeraMujerAprobada;
	let mensajeAlturaPromedioAprobados;
	let mensajePrimerHombreBajoDesaprobado;
	let mensajePrimerHombreAlto;
	let nombrePrimerHombreBajo;
	let primerHombreBajo;
	let porcentajeAprobados;
	let notaMayor200;
	let nombreMayor200;
	let contadorEnfermosMayores;
	let porcentajeEnfermosMayores;
	let mensajeEnfermosMayores;

	contador = 0;
	acumuladorAltura = 0;
	cantidadF = 0;
	cantidadM = 0;
	cantidadNb = 0;
	cantidadAprobados = 0;
	acumuladorAlturaAprobados = 0;
	alturaPromedioAprobados = 0;
	mujeresAltas = 0;
	maximaAltura = 0;
	primeroMayor37 = true;
	edadPrimeroMayor37 = 0;
	primeraMujerAprobada = true;
	primerHombreBajo = true;
	porcentajeAprobados = 0;
	notaMayor200 = 0;
	contadorEnfermosMayores = 0;

	//Ciclo para catura de los 5 conjuntos de valores
	while (contador < 5) 
	{	
		//6-nombre de 5 estudiantes de la UTN, 
		nombre = prompt("Ingrese un nombres de estudiante de la UTN:");
		//console.log(nombre);

		//1-alturas en centimetros	(validar entre 0 y 250) ,
		altura = prompt("Ingrese altura en centimetros (entre 0 cm y 250 cm):");
		altura = parseInt(altura);
		//console.log(altura);
		while (altura < 0 || altura > 250)
		{
			altura = prompt("Valor ingreado fuera del rango, vuelva a ingresar altura (entre 0 cm y 250 cm): ");
			altura = parseInt(altura);
		}
		acumuladorAltura = acumuladorAltura + altura;
		
		if (altura > maximaAltura)
		{
			maximaAltura = altura;
			nombreMasAlto = nombre;
		}

		//2-la edad (validar)
		edad = prompt("Ingrese la edad (entre 0 y 110 años:");
		edad = parseInt(edad);
		//console.log(edad);
		while (edad < 0 || edad > 110)
		{
			edad = prompt("Valor ingreado fuera del rango, vuelva a ingresar la edad entre 0 y 110 años:");
			edad = parseInt(edad);
		}

		//3-temperatura(validar)
		temperatura = prompt("Ingrese la temperatura (entre 20 y 50 grados Celsius:");
		temperatura = parseInt(temperatura);
		//console.log(temperatura);
		while (temperatura < 20 || temperatura > 50)
		{
			temperatura = prompt("Valor ingreado fuera del rango, vuelva a ingresar la temperatura entre 20 y 50 grados Celsius:");
			temperatura = parseInt(temperatura);
		}
		if (temperatura > 37)
		{
			if (primeroMayor37)
			{
				edadPrimeroMayor37 = edad;
				primeroMayor37 = false;
			}
			if (edad > 50)
			{
				contadorEnfermosMayores = contadorEnfermosMayores + 1;
			}
		}
		
		//5-nota (validar)
		nota = prompt("Ingrese la nota (1 a 10):");
		nota = parseInt(nota);
		//console.log(nota);
		while (nota < 1 || nota > 10)
		{
			nota = prompt("Nota Inválida (Solo se acepta valores del 1 al 10):");
			nota = parseInt(nota);
		}
		if (nota > 5)
		{
			cantidadAprobados = cantidadAprobados + 1;
			acumuladorAlturaAprobados = acumuladorAlturaAprobados + altura;
		}
		
		//4-el sexo(validar el sexo “f” o “m” o "nb")
		sexo = prompt("Ingrese el sexo ('f' o 'm' o 'nb')");
		sexo = sexo.toLowerCase(sexo);
		//console.log(sexo);
		while (sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("Valor ingreado incorrecto, vuelva a ingresar el sexo ('f' o 'm' o 'nb'):");
			sexo = sexo.toLowerCase(sexo);
		}
		switch(sexo)
		{
			case "f":
				cantidadF = cantidadF + 1;
				if (altura > 190)
				{
					mujeresAltas = mujeresAltas + 1;
				}
				if (primeraMujerAprobada)
				{
					nombrePrimerMujerAprobada = nombre;
					primeraMujerAprobada = false;
				}
				break;
			case "m":
				cantidadM = cantidadM + 1;
				if (primerHombreBajo)
				{
					if (altura < 160)
					{
						if (nota < 5)
						{
							nombrePrimerHombreBajo = nombre;
							primerHombreBajo = false;
						}
					}
					else
					{
						if (altura > 200)
						{
							notaMayor200 = nota;
							nombreMayor200 = nombre;
						}
					}
				}
				break;
			case "nb":
				cantidadNb = cantidadNb + 1;
				break;
		}
		contador ++;
	}
	//Fuera del while de toma de datos
	if (cantidadF > cantidadM)
	{
		if (cantidadF > cantidadNb)
		{
			mayorCantidadXSexo = "f";
		}
	}else
	{
		if (cantidadM > cantidadNb)
		{
			mayorCantidadXSexo = "m";
		}
		else
		{
			mayorCantidadXSexo = "nb";
		}
	}
	promedioAltura = acumuladorAltura / 5;
	console.log("---Primera Parte---");
	console.log("A) El promedio de altura es de : " + promedioAltura);
	console.log("B1) Cantidad de personas F: " + cantidadF);
	console.log("B2) Cantidad de personas M: " + cantidadM);
	console.log("B3) Cantidad de personas NB: " + cantidadNb);
	console.log("C) Cantidad de personas Aprobadas: " + cantidadAprobados);
	console.log("D) Cantidad de mujeres que superan los 190 cm: " + mujeresAltas);
	console.log("---Segunda Parte---");
	console.log("E) Sexo con mayor cantidad de alumnos: " + mayorCantidadXSexo);
	console.log("F) El nombre de la persona mas alta es: " + nombreMasAlto);
	
	//	g)la edad de la primera persona con fiebre (más de 37)
	if (primeroMayor37)
	{
		mensajePrimeroMayor37 = "G) No se detectaron personas con fiebre";
	}
	else
	{
		mensajePrimeroMayor37 = "G) La edad de la primer persona con fiebre: " +  edadPrimeroMayor37; 
	}
	console.log(mensajePrimeroMayor37);
	console.log("---Tercera parte----");

	//	h)el nombre de la primer mujer aprobada
	if (primeraMujerAprobada)
	{
		mensajePrimeraMujerAprobada = "H) No se detectaron mujeres aprobadas.";
	}
	else
	{
		mensajePrimeraMujerAprobada = "H) El nombre de la primer mujer a probada es: " + nombrePrimerMujerAprobada;
	}
	console.log(mensajePrimeraMujerAprobada);

	//	i) la altura promedio de los aprobados
	if (cantidadAprobados != 0)
	{
		alturaPromedioAprobados = acumuladorAlturaAprobados / cantidadAprobados;
		alturaPromedioAprobados = parseInt(alturaPromedioAprobados);
		mensajeAlturaPromedioAprobados = "I) La altura promedio de aprobados es: " + alturaPromedioAprobados;
	}
	else
	{
		mensajeAlturaPromedioAprobados = "I) No se detectaron alumnos parobados.";
	}
	console.log(mensajeAlturaPromedioAprobados);

	//	j)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
	if (primerHombreBajo)
	{
		mensajePrimerHombreBajoDesaprobado = "J) No se detectaron hombres de menos de 160 cm desaprobados.";
	}	
	else
	{
		mensajePrimerHombreBajoDesaprobado = "J) El nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado es: " + nombrePrimerHombreBajo;
	}
	console.log(mensajePrimerHombreBajoDesaprobado);
	console.log("---Cuarta Parte---")

	//	k)	Qué porcentaje de aprobados hay sobre el total de alumnos
	porcentajeAprobados = cantidadAprobados / 5 * 100;
	console.log("K) Porcentaje de aprobados: " + porcentajeAprobados);

	//l)	La nota y el nombre  del primer varón más alto de 200cm 
	if (notaMayor200 > 0)
	{
		mensajePrimerHombreAlto = `La nota del primer varón mas alto de 200 cm es ${notaMayor200} y su nombre es ${nombreMayor200}`;
	}
	else
	{
		mensajePrimerHombreAlto = "No se encontraron varones mas altos de 200 cm aprobados";
	}
	console.log(mensajePrimerHombreAlto);

	//m)	Qué porcentaje hay de personas con fiebre mayores a 50 años , 
	if (contadorEnfermosMayores > 0)
	{
		porcentajeEnfermosMayores = contadorEnfermosMayores / 5 * 100;
		mensajeEnfermosMayores = "M) El porcentaje de personas mayores de 50 con fiebre es de: " + porcentajeEnfermosMayores;
	}
	else
	{
		mensajeEnfermosMayores = "M) no se detectaron personas enfermas mayores a 50 años.";
	}
	console.log(mensajeEnfermosMayores);
}//FIN DE LA FUNCIÓN
/*
valores:
nombre			a		b		c		d		e
altura			205		120		195		190		170
edad			51		53		53		22		18
temperatura		37		36		37		38		38
nota			10		3		8		5		9
sexo			m		m		f		nb		f
*/