/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide
realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.

Alumno Zevallos Lambrescht Rubén Darío
División K
Ejercicio TP12 IF
*/
function ComenzarIngreso() {
	//definicion de variables
	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let nroLegajo;
	let nacionalidad;
	
	//A.	Edad, entre 18 y 90 años inclusive.
	for(;;) 
	{
		edad = prompt("Ingrese la edad (de 18 años a 90 años son válidos)");
		edad = parseInt(edad);
		if (edad > 17 && edad < 91)
		{
			break;
		}
	} 
	document.getElementById("txtIdEdad").value = edad;
	
	//B.	Sexo, “M” para masculino y “F” para femenino
	for(;;)
	{
		sexo = prompt('Ingrese el sexo ("M" "F" son válidos)');
		sexo = sexo.toLowerCase();
		if (sexo == "m" || sexo == "f")
		{
			break;
		}
	} 
	document.getElementById("txtIdSexo").value = sexo;
	
	//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	for(;;)
	{
		estadoCivil = prompt('Ingrese el esto civil (1=Soltero 2=Casado 3=Divorsiado 4=Viudo)');
		estadoCivil = parseInt(estadoCivil);
		if (estadoCivil > 0 && estadoCivil < 5)
		{
			break;
		}
	}
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	
	//D.	Sueldo bruto, no menor a 8000.
	for(;;)
	{
		sueldoBruto = prompt('Ingrese el sueldo (Valor no menos a 8000)');
		sueldoBruto = parseInt(sueldoBruto);
		if (sueldoBruto > 7999)
		{
			break;
		}
	} 
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	
	//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	for(;;)
	{
		nroLegajo = prompt('Ingrese el nro de Legajo (Valor de 4 dígitos)');
		nroLegajo = parseInt(nroLegajo);
		if(nroLegajo > 999 && nroLegajo < 10000)
		{
			break;
		}
	} 
	document.getElementById("txtIdLegajo").value = nroLegajo;
	
	//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	for(;;) 
	{
		nacionalidad = prompt('Ingrese Nacionalidad "A" Argentino "E" Extranjero "N" Nacionalizado');
		nacionalidad = nacionalidad.toLowerCase();
		if(nacionalidad == "a" || nacionalidad == "e" || nacionalidad == "n")
		{
			break;
		}
	}
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
