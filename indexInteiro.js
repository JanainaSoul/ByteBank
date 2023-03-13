import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente ("Janaina", 11155533385); //cada new Cliente é um objeto - instaciando a classe // 
//cliente1.nome = ; //nome da variavel.atributo
cliente1.rg = 341860815;
//cliente1.cpf= ;

const cliente2 = new Cliente ("Alice",12255533385); // aqui  usamos o consrutor
// cliente2.nome = ; //nome davariavel. atributo
// cliente2.cpf= ;

//cliente2.cpf = -1; vc não consegue atrinuir nada quando so tem o GET

// cliente2.cpf= -1; // não deixa acessar porque so tem o GET



const contaCorrenteJanaina = new ContaCorrente(1001, cliente1); //usa o construtor aqui
// contaCorrenteJanaina.#saldo = 10000;
//contaCorrenteJanaina.agencia = 1001;
//contaCorrenteJanaina.cliente = cliente1; // ele devolve uma referencia ao objeto criado na memória
contaCorrenteJanaina.depositar(500);

const valorSacado = contaCorrenteJanaina.sacar(50);

const conta2 = new ContaCorrente(102, cliente2); //instaciando um novo cliente 
//conta2.cliente = cliente1;  //conta2.cliente = null; // o nulo tem que ser explicito //undefined não foi colocado nada
//conta2.agencia = 102;

let valor = 200; // valor primitivo - vc passa uma cópia
contaCorrenteJanaina.transferir(valor, conta2);

//conta2.saldo = 30000;  ele não deixa







// console.log(cliente1);
// console.log(cliente2);
//quais informações o ByteBank precisa?

// const cliente1Nome = "Janaina";
// const cliente1CPF = 32284174841;
// const cliente1Agencia = 1001;
// const cliente1Saldo = 0;

// e isso vai se repetir imumeras vezes
//é possivel criar um molde que no js é a classe
// comentario

//comentario

