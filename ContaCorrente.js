// import { Cliente } from "./Cliente.js"; -> pode tirar qdo não for usado, ele fica ate mais escuro
import { Conta} from "./Conta.js";

export class ContaCorrente extends Conta{ //herdando de conta - isso q chama de herança
    static numeroDeContas = 0;  
    constructor(cliente, agencia){ // conta corrente
        super(0, cliente, agencia); // conta poupança
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar
        sacar(valor) {
            let taxa = 1.1;
            return this._sacar(valor, taxa);
    }


}
