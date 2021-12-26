// para medir tamanho da tela e atualizar caso tenha mudança do tamanho da janela.

var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo () {

    altura = window.innerHeight //permite recuperar a altura da tela do navegador
    largura = window.innerWidth //permite recuperar a largura da tela do navegador
    
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//criando posições randômicas

var posicaoX = Math.random()
var posicaoY = Math.random()

console.log(posicaoX, posicaoY)