class Cliente { //molde do cliente
    nome;
    cpf;
    rg;
    agencia;
    saldo;
}

const cliente1 = new Cliente (); //cada new éCleinte é um objeto - instaciando a classe 
const cliente2 = new Cliente ();


cliente1.nome = "Janaina"; //nome davariavel. atributo
cliente1.rg = 341860815;
cliente1.cpf= 11155533385;
cliente1.agencia = 1001;
cliente1.saldo = 0;



cliente2.nome = "Alice"; //nome davariavel. atributo

cliente2.cpf= 12255533385;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);
//quais informações o ByteBank precisa?

// const cliente1Nome = "Janaina";
// const cliente1CPF = 32284174841;
// const cliente1Agencia = 1001;
// const cliente1Saldo = 0;

// e isso vai se repetir imumeras vezes
//é possivel criar um molde que no js é a classe