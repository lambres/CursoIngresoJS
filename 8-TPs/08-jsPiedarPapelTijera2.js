/*
Ruben Dario Zevallos Lambrescht
División K
Ejercicio TP Piedra Papel Tijera 2
*/
var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
    let minimo = 1;
    let maximo = 3;
    eleccionMaquina = Math.round((Math.random() * (maximo - minimo) + minimo));



}//FIN DE LA FUNCIÓN
function piedra()
{
    let mensaje;
    switch(eleccionMaquina)
    {
        case 1:
            mensaje = "Empató";
			ContadorDeEmpates += 1;
            break;
        case 2:
            mensaje = "Perdió";
			ContadorDePerdidas += 1;
            break;
        case 3:
            mensaje = "Ganó";
			ContadorDeGanadas += 1;
            break;
    }
    alert(mensaje);
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function papel()
{
    switch(eleccionMaquina)
    {
        case 1:
            mensaje = "Ganó";
			ContadorDeGanadas += 1;
            break;
        case 2:
            mensaje = "Empató";
			ContadorDeEmpates += 1;
            break;
        case 3:
            mensaje = "Perdió";
			ContadorDePerdidas += 1;
            break;
    }
    alert(mensaje);
	mostrarResultado();

}//FIN DE LA FUNCIÓN

function tijera()
{
    switch(eleccionMaquina)
    {
        case 1:
            mensaje = "Perdió";
			ContadorDePerdidas += 1;
            break;
        case 2:
            mensaje = "Ganó";
			ContadorDeGanadas += 1;
            break;
        case 3:
            mensaje = "Empató";
			ContadorDeEmpates += 1;
            break;
    }
    alert(mensaje);
	mostrarResultado();

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas + " Ganadas";	
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas+ " Perdidas";	
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates + " Empatadas";	
	comenzar();
}