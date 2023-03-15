// classe abstrada 

export class Conta{
    constructor(saldoInicial, cliente, agencia, tipo){
    if(this.constructor == Conta){ // -> herança -isso ainda permite o desenvolvedor chamar essa classe -> classe abstrata
        throw new Error("Você não deveria instaciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata."); // classe para erros
    }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._tipo = tipo;
        
    
        }
    

    //assesores -> trazendo os assessores da conta corrente pra conta
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


//metodo abstrato
sacar(valor){ //metodo abtrato - feito para ser sobreescrito sempre

    // let taxa = 1;
    // return this._sacar(valor, taxa);

}

    _sacar(valor, taxa){
        const valorSacado = taxa * valor; // taxa da conta corrente
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }


depositar(valor){
    this._saldo += valor;           
}

tranferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
    }




}
