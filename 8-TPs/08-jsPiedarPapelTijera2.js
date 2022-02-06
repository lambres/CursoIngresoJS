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
    switch(eleccionMaquina){
        case 1:
            alert("Empató");
			ContadorDeEmpates += 1;
            break;
        case 2:
            alert("Perdió");
			ContadorDePerdidas += 1;
            break;
        case 3:
            alert("Ganó");
			ContadorDeGanadas += 1;
            break;

    }
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function papel()
{
    switch(eleccionMaquina){
        case 1:
            alert("Ganó");
			ContadorDeGanadas += 1;
            break;
        case 2:
            alert("Empató");
			ContadorDeEmpates += 1;
            break;
        case 3:
            alert("Perdió");
			ContadorDePerdidas += 1;
            break;
            
    }
	mostrarResultado();

}//FIN DE LA FUNCIÓN

function tijera()
{
    switch(eleccionMaquina){
        case 1:
            alert("Perdió");
			ContadorDePerdidas += 1;
            break;
        case 2:
            alert("Ganó");
			ContadorDeGanadas += 1;
            break;
        case 3:
            alert("Empató");
			ContadorDeEmpates += 1;
            break;
            
    }
	mostrarResultado();

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas + " Ganadas";	
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas+ " Perdidas";	
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates + " Empatadas";	
	comenzar();
}