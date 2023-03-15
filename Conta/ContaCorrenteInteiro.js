import { Cliente } from "../Cliente.js";

export class ContaCorrente extends Conta{ //dentro da classe é atributo pode publico ou privado // aqui eu quero que guarde os dados da conta -agencia, cliente
    static numeroDeContas = 0; //desse jeito esse atributo so pertence a esse objeto 
    agencia;
    // _cliente; //atributo privado -> foi pro constructor
       //#saldo = 0 - https://github.com/tc39/proposal-class-fields#private-fields
    // _saldo = 0; -> foi pro constructor

    //assesores
    set cliente(novoValor) {  //atribuir, colocar um valor
        if(novoValor instanceof Cliente){ //proteger - aqui é um assessor tipo set
            this._cliente = novoValor;
        }
    } 

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo; // vc consegue proteger o atributo e so dar acesso ao que queremos
    }

    constructor(agencia, cliente){ //pode usar os assesores aqui
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;

    }

    //encapsular dentro de um metodo que pode ser repetido
    sacar(valor){ ///operação de saque do valor que deseja 
        if(this._saldo >= valor){ //this - dessa conta corrente
            this._saldo -= valor;
            return valor;
        }
    }     

        depositar(valor){
        if(valor <= 0)
        {
            return;
        }
            this._saldo += valor;  // console.log(this._saldo); // ele não fica exposto p/ ninguem mexer
        }

        transferir(valor, conta){ // receber objeto como paramentro
            conta.cidade = "São Paulo"; // adicionando um atributo na conta
            const valorSacado = this.sacar(valor); //this - dessa conta
            // conta.depositar(valorSacado); //conta é objeto altera o objeto original - não fazer!
            valor = 20; // não reflete no valor original
        }
}