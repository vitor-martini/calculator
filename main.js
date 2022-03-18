"use strict"

var numeros = [];

function calcular(valor){
    console.log(valor);

    return valor;
}

function adicionar(valor){
    const elemento = document.querySelector(".visor");
    const valorVisor = elemento.value;

    if(valor == "=")
        elemento.value = calcular(valorVisor);
    else{
        const valorAdicionar = valorVisor + valor;
        elemento.value = valorAdicionar;
    }
}

const listaDeBotoes = document.querySelectorAll('.botao')

for(let i = 0; i < listaDeBotoes.length; i++){      
    const botao = listaDeBotoes[i];
    const botaoValor = botao.classList[1];

    listaDeBotoes[i].onclick = function() {        
        adicionar(botaoValor);
    }
}
