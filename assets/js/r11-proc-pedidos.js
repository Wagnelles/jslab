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

resultado = pesquisarPedidos("almeida")
console.log(resultado)

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