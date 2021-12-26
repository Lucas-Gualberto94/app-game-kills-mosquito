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

function posicaoRandomica() {

    var posicaoX = Math.floor(Math.random() * largura) -90 //math.floor tira as casas decimais
    var posicaoY = Math.floor(Math.random() * altura) -90 // -90 para a imagem não passar e ser cortada

    posicaoX = posicaoX  < 0 ? 0 : posicaoX //verifica se a posição X é 0, se for ela vai continuar 0,  
    posicaoY = posicaoY  < 0 ? 0 : posicaoY //se não fica no valor que ela tava mesmo  
    
    console.log(posicaoX, posicaoY)

    //criar o elemento hmtl
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = 'mosca1'
    mosca.style.left = posicaoX +'px'
    mosca.style.top = posicaoY +'px'
    mosca.style.position = 'absolute'

    document.body.appendChild(mosca)
}