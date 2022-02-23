/*
Autor: 
EJERCICIO 1
Un restaurante necesita un programa que permita 
ingresar datos de los platos con su precio a pagar
y cantidad hasta que el cliente quiera. Por cada cliente, se ingresa:
plato: (validar "ravioles", "milanesa", "pizza").
precio del plato (desde 100 hasta 500)
cantidad (mas que 0)
medio de pago (validar "efectivo", "debito", "credito")
a)	El importe total de todos los clientes.
		Si el medio de pago es efectivo, se debe aplicar un 10% de descuento.
		Si el medio de pago es debito, se debe aplicar un 10% de recargo.
		Si el medio de pago es credito, se debe aplicar un 15% de recargo.
b)	El importe total de todos los clientes que pagaron con débito. (aplicando el 
recargo del 10%)
c)	Promedio de ventas con Crédito.
d)	Promedio por plato y el plato más caro.
*/
function mostrar()
{
	var plato;
    var precio;
    var cantidad;
    var medio;
    var respuesta="si";
    var importeTotal;
    var acomImporteTotal=0;
    var descEfectivo=0;
    var recargCredito=0;
    var porcentaje;
    var promRaviol;
    var promMila;
    var promPizza;
    var mensaje;
    var promedioCredito;
    var recargDebito=0;
    var imporTodos;
    var acomEfectivo=0;
    var acomCredito=0;
    var contEfectivo=0;
    var contCredito=0;
    var contDebito=0;
    var acomDebito=0;
    var contRaviol=0;
    var acomRaviol=0;
    var contMila=0;
    var acomMila=0;
    var contPizza=0;
    var acomPizza=0;


    while(respuesta=="si")
    {
        plato=prompt("ingrese plato ravioles, milanesa, pizza");
        while(plato!="ravioles"&&plato!="milanesa"&&plato!="pizza")
        {
            plato=prompt("ERROR. ingrese plato ravioles, milanesa, pizza");
        }
        precio=prompt("ingrese precio entre 100 y 500");
        precio=parseFloat(precio);
        while(precio<100||precio>500||isNaN(precio))
        {
            precio=prompt("ERROR. ingrese precio entre 100 y 500");
            precio=parseFloat(precio);
        }
        cantidad=prompt("ingrese cantidad");
        cantidad=parseInt(cantidad);
        while(cantidad<1)
        {
            cantidad=prompt("ERROR. ingrese cantidad mas que 0");
            cantidad=parseInt(cantidad);
        }
        medio=prompt("ingrese medio de pago, efectivo, debito, credito");
        while(medio!="efectivo"&&medio!="debito"&&medio!="credito")
        {
            medio=prompt("ERROR. ingrese medio de pago, efectivo, debito, credito");
        }
        importeTotal=precio*cantidad;
        acomImporteTotal+=importeTotal;
        switch(medio)
        {
            case "efectivo":
            porcentaje=10;
            acomEfectivo+=importeTotal;
            contEfectivo++;
            break;
            case "credito":
            porcentaje=15;
            acomCredito+=importeTotal;
            contCredito++;
            break;
            default:
            porcentaje=10;
            contDebito++;
            acomDebito+=importeTotal;
            break;
        }
        switch(plato)
        {
            case "ravioles":
            contRaviol++;
            acomRaviol+=precio;
            break;
            case "milanesa":
            contMila++;
            acomMila+=precio;
            break;
            case "pizza":
            contPizza++;
            acomPizza+=precio;
            break;
        }
    respuesta=prompt("Desea agregar otro plato?");
	}
	descEfectivo=acomEfectivo-(acomEfectivo*porcentaje)/100;
	recargCredito=acomCredito+(acomCredito*porcentaje)/100;
	recargDebito=acomDebito+(acomDebito*porcentaje)/100;//B
	imporTodos=descEfectivo+recargCredito+recargDebito;//A
	promedioCredito=acomCredito/contCredito;//C
	promRaviol=acomRaviol/contRaviol;//D
	promMila=acomMila/contMila;//D
	promPizza=acomPizza/contPizza;//D

	if(promRaviol>promMila && promRaviol>promPizza)
	{
		mensaje="Ravioles";//D
	}
	else
	{
		if (promMila>promPizza) 
		{
			mensaje="Milanesa";//D
		}
		else
		{
			mensaje="Pizza";//D
		}
	}
	document.write("Importe total: "+imporTodos+"<br>");
  	document.write("El importe total de todos los clientes que pagaron con débito. (aplicando el descuento): "+recargDebito+"<br>");
	document.write("promedio debito: "+promedioCredito+"<br>");
	document.write("promedio plato: ravioles "+promRaviol+" milanesas: "+promMila+" pizzas: "+promPizza+"<br>");
	document.write("el mas caro "+mensaje);

}
 


