1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre

1ERA PARTE
	informar :
	a)El promedio de las alturas totales.X
	b)Cantidad de personas de cada sexo.X
	c)Cantidad de aprobados(más de 6)
	d)La cantidad de mujeres que su altura supere
	 los 190 centímetros.

2da PARTE
	informar :
	e)Que sexo tiene mas alumnos X
	f)el nombre de la persona más alta X
	g)la edad de la primera persona con fiebre (más de 37)X

3ra PARTE
	informar :
	h)el nombre de la primer mujer aprobada X
	i) la altura promedio de los aprobados
	j)el nombre del primer hombre, que mide menos de 160 cm y  esta  desaprobado



function mostrar()
{
	

	iterar 5 veces
		//Entrada de datos y validaciones
		pido altura 
		valido altura (0-250)
		pido edad
		valido edad (mayor 17)
		pido temperatura
		valido temperatura (35-42)
		pido genero
		valido genero (f o m o nb)
		pido nota 
		valido nota (1-10)
		pido nombre

		Primara PARTE
		a) sumar las alturas 

		b) contar cuantas personas de cada genero (puedo usar un if-else o ¡¡¡switch!!!)
			d)Pregunto si es mujer y si tiene mas de 190 cm cuento
			h)Pregunto si es mujer y si es la primera y si esta aprobada y guardo el nombre
			j)Pregunto si es hombre evaluo si es el primero que mide menos de 160 t esta desaprobado
		c) pregunto si la nota es mayor que 6 y cuento cuantos aprobados hay
			h)tambien puedo preguntar si es mujer
			i) acumular la altura de los aprobados y contarlos
		Segunda PARTE
		f) busco la maxima altura y me guardo el nombre 
		g) para saber quien es la primera persona con fiebre levanto una bandera y guardo la edad
		   (la bandera tiene que estar abajo)

	termino de iterar

	calculo el promedio de las alturas del punto a 
	mostrar contadores del punto b
	mostrar la cantidad de aprobados punto c
	mostrar la cantidad de mujeres de mas de 190 cm punto d

	para el punto e: comparar los 3 contadores de genero para obtener el maximo de los 3
		mostrar cual es el mas grande
	mostrar la persona mas alta punto f
	mostrar edad de la primera persona con fiebre punto g
	mostrar el nombre de la primer mujer aprobada punto h

	calculo el promedio de las alturas de los aprobados del punto i

	mostrar el promedio de alturas de los aprobados punto i ****OJO****

	mostrar el nombre del primer hombre, que mide menos de 160 cm y  esta  desaprobado punto j




}//FIN DE LA FUNCIÓN

