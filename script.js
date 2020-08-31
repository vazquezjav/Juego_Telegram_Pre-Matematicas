var operacion=0;
var dificultad=0;
function start(){
    console.log("llego");
    var start = document.getElementById("start");
    var tipo_operacion = document.getElementById("operacion");
    start.style.display = "none";
    tipo_operacion.style.display = "inline";  
}
function menu_operacion(tipo){
    operacion=tipo;
    var start = document.getElementById("start");
    var tipo_operacion = document.getElementById("operacion");
    var dificultades = document.getElementById("dificultades");
    
    start.style.display = "none";
    tipo_operacion.style.display = "none"; 
    dificultades.style.display="inline";
    
}
function menu_dificultad(tipo){
    dificultad=tipo;
    console.log(operacion)
    console.log(dificultad)
    location.href ="juego/juego.html?operacion="+operacion+"&dificultad="+dificultad;
}