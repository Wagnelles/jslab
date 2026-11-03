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