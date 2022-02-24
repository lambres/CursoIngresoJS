/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
Alumno Zevallos Lambrescht Ruben Dario
Division K
Ejercicio parcial 2020 uno
*/

function mostrar()
{
	//declaracion variables
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let cantidadBarbijo = 0;
	let cantidadJabon = 0;
	let cantidadAlcohol = 0;
	let vecesComproBarbijo = 0;
	let vecesComproJabon = 0;
	let vecesComproAlcohol = 0;
	let alcoholCantMasBarato = 0;
	let alcoholFabricanteMasBarato = 0;

	//declaracion contadores acumuladores y flags
	let precioAlcoholMasBarato = 0;
	let tipoMayorCantidad = 0;
	let promedioPorCompra = 0;
	let primerAlcoholMasBarato = true;

	//toma de datos por prompt y validar
	for (let i = 0 ; i < 5 ; i ++)
	{
		tipo = prompt("Ingrese el nombre de producto (barbijo, jabón, alcohol)");
		while(tipo != "barbijo" && tipo != "jabón" && tipo != "alcohol")
		{
			tipo = prompt("Dato erróneo, vuleve a ingresar el nombre de producto (barbijo, jabón, alcohol)");
		}
		
		precio = prompt(`Ingrese el precio del ${tipo}`);
		precio = parseInt(precio);
		while(precio < 100 || precio > 300)
		{
			precio = prompt(`Dato erróneo, vuleve a ingresar el precio del ${tipo} ente 100 y 300`);
			precio = parseInt(precio);
		}
		
		cantidad = prompt(`Ingrese la cantidad de ${tipo}, no mayor a 1000 unidades`);
		cantidad = parseInt(cantidad);
		while(cantidad < 0  || cantidad > 1000)
		{
			cantidad = prompt(`Dato erróneo, vuleve a ingresar la cantidad de ${tipo}, no mayor a 1000 unidades`);
			cantidad = parseInt(cantidad);
		}
		
		marca = prompt("Ingrese marca de producto");
		
		fabricante = prompt("Ingrese el nombre del fabricante");
		alert (fabricante);
		
		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		switch (tipo)
		{
			case "alcohol":
					if (primerAlcoholMasBarato = true || precio < precioAlcoholMasBarato)
					{
						primerAlcoholMasBarato = false;
						precioAlcoholMasBarato = precio;
						alcoholCantMasBarato = cantidad;
						alcoholFabricanteMasBarato= fabricante;
					}
					cantidadAlcohol+=cantidad;
					vecesComproAlcohol++;
				break;
			case "barbijo":
				cantidadBarbijo+=cantidad;
				vecesComproBarbijo++;
				break;
			case "jabón":
				cantidadJabon+=cantidad;
				vecesComproJabon++;
				break;
		}
	}
	
	
	//mostrar resultados
	//determnar cual es el producto que mas unidades se compraron
	if (cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon)
	{
		tipoMayorCantidad = "Alcohol";
		promedioPorCompra = cantidadAlcohol / vecesComproAlcohol;
	}
	else if (cantidadBarbijo > cantidadJabon && cantidadBarbijo > cantidadAlcohol)
	{
		tipoMayorCantidad = "Barbijo";
		promedioPorCompra = cantidadBarbijo / vecesComproBarbijo;

	}
	else
	{
		tipoMayorCantidad = "jabón";
		promedioPorCompra = cantidadJabon / vecesComproJabon;
	}
	console.log(`a) Del más barato de los alcohol, la cantidad de unidades fueron ${alcoholCantMasBarato} y el fabricante es ${alcoholFabricanteMasBarato}`);
	console.log(`b) Tipo con mas unidades: ${tipoMayorCantidad}, el promedio por compra es de ${promedioPorCompra}`);
	console.log(`c) Hay en total ${cantidadJabon}`);
}

/*
datos
tipo	precio	cantidad	marca	fabricante
barbijo	100		250			asdasd	asdasdasd
jabon	150		270			asdasdd	asdasdasd
alcohol	150		150			231321	323232132
alcohol	100		75			asdassd	estapal
jabon	140		200			asdasd	asdasdasd

a)del mas barato del alcohol cantidad 75 fabricante estapal
b)del tipo con mas unidades jabon, el promedio es de 235
c)hay 470 unidades de jabon


*/
