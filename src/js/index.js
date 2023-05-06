/*
OBJETIO - quando clicarmos na aba temos que mostraro conteúdo 
da aba que foi clicada pelo usuário e esconder o conteúdo da 
aba anterior 

PASSO 1 - dar um jeito de pegar os elementos que representam 
as abas no HTML 

PASSO 2 - dar +um jeito de identificar o clique no elemento aba

PASSO 3 - quando o usuário clicar,desmarcar a aba selecionada 

PASSO 4 - marcar a aba clicada como selecionada 

PASSO 5 - esconder o conteúdo anterior 

PASSO 6 - mostrar o conteúdo da aba selecionada 
*/

/* PASSO 1 - dar um jeito de pegar os elementos que representam 
as abas no HTML */
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {

    // PASSO 2 - dar +um jeito de identificar o clique no elemento aba
    aba.addEventListener("click", function() {

        if(aba.classList.contains("seleionado")){
            return;
        }

        selecionarAba(aba)
        mostarInformacoesDaAba(aba)
        
    });
});

function selecionarAba(aba) {
    // PASSO 3 - quando o usuário clicar,desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");

    abaSelecionada.classList.remove("selecionado");

    // PASSO 4 - marcar a aba clicada como selecionada
    aba.classList.add("selecionado");
}

function mostarInformacoesDaAba(aba) {
    // PASSO 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado");

    // PASSO 6 - mostrar o conteúdo da aba selecionada 
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}
