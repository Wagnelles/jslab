console.log("4, arrays")

const categorias = [
"Infraestrutura",
"Software",
"Hardware",
"Rede"
]

console.log(categorias)


//Indices
console.log(categorias[0])
console.log(categorias[1])
console.log(categorias[2])

//

console.log("Quantidade de elementos")
console.log (categorias.length)

//

console.log("7, último elemento")

const ultimaCategoria = categorias[categorias.length-1]
console.log(ultimaCategoria)

//

console.log("8, adicionado elementos (append do JS)")

categorias.push("Segurança")
console.log(categorias)

//

const removida = categorias.pop()

console.log(removida)
console.log(categorias)

//

console.log("10, percorrendo array")

for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i])
}

//

console.log("11, forEach")

categorias.forEach(i => {
    console.log(i)
})

//

console.log("13, Objetos (dicionários em Python)")

const pedido = {
	id: 1042,
	cliente: "clínica geral",
	prioridade: "alta",
	status: "atendimento"
	}
console.log(pedido)

//

console.log("14, propriedades")

console.log(pedido.id)
console.log(pedido.cliente)
console.log(pedido.prioridade)
console.log(pedido.status)

console.log("15, modificando propriedades")

const pedido2 = {
	id: 1042,
	cliente: "clínica geral",
	prioridade: "alta",
	status: "aberto"
	}
pedido2.status = "atendimentooo"

console.log(pedido2)

//

console.log("17, array de objetos (lista de dicionários)")

const ListaPedidos = [
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

//

console.log("19, percorrendo objetos do array")

ListaPedidos.forEach(pedido => {
    console.log(`Pedido ${pedido.id} - Cliente: ${pedido.cliente}`)
})

console.log("20, desestruturação")

//const propriedadePedido = ListaPedidos[0]
//const id = propriedadePedido.id
//const cliente = propriedadePedido.cliente

console.log("20-2, outra possibilidade de desestruturação")

const {id, cliente} = ListaPedidos[0]

console.log(id)
console.log(cliente) //achei esse mais fácil

console.log("21, desestruturação em funções")

ListaPedidos.forEach(i => {
    const {
        id,
        cliente,
        status
    } = i

    console.log (`${id} - ${cliente} - ${status}`)
}
)