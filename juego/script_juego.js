//import fs from 'fs'

var dificultad = getParameterByName('dificultad');
var operacion = getParameterByName('operacion');
var signo = obtenerSigno(operacion);
var a = 0;
var b = 0;
var valorResult = 0;
var puntaje = 0;
var puntajeMal = 0;
var limite = 10;
var cont = 1;


function obtenerSigno(operacion) {

    var tipo = "";
    if (operacion == 1) {
        tipo = "+";
    }
    if (operacion == 2) {
        tipo = "-";
    }
    if (operacion == 3) {
        tipo = "x";
    }
    if (operacion == 4) {
        tipo = "/";
    }
    return tipo;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function valor() {
    puntaje = 10;
    var inicio = document.getElementById("inicio");
    var start = document.getElementById("start");
    var resultados = document.getElementById("resultados");
    inicio.style.display = "inline";
    resultados.style.display = "inline";
    start.style.display = "none";

    var puntaje_numero = document.getElementById("puntaje_numero");
    //var pun="Puntaje 0 de "+ puntaje;
    puntaje_numero.innerHTML = "Puntaje: ";

    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");

    var puntaje = document.getElementById("puntaje");
    puntaje.style.display = "inline";

    if (operacion == 1) {
        if (dificultad == 1) {
            a = Math.floor(Math.random() * 10) + 1
            b = Math.floor(Math.random() * 10) + 1
        }
        if (dificultad == 2) {
            a = Math.floor(Math.random() * 25) + 1
            b = Math.floor(Math.random() * 20) + 1
        }


        number1.innerHTML = a;
        number2.innerHTML = " " + signo + " " + b;

        valorResult = a + b;
        valorButton(valorResult);

    }
    if (operacion == 2) {
        if (dificultad == 1) {
            a = Math.floor(Math.random() * 10) + 1
            b = Math.floor(Math.random() * 10) + 1
            while (b > a) {
                a = Math.floor(Math.random() * 10) + 1
            }
        }
        if (dificultad == 2) {
            a = Math.floor(Math.random() * 25) + 1
            b = Math.floor(Math.random() * 15) + 1
            while (b > a) {
                a = Math.floor(Math.random() * 25) + 1
            }
        }
        number1.innerHTML = a;
        number2.innerHTML = " " + signo + " " + b;

        valorResult = a - b;
        valorButton(valorResult);
    }
    if (operacion == 3) {
        if (dificultad == 1) {
            a = Math.floor(Math.random() * 8) + 1
            b = Math.floor(Math.random() * 8) + 1
        }
        if (dificultad == 2) {
            a = Math.floor(Math.random() * 13) + 1
            b = Math.floor(Math.random() * 13) + 1
        }
        number1.innerHTML = a;
        number2.innerHTML = " " + signo + " " + b;

        valorResult = a * b;
        valorButton(valorResult);
    }
    if (operacion == 4) {
        if (dificultad == 1) {
            a = Math.floor(Math.random() * 10) + 1
            b = Math.floor(Math.random() * 10) + 1
            while (b > a) {
                a = Math.floor(Math.random() * 10) + 1
            }
            do {
                b = Math.floor(Math.random() * a) + 1
            } while (a % b !== 0);
        }
        if (dificultad == 2) {
            a = Math.floor(Math.random() * 20) + 2
            b = Math.floor(Math.random() * 20) + 1
            while (b>a) {
                a = Math.floor(Math.random() * 20) + 2
            }
            do {
                b = Math.floor(Math.random() * a) + 1
            } while (a % b !== 0);
            
        }
        number1.innerHTML = a;
        number2.innerHTML = " " + signo + " " + b;

        valorResult = a / b;
        valorButton(valorResult);
    }

}
function valorButton(resultado) {

    var result = document.getElementById("result");
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");
    var result3 = document.getElementById("result3");

    var valorResult1 = Math.floor(Math.random() * 20) + 1;
    var valorResult2 = Math.floor(Math.random() * 20) + 1;
    var valorResult3 = Math.floor(Math.random() * 20) + 1;

    var numberButton = Math.floor(Math.random() * 4) + 1;


    if (numberButton === 1) {

        document.getElementById("result").value = resultado
        document.getElementById("result1").value = valorResult1
        document.getElementById("result2").value = valorResult2
        document.getElementById("result3").value = valorResult3

        document.getElementById("result").innerHTML = resultado
        document.getElementById("result1").innerHTML = valorResult1
        document.getElementById("result2").innerHTML = valorResult2
        document.getElementById("result3").innerHTML = valorResult3



    }
    if (numberButton === 2) {

        document.getElementById("result").value = valorResult1
        document.getElementById("result1").value = resultado
        document.getElementById("result2").value = valorResult2
        document.getElementById("result3").value = valorResult3

        document.getElementById("result").innerHTML = valorResult1
        document.getElementById("result1").innerHTML = resultado
        document.getElementById("result2").innerHTML = valorResult2
        document.getElementById("result3").innerHTML = valorResult3


    }

    if (numberButton === 3) {

        document.getElementById("result").value = valorResult1
        document.getElementById("result1").value = valorResult2
        document.getElementById("result2").value = resultado
        document.getElementById("result3").value = valorResult3

        document.getElementById("result").innerHTML = valorResult1
        document.getElementById("result1").innerHTML = valorResult2
        document.getElementById("result2").innerHTML = resultado
        document.getElementById("result3").innerHTML = valorResult3
    }

    if (numberButton === 4) {

        document.getElementById("result").value = valorResult1
        document.getElementById("result1").value = valorResult2
        document.getElementById("result2").value = valorResult3
        document.getElementById("result3").value = resultado

        document.getElementById("result").innerHTML = valorResult1
        document.getElementById("result1").innerHTML = valorResult2
        document.getElementById("result2").innerHTML = valorResult3
        document.getElementById("result3").innerHTML = resultado

    }

}
function btn(){
    var result = document.getElementById("btn");
    console.log(result.value)
    result.value=2;
    document.getElementById("btn").innerHTML="kkkk";
}

async function comprobar(id) {
    console.log("nivel",cont)
    var valor = document.getElementById(id).value;

    //var pun="Puntaje 0 de "+ puntaje;

    var correcto = document.getElementById("correcto");
    var incorrecto = document.getElementById("mal");
    var check = "";
    var mal = "";
    if (valor == valorResult) {
        puntaje = puntaje + 1;
        cont = cont + 1;
        correcto.style.display = "inline";
        incorrecto.style.display = "none";
        document.getElementById('sonido_fondo').pause();
        document.getElementById('sonido_correcto').play();
        await sleep(2000)
        document.getElementById('sonido_fondo').play();
        correcto.style.display = "none";


    } else {
        cont = cont + 1;
        puntajeMal = puntajeMal + 1;
        incorrecto.style.display = "inline";
        correcto.style.display = "none";
        document.getElementById('sonido_fondo').pause();
        document.getElementById('sonido_incorrecto').play();
        await sleep(4000)
        document.getElementById('sonido_fondo').play();
        incorrecto.style.display = "none";

    }
    
    var nivel = document.getElementById("nivel");
    nivel.innerHTML = "Nivel: " + cont + " de " + limite;
    if (limite > puntaje || limite > puntajeMal) {
        this.valor();
    }
    if (cont == limite+1) {
        if (puntaje > puntajeMal) {
            console.log("entra")
            this.ganar("ganar_imagen");
        } else {
            console.log("pierde");
            this.ganar("perder_imagen");
        }
    }



    for (var i = 0; i < puntaje; i++) {
        check = check + "&#9989; "
    }
    for (var i = 0; i < puntajeMal; i++) {
        mal = mal + "&#10060;"
    }


    var puntaje_numero = document.getElementById("puntaje_numero");
    puntaje_numero.innerHTML = "Puntaje: " + check + "<br/> " + mal;

    console.log("punt ", puntaje)

}

function ganar(id) {
    var puntaje = document.getElementById("puntaje");
    var inicio = document.getElementById("inicio");
    var resultados = document.getElementById("resultados");

    var ganar = document.getElementById(id);
    var regresar = document.getElementById("regresar");

    var reintentar = document.getElementById("reintentar");

    puntaje.style.display = "none";
    inicio.style.display = "none";
    resultados.style.display = "none";

    ganar.style.display = "inline";
    regresar.style.display = "inline";
    reintentar.style.display = "inline";
}
function reintentar() {
    location.href = "juego.html?operacion=" + operacion + "&dificultad=" + dificultad;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function regresar() {
    location.href = "../index.html"
}
