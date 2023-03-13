export class ContaCorrente{ //dentro da classe é atributo pode publico ou privado
    agencia;
    cliente;


    //#saldo = 0 - https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;


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