/*
Autor: 
EJERCICIO 3
debemos cargar 8 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar
 marca del producto
 Tipo de galletita : "con sal", "sin sal", "dulces".
 cantidad de cajas: mas de 0
 cantidad de kilos por caja:mas de 0
 nombre proveedor
 origen: "nacional", "mercosur", "resto del mundo"
    a) informar el producto con la menor cantidad de kilos
    b) de las galletitas sin sal , la marca que mas kilos tiene por caja
    c) que porcentaje de kilos hay sobre el total de cada tipo
    ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)
*/
function mostrar()
{
   var marca;
   var tipo;
   var cantCajas;
   var cantKilos;
   var nombre;
   var origen;
   var cantMasKilos=0;
   var masKilos;
   var cantMasKilos=0;
   var menosKilos;
   var contCSal=0:
   var acomuCSal=0;
   var contSSal=0;
   var acomuSSal=0;
   var contDulces=0;
   var acomuDulces=0;
   var promedioSSal;
   var promedioCSal;
   var promedioDulce;
   var porcentajeTotal;

   for (i=0 ; i<8 ; i++) 
   {
      marca=prompt("ingrese marca");
      tipo=prompt("ingrese tipo: con sal, sin sal, dulces");
      while(platos!="con sal" && platos!="sin sal" && platos!="dulces")
      {
         platos=prompt("Error. Ingrese tipo: con sal, sin sal, dulces");
      }
      cantCajas=prompt("ingrese cantidad de cajas: mas de 0");
      cantCajas=parseInt(cantCajas);
      while(cantCajas<1)
      {
          cantCajas=prompt("Error. ingrese cantidad de cajas: mas de 0");
          cantCajas=parseInt(cantCajas);
      }
      cantKilos=prompt("ingrese cantidad de kilos por caja:mas de 0");
      cantKilos=parseInt(cantKilos);
      while(cantCajas<1)
      {
         cantKilos=prompt("Error. ingrese cantidad de kilos por caja:mas de 0");
         cantKilos=parseInt(cantKilos);
      }
      nombre=prompt("ingrese nombre del proveedor");
      origen=prompt("ingrese origen, nacional, mercosur, resto del mundo");
      while(platos!="nacional" && platos!="mercosur" && platos!="resto del mundo")
      {
          origen=prompt("Error. ingrese origen, nacional, mercosur, resto del mundo");
      }

      if(i==0 || cantKilos<cantMasKilos)
      {
         menosKilos=tipo; //A
      }
      if(tipo=="sin sal"&& cantMasKilos>cantKilos)
      {
         masKilos=marca;//B
      }
      switch(tipo)
      {
         case "con sal":
            contCSal++;
            acomuCSal=acomuCSal+cantKilos;
         break;
         case "sin sal":
            contSSal++;
            acomuSSal=acomuSSal+cantKilos;
         break;
         default:
            contDulces++;
            acomuDulces=acomuDulces+cantKilos;
         break;
      }
      promedioCSal=acomuCSal/contCSal;
      promedioSSal=acomuSSal/contSSal;
      promedioDulce=acomuDulces/contDulces;
      porcentajeTotal=


   }


