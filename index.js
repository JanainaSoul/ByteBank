import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente ("Janaina", 11155533385); //cada new Cliente é um objeto - instaciando a classe // 
const cliente2 = new Cliente ("Alice",12255533385); // aqui  usamos o consrutor

//let numeroDeContas = 0; // essa abordagem deixa o codigo fragil, tem que ir pro construtor

const contaCorrenteJanaina = new ContaCorrente(1001, cliente1); //usa o construtor aqui
//numeroDeContas++; // essa abordagem deixa o codigo fragil, alguem pode esquecer de incluir essa linha, e assim nosso numeros de contas não estará certo , isso tem q ir la pro construtor
new ContaCorrente(1001, cliente1);
new ContaCorrente(1001, cliente1);
contaCorrenteJanaina.depositar(500);

const valorSacado = contaCorrenteJanaina.sacar(50);
const conta2 = new ContaCorrente(102, cliente2); //instaciando um novo cliente 
//numeroDeContas++; foi la pro construtor

let valor = 200; // valor primitivo - vc passa uma cópia
contaCorrenteJanaina.transferir(valor, conta2);

console.log(contaCorrenteJanaina);
console.log(conta2);

console.log(ContaCorrente.numeroDeContas); 