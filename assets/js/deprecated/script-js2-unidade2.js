console.log("17 - Criando uma função")

function exibirSaudacao(){
    console.log("Olá!")
}

exibirSaudacao()

//

console.log("19 - Parâmetros (função receber valor")

function exibirNome(nome) {
    console.log(`Olá, ${nome}!`)
}

exibirNome("Marina")
exibirNome("Carlos")
exibirNome("João")

//


console.log("20 - Mais de um Parâmetro (função receber + de 1 valor")

function calcularTotal(preco, quantidade) {
    const total = preco * quantidade

    console.log(total)
}

calcularTotal(20,3)
calcularTotal(15.5,4)

console.log("21 - Função retornando valores")

function calcularTotal2 (preco,quantidade) {
    return preco * quantidade
}

const totalPedido = calcularTotal2(50,3)
console.log(totalPedido)

//

console.log("23, Exercicio Desconto")

function calcularDesconto(valor,percentual) {
    Vdesconto = valor * (percentual/100)
    return Vdesconto
}
const valor23 = 1020
const desconto23 = 20
const valorDesconto = calcularDesconto(valor23,desconto23)

const valor_final = valor23 - valorDesconto
console.log(`Valor com desconto = ${valor_final}`)

//

console.log("26, Exercício, situação acadêmica")

function verificarSituacao(nota,frequencia){
    let situacao = ""
    if (nota >= 60 && frequencia >= 75){
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    }
    return situacao
}

situacao = verificarSituacao(59,75)
console.log(`Situação do aluno: ${situacao}`)

//

console.log("32, depuração com breakpoint")

function calcularValorFinal(preco, quantidade, percentualDesconto2){
    const subtotal = preco * quantidade
    const desconto = subtotal / 100
    const total = subtotal - desconto
    return total
}
const resultado = calcularValorFinal(80,3,10)
console.log(resultado)

//

console.log("34, erro lógico, acompanhar com depuração")

function calcularMedia(nota1,nota2,nota3) {
    const total = nota1+nota2+nota3
    const media = total/3 //problema aqui - uima média é a divisão do total dos valores pela quantidade de valores separados
    return media
}

console.log(calcularMedia(70,80,90))

//

console.log("37, Desafio tabuada")

function exibirTabuada(numero){
    for (i = 1; i<=numero; i++) {
        mensagem = `${numero} * ${i} = ${numero * i}`
        console.log(mensagem)
    }
}

exibirTabuada(10)

//

console.log("38, desafio faixa ed temperatura")

function classTemp(temp){
    let classificacao = ""
    if (temp <=10) {
        classificacao = "Muito frio"
    } else if (temp > 10 && temp <=20){
        classificacao = "Frio"
    } else if (temp > 20 && temp <=25){
        classificacao = "Agradável"
    } else if (temp > 25 && temp <= 30){
        classificacao = "Quente"
    } else {
        classificacao = "Muito quente"
    }
    return classificacao
}

valorClassificado = classTemp(31)
console.log(`Definição da temperatura: ${valorClassificado}`)

//

console.log("39, desafio, processamento de pedidos")


function calcularSubtotal(subtotal) {
    calcularDesconto2(subtotal)

}

function calcularDesconto2(subtotal) {
    let desconto = 0
    if (subtotal >= 200) {
        desconto = 15
    } else if (subtotal >=100) {
        desconto = 10
    }
    let valorDesconto = subtotal * (desconto / 100)
    calcularTotal3(subtotal, valorDesconto)

}

function calcularTotal3(subtotal, valorDesconto) {
    const valorFinal = subtotal - valorDesconto
    let temDesconto = false
    if (valorDesconto > 0){
        temDesconto = true
    }
    classificarPedido(valorFinal, temDesconto, valorDesconto, subtotal)

}

function classificarPedido(vf, td, vd, st) {
    if (td === false){
        mensagem_final = `Seu pedido não teve desconto.\nValor final: ${vf}`
    } else {
        mensagem_final = `Subtotal: ${st}\nSeu pedido teve desconto de ${(vd/st) * 100}%.\nValor final: ${vf}`
    }
    console.log(mensagem_final)

}

const totalcarrinho = 100
calcularSubtotal(totalcarrinho)