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
