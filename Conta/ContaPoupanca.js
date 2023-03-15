import {Conta} from "./Conta/Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){// conta corrente
        super (saldoInicial, cliente, agencia); // derivando da classe mãe conta
    }

    sacar(valor){
        const taxa = 1.02; //taxa de 2%
        return this._sacar(valor, taxa);
    }


}
