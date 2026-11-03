const pedidos = [
    {
        id: 1042,
        cliente: "Clínica Central",
        prioridade: "alta",
        status: "atendimento",
        valor: 850
    },
    {
        id: 1043,
        cliente: "Loja Horizonte",
        prioridade: "normal",
        status: "aberto",
        valor: 420
    },
    {
        id: 1044,
        cliente: "Escritório Almeida",
        prioridade: "urgente",
        status: "aberto",
        valor: 1200
    }
]


console.log("25, find()")

const pedidoEncontrado = pedidos.find(i => i.id === 9999)
console.log(pedidoEncontrado)

console.log("27, criando função que busca por ID")

function buscarPedidoPorId(id) {
    return pedidos.find (
        i => i.id === id
    )
}

console.log(buscarPedidoPorId(1042))
console.log(buscarPedidoPorId(9999))

console.log("28, findIndex()")

const indice = pedidos.findIndex (i => i.id ===1043)
console.log(indice)

//

console.log("29,filter()")

//filtrar todos os pedidos com status "aberto"

const pedidosAbertos = pedidos.filter(
    i => i.status === "aberto"
)

console.log(pedidosAbertos)

//

console.log("30, exercício filtrando por prioridade")

const filtroPrioridades = pedidos.filter(
    i => i.prioridade
)

console.log(filtroPrioridades)

//

console.log("31, map()")

const nomesClientes = pedidos.map(
    i => i.cliente
)

console.log(nomesClientes)

console.log("32, criando novos valores com map()")

const resumos = pedidos.map(
    i => {return `${i.id} - ${i.cliente}`})

    console.log(resumos)


//

console.log("33, includes")

const texto = "Clínica Central"

console.log(texto.includes("Central"))

//

console.log("34, busca sem diferenciar capitalização (maiúscula e minuscula)")

const texto2 = "Clínica Central"
const termo = "central"

console.log(
    texto2
        .toLowerCase()
        .includes(termo.toLowerCase())
)

//

console.log("35, função de pesquisa")

function pesquisarPedidos(termo) {
    const termoNormalizado = termo.toLowerCase()

    return pedidos.filter(i =>
        i.cliente
            .toLowerCase()
            .includes(termoNormalizado)
    )
}

//resultado = pesquisarPedidos("almeida")
//console.log(resultado)

//

console.log("36, Ampliar a pesquisa")

function pesquisarPedidos2(termo) {
    const termoNormalizado = termo.toLowerCase()

    return pedidos.filter(i =>
        i.cliente
            .toLowerCase()
            .includes(termoNormalizado) ||
        i.status
            .toLowerCase()
            .includes(termoNormalizado) ||
        i.prioridade
            .toLowerCase()
            .includes(termoNormalizado)
    )
}

resultado2 = pesquisarPedidos2("aberto")
console.log(resultado2)

//

console.log("38, ordenacao com sort()")

pedidos.sort(
    (a,b) => a.valor - b.valor
)

console.log(pedidos)

//

console.log("40, criando copia antes de ordenar")

//spread syntax

const pedidosOrdenados = [
    ...pedidos
]

pedidosOrdenados.sort(
    (a,b) => a.valor - b.valor
)

//

console.log("43, ordenacao crescente e decrescente")

console.log("43-1, ordenacao crescente")

const valorcrescente = [...pedidos]
valorcrescente.sort(
    (a,b) => a.valor - b.valor
)

console.log(valorcrescente)

console.log("43-2, ordenacao decrescente")

const valordecrescente = [...pedidos]

valordecrescente.sort(
    (a,b) => b.valor - a.valor
)

console.log(valordecrescente)

//

console.log("43, ordenando textos")

const porCliente = [...pedidos]

porCliente.sort (
    (a,b) => a.cliente.localeCompare(b.cliente)
)

console.log(porCliente)

//

console.log("44, exercicio funcoes de ordenacao")

const copia1 = [...pedidos]

copia1.sort (
    (a,b) => a.valor - b.valor
)

console.log(copia1)

const copia2 = [...pedidos]

copia2.sort (
    (a,b) => b.valor - a.valor
)

console.log(copia2)


const copia3= [...pedidos]

copia3.sort(
    (a,b) => a.cliente.localeCompare(b.cliente)
)

console.log(copia3)

//

console.log("46, combinando operacoes")

const resultado = pedidos
        .filter(i => i.status === "aberto")
        .filter(i => i.valor >= 500)

//

console.log("47, Exercicio de processamento (filtragem)")

const listao = [
    {
        id: 0o1,
        pedido: "Manutencao do Peugeot",
        cliente: "Wagnelles",
        valor: 5000,
        prioridade: "alta"
    },

    {
        id: 0o2,
        pedido: "Manutencao do March",
        cliente: "Sograo",
        valor: 500,
        prioridade: "baixa"
    },

    {
        id: 0o3,
        pedido: "Manutencao Bicicleta",
        cliente: "Wagnelles",
        valor: 50,
        prioridade: "media"
    },

    {
        id: 0o5,
        pedido: "Manutencao Notebook",
        cliente: "Wagnelles",
        valor: 500,
        prioridade: "alta"
    }

]

function exercicio47(prioridade, valorMinimo) {
    const termoNormalizado = prioridade.toLowerCase()
    const copiaListao1 = [...listao]

    const searchprioridades = copiaListao1.filter(i =>
        i.prioridade
            .toLocaleLowerCase()
            .includes(termoNormalizado)
        &&
        i.valor >= valorMinimo)

    return searchprioridades
}

const resultado47 = exercicio47("alta",500)
console.log(resultado47.sort(
    (a,b) => a.valor - b.valor))

//normaliza capitalização do termo recebido pela função
//faz a copia do dicionario
//no return, usamos o filter na copia do dicionario
//sem esquecer de tambémnormalizar a capitalização dele, e incluir o termo que foi normalizado no início


//

console.log("48, separando dados de apresentação")

//basicamente falando pra armazenar valores puros
//e usar coisas como R$ apenas na apresentação,
//ou seja, no console.log


//

console.log("49, introdução a intl (recursos para formataçao")

const formatadorMoeda =
    new Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    )

console.log(formatadorMoeda.format(850))

//ah, é um jeito chique de formatar direto no console.log

console.log("51, resumos formatados")

listao.forEach(i => {
    const valorFormatado = 
        formatadorMoeda.format(
            i.valor
        )
    console.log(`${i.cliente} - ${valorFormatado}`)
})

//daora

