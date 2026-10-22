console.log("JavaScript criado com sucesso!");

//demonstração de uso do let

//let quantidade = 3;
//console.log(quantidade);
//quantidade = 5;
//console.log(quantidade);

//

//demonstração de uso do const

const nomeCurso = "Desenvolvimento de Interfaces Web";
console.log(nomeCurso);

    //dando erro de propósito

const instituicao = "PUC Minas";
//instituicao = "UFMG";


    //tipos de dados (talvez ainda dentro do const)

//const nome = "Carlos";
//const idade = 24;
const aprovado = true;
const endereco = undefined;
const observacao = null;

    //descobrindo os tipos de dados

//console.log(typeof nome);
//console.log(typeof idade);
console.log(typeof aprovado);

console.log(typeof "Olá");
console.log(typeof "42");
console.log(typeof "false");

///

const nome = "Ana";
const idade = 21;

    //também pode ser escrito como
    
//const mensagem = 
    "Nome: " + nome + " | Idade: " + idade;

const mensagem2 = 
    "Nome: "+ nome + " | Idade: "+ idade;

//console.log(mensagem);
console.log(mensagem2);


    //jeito mais fácil de escrever
    // usando Template literals


    //atenção ao uso de crase
const mensagem =
    `Nome: ${nome} | Idade: ${idade}`;
console.log(mensagem);


////

//Números e operações

//const preco = 120;
//const quantidade = 3;

//const subtotal = preco * quantidade;
//console.log(preco * quantidade);
//console.log(subtotal);


const a = 10;
const b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); //resto da divisão de A por B


///Expressões

const preco = 120
const quantidade = 3;
const percentualDesconto = 10;

const subtotal = preco * quantidade;

const desconto =
    subtotal * percentualDesconto / 100;

const total = subtotal - desconto;

console.log(`Subtotal: ${subtotal}`); //parece que a crase e o $ são a formatação print(f"Valor: {variavel}) do Python
console.log(`Desconto: ${desconto}`);
console.log(`Total: ${total}`);
                                        //é isso mesmo

//Ordem de operações

const resultado1 = 10+5*2; //aqui ele faz 5*2 primeiro
const resultado2 = (10+5)*2; //aqui faz o parentese primeiro

console.log(resultado1);
console.log(resultado2);
//---



//Operadores relacionais (true/false)

const idade2 = 18;

console.log(idade > 18);
console.log(idade >= 18);
console.log(idade < 18);
console.log(idade <= 18);

///
console.log("ESPAÇO");
///


//Igualdade

const quantidade2 = 10;

console.log(quantidade2 === 10); // é o == do python, mas aqui são 3
console.log(quantidade2 !== 10); // o "diferente" do python, mas 3 caracteres tbm

console.log(quantidade2 === 10);
console.log(quantidade2 === "10"); //parece que deu falso por ser uma string

///
console.log("ESPAÇO");
///

//Operadores lógicos
// if/else versão javascript

const idade3 = 20;
const possuiIngresso = true; //atenção no true minúsculo

const podeEntrar = 
    idade3 >= 18 && possuiIngresso;
consolelog(podeEntrar);

///
console.log("ESPAÇO");
///

const ehProfessor = false;
const ehAluno = true;

const possuiAcesso =
    ehProfessor || ehAluno; // || representa OU

console.log(possuiAcesso);