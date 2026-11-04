//

console.log("8, selecionando um elemento")

const resumo =
    document.querySelector("#resumo")
console.log(resumo)

console.log("10, alterando conteúdo")

resumo.textContent = 
    `${pedidos.length} pedidos encontrados`
//olha só, já encontrou a variável pedidos que
//tá em outro arquivo sozinho


console.log("11, textContent")

const titulo =
    document.querySelector("h1")

titulo.textContent =
    "JSLab - Gestão de Pedidos"

console.log("12, selecionando vários elementos")

//const elementos =
//    document.querySelectorAll(".teste")
//console.log(elementos)

console.log("13, percorrendo elementos")

const elementos =
    document.querySelectorAll(".teste")

elementos.forEach(elemento =>{
    console.log(elemento.textContent)
})

//14, classes com JS

const titulo2 =
    document.querySelector("h1");

titulo2.classList.add("destaque");

console.log("15, alterando atributos")

//nvm

console.log("16, criando elementos")

const paragrafo =
    document.createElement("p")

paragrafo.textContent =
    "Elemento criado com Javascript"

    console.log(paragrafo)

console.log("17, inserindo elementos criados na página")

const lista=
    document.querySelector("#lista-pedidos")

lista.append(paragrafo)

//ok, mas o esqueleto do elemento já estava feito no HTML antes

console.log("18, removendo paragrafos")

paragrafo.remove()

//

console.log("20/21, segunda unidade, renderização, criando um card")

const artigo =
    document.createElement("article")

const titulo3 =
    document.createElement("h3")

titulo3.textContent =
    "Pedido PS-1042"

artigo.append(titulo3)
lista.append(artigo)

console.log("22, função de renderização")

function renderizarPedidos(ListaPedidos) {

    if (ListaPedidos.length === 0) {
        const mensagem = document.querySelector("#lista-pedidos")
        document.createElement("h1")
        mensagem.textContent = "A lista tá vazia irmão"
    } else {

    const lista =
        document.querySelector(
            "#lista-pedidos"
        )
    
    lista.textContent = "" //esvazia a lista criada anteriormente

    ListaPedidos.forEach(i => {

        const artigo =
                document.createElement("article")
            
        const titulo =
                document.createElement("h3")

        const dados = 
                document.createElement("p")
            
        titulo.textContent =
                `PS-${i.id}`
        
        dados.innerText =
                `Cliente: ${i.cliente}
                 Categoria: ${i.categoria}
                 Prioridade: ${i.prioridade}
                 Status: ${i.status}
                 Valor: R$${i.valor}` //sinto muito
            
        artigo.append(titulo)
        artigo.append(dados)
        lista.append(artigo)
    })}
}

renderizarPedidos(pedidos)


console.log("30, eventos")

//lida com ações em uma interface como
//clique, digitação,, alteração de campo,envio de formulário, movimento do ponteiro do mouse
//o JS pode responder a isso

console.log("31, addEventListener()")

const botao = 
    document.querySelector("#botao-teste") //pelo visto eu preciso, ou é boa prática, criar uma const cujo valor é o queryselector. Selecionar antes de interagir.

/* botao.addEventListener(
    "click",
    () => {
        console.log("Botão clicado")
    }
) */

console.log("32, o objeto event")

botao.addEventListener(
    "click",
    () => {
        console.log(event) //aponto como deprecated, não sei porque. funcionou anyway
    }
)

console.log("33, Rleacionando interface e dados")

//"Qual pedido correspnde ao botão clicado?"
//acho que quer dizer "a que variável o botão que cliquei está ligada?"


console.log("34, data-*")

//O código em cima tá uma bagunça, então melhor criar um card novo do zero até pra treinar.


//seleciona onde os cards vão entrar no index.html
const lista2 = document.querySelector("#lista-novos-pedidos")
const resumo2 = document.querySelector("#novo-resumo")


//montar um único card
function criarnovocard(lista_produtos_2) {
    
    const artigo = document.createElement("article") //cria a caixa principal do card

//cria os elementos internos
    
    //titulo (ou nesse caso código do pedido)
    const titulo = document.createElement("h3")
    titulo.textContent = `Código ${lista_produtos_2.codigo}`

    //produto em si
    const produto = document.createElement("p")
    produto.textContent = `Nome do produto: ${lista_produtos_2.nome}`

    //preço
    const preco = document.createElement("p")
    preco.textContent = `Preço: R$ ${lista_produtos_2.preco}`

    //o que mais for colocar, que aqui é o botão do 34 e 36
    const botao = document.createElement("button")
    botao.textContent = "Ver detalhes"
    botao.dataset.id = lista_produtos_2.codigo
    botao.dataset.acao = "detalhes"
    
    artigo.append(titulo, produto, preco, botao)

    return artigo

}

function renderizarNovosPedidos(colecao) {
    lista2.textContent = "" //limpa a div

    resumo2.textContent = `${colecao.length} produtos encontrados`

    colecao.forEach(i => {
        const cardPronto = criarnovocard(i)
        lista2.append(cardPronto)
    })

}

renderizarNovosPedidos(lista_produtos_2)


const ELlista = 
document.querySelector("#lista-pedidos")

ELlista.addEventListener(
    "click",
    event => {
        console.log(event.target)
    }
)

lista.addEventListener(
    "click",
    event => {
        const botao =
            event.target.closest(
                "[data-acao]"
            )
        if (!botao) {
            return
        }
        console.log(botao.dataset)
    }
)

//Deus ajude