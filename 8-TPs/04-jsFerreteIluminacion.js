/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca 
el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un 
descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto 
con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //declaro variable para capturar los valores del formulario html
    let CantLamparas;
    let marca;
    let descuento;
    let unitarioConDescuento;
    let neto;
    let bruto;
    let impuesto;
    const PRECIO = 35;
    descuento = 0
    CantLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if (CantLamparas >= 6){
            descuento = 50;
    }else if (CantLamparas == 5 && marca == "ArgentinaLuz"){
        descuento = 40;
    }else if (CantLamparas == 5){
        descuento=30;
    }else if (CantLamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas") ){
        descuento = 25;
    }else if (CantLamparas == 4){ 
        descuento = 20;
    }else if (CantLamparas == 3 && marca == "ArgentinaLuz"){
        descuento = 15;
    }else if (CantLamparas == 3 && marca == "FelipeLamparas" ){
        descuento = 10;
    }else{
        descuento = 5;
    }

    unitarioConDescuento = PRECIO - PRECIO * descuento / 100;
    document.getElementById("txtIdprecioDescuento").value = "Precio unitario neto con descuento " + unitarioConDescuento.toFixed(2);
    neto = unitarioConDescuento * CantLamparas;
    if (neto >= 120){
        impuesto = neto * 10 / 100;
        bruto = neto + impuesto;
        alert(`Usted pago ${impuesto} de IIBB., total a abonar ${bruto.toFixed(2)}`);
        //document.getElementById("txtIdprecioDescuento").value = `Usted pago ${impuesto} de IIBB., total a abonar ${bruto.toFixed(2)}`;
    }else{
        alert(`total a abonar ${neto.toFixed(2)}`);
        //document.getElementById("txtIdprecioDescuento").value = neto.toFixed(2);
    }
}
