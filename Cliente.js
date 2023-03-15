export class Cliente { //molde do cliente // aqui eu quero que guarde na memoria o nome,cpf e rg do cliente
    // nome;
    // _cpf; //como o CPF não muda podemos deixar ele privado e faremos um get
    // rg;
    

    get cpf(){
        return this._cpf; //somente para consulta sem o return ele retorna undefined, com o return vc acessa
    }

    constructor(nome,cpf, senha){ //construtores
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;

    }

    
}