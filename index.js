import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Janaina", 11122233309);

const contaCorrenteJanaina = new ContaCorrente( cliente1, 1001);
contaCorrenteJanaina.depositar(500);
contaCorrenteJanaina.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);


// console.log(contaPoupanca);
// console.log(contaCorrenteRicardo);

// contaCorrenteJanaina.teste();
console.log(contaCorrenteJanaina);
console.log(contaPoupanca);


