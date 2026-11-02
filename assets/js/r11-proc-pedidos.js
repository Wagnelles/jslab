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