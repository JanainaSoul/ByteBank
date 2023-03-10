class Cliente { //molde do cliente
    nome;
    cpf;
    rg;
    
}

class ContaCorrente{
    agencia;
    #saldo = 0;

    //encapsular dentro de um metodo
    sacar(valor){ ///operação de saque do valor que deseja 
        if(this.#saldo >= valor){ //this - dessa conta corrente
            this.#saldo -= valor;
        }
    }     

        depositar(valor){
        if(valor >0){
            this.#saldo += valor;
            }
        }
}


const cliente1 = new Cliente (); //cada new Cliente é um objeto - instaciando a classe // 
cliente1.nome = "Janaina"; //nome da variavel.atributo
cliente1.rg = 341860815;
cliente1.cpf= 11155533385;

const cliente2 = new Cliente ();
cliente2.nome = "Alice"; //nome davariavel. atributo
cliente2.cpf= 12255533385;

const contaCorrenteJanaina = new ContaCorrente();
contaCorrenteJanaina.#saldo = 10000;
contaCorrenteJanaina.agencia = 1001;

contaCorrenteJanaina.depositar (100);
contaCorrenteJanaina.sacar(50);

console.log(contaCorrenteJanaina);
console.log(contaCorrenteJanaina);
console.log(contaCorrenteJanaina);
console.log(contaCorrenteJanaina);


// console.log(cliente1);
// console.log(cliente2);
//quais informações o ByteBank precisa?

// const cliente1Nome = "Janaina";
// const cliente1CPF = 32284174841;
// const cliente1Agencia = 1001;
// const cliente1Saldo = 0;

// e isso vai se repetir imumeras vezes
//é possivel criar um molde que no js é a classe
// comentario

//comentario