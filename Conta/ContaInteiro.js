export class Conta{
    constructor(tipo, saldoInicial, cliente, agencia){
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

sacar(valor){

    let taxa = 1;
    // if(this._tipo == "corrente"){ -> codigo fragil
    //     taxa = 1.1;
    // }
    // if(this._tipo == "salario"){
    //     taxa = 1.05;
    // }
    // if(this._tipo == "empresarial"){
    //     taxa = 1.15;
    // }
    const valorSacado = taxa * valor; // taxa da conta corrente
    if(this._saldo >= valorSacado){
        this._saldo -= valorSacado;
        return valorSacado;
    }
}

depositar(valor){
    // if(valor <= 0) -> codigo fragil
    // {
    //     return;
    // } 
    this._saldo += valor;           
}

tranferir(valor, conta){
    if(this._tipo == "salario"){
        return;
    }
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
    
    }

}