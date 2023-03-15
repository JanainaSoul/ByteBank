import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Janaina", 11122233309);

//const contaCorrenteJanaina = new ContaCorrente( cliente1, 1001);
///const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
//const conta = new Conta(0, cliente1, 1001); // não faz sentido chamar a classe Conta pois ela é generica

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);


// console.log(conta);
console.log(contaSalario);



