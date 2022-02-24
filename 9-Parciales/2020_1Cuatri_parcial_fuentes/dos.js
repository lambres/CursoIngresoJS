/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos
 de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
Alumno Zevallos Lambrescht Rubén Darío
División K
Ejercicio Parcial 2020 parte 2

*/
function mostrar() {
    var tipo;
    var seguir;
    var cantidadBolsas = 0;
    var precioBolsa = 0;
    var cantidadArena = 0;
    var cantidadCal = 0;
    var cantidadCemento = 0;
    var mayorTipo;
    var masCaro = 0;
    var tipoMasCaro;
    var montoBruto = 0;
    var montoBrutoConDescuento;
    var totalBolsas = 0;
    var descuento = 0;
    var primerPrecio = true;

    do {
        //Tipo validad("arena";"cal";"cemento")
        tipo = prompt(`Ingrese tipo deproducto ("arena" , "cal", "cemento"`);
        while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
            tipo = prompt(`Valor Inválido: Ingrese tipo deproducto ("arena" , "cal", "cemento"`);
        }

        //Cantidad de bolsas,
        cantidadBolsas = prompt(`Ingrese cantidad`);
        cantidadBolsas = parseInt(cantidadBolsas);

        //Precio por bolsa (más de cero ),
        precioBolsa = prompt(`Ingrese precio de bolsa`);
        precioBolsa = parseInt(precioBolsa);
        while (precioBolsa < 0) {
            precioBolsa = prompt(`Valor Inválido: debe ser un importe positivo`);
        }

        switch (tipo) {
            case "arena":
                cantidadArena += cantidadBolsas;
                break;
            case "cal":
                cantidadCal += cantidadBolsas;
                break;
            case "cemento":
                cantidadCemento += cantidadBolsas;
                break;
        }

        //determinar el mas caro
        if (primerPrecio == true || precioBolsa > masCaro)
        {
            masCaro = precioBolsa;
            tipoMasCaro = tipo;
            primerPrecio = false;
        }
        montoBruto += cantidadBolsas * precioBolsa;
        seguir = prompt("Desea continuar? s/n", "s");
    } while (seguir == "s");

    if (cantidadArena > cantidadCal && cantidadArena > cantidadCemento) {
        mayorTipo = "Arena";
    }
    else if (cantidadCal > cantidadArena && cantidadCal > cantidadCemento) {
        mayorTipo = "Cal";
    }
    else {
        mayorTipo = "Cemento";
    }
    totalBolsas = cantidadArena + cantidadCal + cantidadCemento;
    if (totalBolsas > 30)
    {
        descuento = 25;
    }
    else if (totalBolsas > 10)
    {
        descuento = 10;
    }
    montoBrutoConDescuento = montoBruto - montoBruto * descuento / 100;
    console.log("A) El importe total a pagar , bruto sin descuento es: " + montoBruto);
    console.log("B) el importe total a pagar con descuento(solo si corresponde) " + montoBrutoConDescuento);
    console.log("D) El tipo con mas cantidad de bolsas es: " + mayorTipo);
    console.log("E) El tipo mas caro es: " + tipoMasCaro)
}


/*
datos
cal     cal     cemento     arena
100     50      250         200
20      30      50          20

bruto 2000 + 1500 + 12500 + 4000 = 20000
bruto con descuento 15000



*/
