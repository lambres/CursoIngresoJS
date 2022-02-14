function mostrar()
/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio 7 IF Bis V1 ABCDEFGHIJ
*/
{
	//defino dos variables, una para la edad y otra para el estado civil
	let edad;
	let estadoCivil;
	let mensaje;
	let nombre;

	//tomo los valores del formulario HTML y los asigno a las variables
	/*txtIdEdad
	estadoCivil Soltero Casado Divorciado*/

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;
	nombre = prompt("Ingrese un nombre: ")
	mensaje = ""
	if (edad < 13)
	{
		mensaje = "Feliz Día";
		if (nombre == "Ricardo")
		{
			mensaje = mensaje + " muy chiquito para ese nombre";
		}	
	}
	else
	{
		if (edad < 18)
		{
			mensaje = "Usted es adolescente";
			if (edad == 17)
			{
				mensaje = mensaje + " Ultimo año!!!";
			}
			if (nombre == "Violeta")
			{
				mensaje = mensaje + " como un color";
			}
			if (estadoCivil == "Divorciado")
			{
				mensaje = mensaje + " toda una vida por delante";
			}
		}
		else
		{
			mensaje = "Tenés edad de laburar";
			if (edad == 33)
			{
				mensaje = mensaje + " como cristo";
			}
			else
			{
				if (edad > 60)
				{
					mensaje = mensaje + " A jubilarse";
					if (edad == 88)
					{
						mensaje = mensaje + " Lindo Número";
					}
					if (nombre == "Alfredo")
					{
						mensaje = mensaje + " como el de Queen!!!!";
					}
				}
				else
				{
					if (estadoCivil == "Soltero")
					{
						mensaje = mensaje + " a salir";

					}
				}
			}
		}
		if (estadoCivil == "Casado")
			{
				mensaje = mensaje + " Casada quiere casa";
			}
	}
	if (edad % 2 == 0)
	{
		mensaje = mensaje + " sos par";
	}
	alert (mensaje);
	
}//FIN DE LA FUNCIÓN