for (let i = 1; i <= 5; i++) {
    console.log(i)
}

//modificando para apresentar até o 10:

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//modificando pra mostrar só número par:

for (let i = 1; i <= 10; i++) {
    if (i%2===0) {
        console.log(i)
    }

}

//repetição com cálculo

let soma = 0;

for (let i = 1; i <= 5; i++) {
    soma = soma +i
}

console.log(soma)

console.log("Questão 8:")

for (let i = 1; i <= 20; i++) {
    if (i%2===0) {
        console.log(i)
    }
}

console.log("9 - uso do While")

let contador = 1;
while (contador <=5) {
    console.log(contador);

    contador++
}

console.log("10 - Repetição infinita (comentei o código porque travou o PC)")

//let contador10 = 1

//while (contador10 <= 5) {
    //console.log(contador10)

//}

console.log("12, Exercício processamento de pedidos")

const quantidadePedidos = 8
for (let i = 1; i <= quantidadePedidos; i++){
    const mensagempedidos = 
    `Processando pedido ${i}`
    console.log(mensagempedidos)
}

console.log("13 - Exercício contagem regressiva")
//nossa seria mil vezes mais fácil só fazer um while
for (let i =10; i > 1; i--){
    console.log(i)
    if (i === 2){
        console.log("1\nFim")
    }
}

console.log("13-2 - Exercício contagem regressiva, tentativa com while")

let contador13=10
while (contador13 >=1) {
    console.log(contador13)
    contador13--
}
if (contador13 === 0){
    console.log("Fim")
}