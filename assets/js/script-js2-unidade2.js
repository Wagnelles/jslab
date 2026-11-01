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
    const media = total/2 //problema aqui - uima média é a divisão do total dos valores pela quantidade de valores separados
    return media
}

console.log(calcularMedia(70,80,90))