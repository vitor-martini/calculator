"use strict"
function calculadora(valor){
    const visor = document.querySelector(".visor");

    if(isNaN(valor)){
        limpar = false;
    } else if(limpar){
        visor.value = '';
        limpar = false;
    }
    
    if(valor == "="){
        visor.value = eval(visor.value);
        limpar = true;
    }
    else
        visor.value += valor;
}

let limpar = false;
const listaDeBotoes = document.querySelectorAll('.botao')

for(let i = 0; i < listaDeBotoes.length; i++){      
    let valor = listaDeBotoes[i].textContent;

    switch (valor) {
    case 'x':
        valor = "*";
        break;
    case '÷':
        valor = "/";
        break;
    }

    listaDeBotoes[i].onclick = function() {        
        calculadora(valor);
    }
}
