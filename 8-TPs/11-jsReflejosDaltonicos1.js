/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
function comenzar()
{
    let ahora;
    let minimo = 1;
    let maximo = 6;
    let nroColor;
    ahora = new Date().getTime();
    nroColor = Math.round((Math.random() * (maximo - minimo) + minimo));
    switch(nroColor){
        case 1:
            ColorSecreto = "azul";
            break;
        case 2:
            ColorSecreto = "amarillo";
            break;
        case 3:
            ColorSecreto = "marron";
            break;
        case 4:
            ColorSecreto = "verde";
            break;
        case 5:
            ColorSecreto = "celeste";
            break;
        case 6:
            ColorSecreto = "rojo";
            break;
                                                                            
    }
	document.getElementById("txtIdColorElegido").value = ColorSecreto;
    tiempoInicio = setTimeout(Responder,4000,ColorSecreto) 

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	
	


}//FIN DE LA FUNCIÓN
