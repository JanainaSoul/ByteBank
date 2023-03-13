import { Cliente } from "./Cliente.js";

export class ContaCorrente extends Conta{ //herdando de conta - isso q chama de herança
    static numeroDeContas = 0;  
    constructor(cliente, agencia){ // conta corrente
        super(0, cliente, agencia); // conta poupança
        ContaCorrente.numeroDeContas += 1;

    }
}