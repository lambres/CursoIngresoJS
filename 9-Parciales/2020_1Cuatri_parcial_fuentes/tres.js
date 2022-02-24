/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
Alumno Zevallos Lambrescht Ruben Darío
División K
PArcial 2020 parte 3
*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var seguir;
	var nombrePersonaMayorTemperatura;
	var cantidadHombresNoCasados = 0;
	var cantidadAncianosEnfermos = 0;
	var acumuladorEdadSolteros = 0;
	var mayorTemperatura = 0;
	var mayoresViudos = 0;
	var acumuladorSolteros = 0;
	var promedioSolteros = 0;
	var primerTemepratura = true;

	do
	{	
		nombre = prompt("Ingrese un nombre:");
		
		edad = prompt("Ingrese edad del pasajero:");
		edad = parseInt(edad);
		while(edad < 0 || edad > 120 )
		{
			edad = prompt("Edad no válida, valores entre 1 y 120 son admitidos");
			edad = parseInt(edad);
		}

		
		sexo = prompt(`Ingrese Sexo del pasajero ("f"/"m")`);
		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt(`Dato erróneo, volver a ingresar el Sexo ("f"/"m")`);
		}
		
		estadoCivil = prompt(`Estado civil? "soltero", "casado" o "viudo" `);
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt(`Dato erróneo, volver a ingresar el Estado civil? "soltero", "casado" o "viudo"`);
		}
		
		temperatura = prompt(`Temperatura corporal: (Valores entre 34 y 42 ªC) `);
		temperatura = parseInt(temperatura);
		while (temperatura < 34 || temperatura > 42)
		{
			temperatura = prompt(`Dato erróneo, volver a ingresar Temperatura corporal: (Valores entre 34 y 42 ªC)`);
			temperatura = parseInt(temperatura);
		}
		//a) El nombre de la persona con mas temperatura.

		if (primerTemepratura == true || temperatura > mayorTemperatura)
		{
			nombrePersonaMayorTemperatura = nombre;
			mayorTemperatura = temperatura;
			primerTemepratura = false;
		}
		
		//b) Cuantos mayores de edad estan viudos
		if (edad > 18)
		{
			if (estadoCivil == "viudo")
			{
				mayoresViudos++;
			}
		}
		
		//c) La cantidad de hombres que hay solteros o viudos.
		if (sexo == "m")
		{
			if (estadoCivil != "casado")
			{
				cantidadHombresNoCasados++;
			}
				//e) El promedio de edad entre los hombres solteros.
			if (estadoCivil == "soltero")
			{
				acumuladorSolteros++;
				acumuladorEdadSolteros+=edad;
			}
		}
		
		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if (edad > 60)
		{
			if (temperatura > 38)
			{
				cantidadAncianosEnfermos++;
			}
		}


		seguir = prompt("Desea continuar? s/n","s");
		
	}while (seguir == "s");
	if (acumuladorSolteros!=0)
	{
		promedioSolteros = acumuladorEdadSolteros / acumuladorSolteros;
	}
	else
	{
		promedioSolteros = 0;
	}
	console.log("a) El nombre de la persona con mas temperatura. " + nombrePersonaMayorTemperatura);
	console.log("b) Cuantos mayores de edad estan viudos " + mayoresViudos);
	console.log("c) La cantidad de hombres que hay solteros o viudos. " + cantidadHombresNoCasados);
	console.log("d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura	" + cantidadAncianosEnfermos);
	console.log("e) El promedio de edad entre los hombres solteros. " + promedioSolteros);
}

/*
a		b		c		d		e
70		65		53		22		17
m		m		f		f		m
soltero	viudo	casado	soltero	soltero
38		38		35		36		37



*/
