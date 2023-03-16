import {Cliente} from "./Cliente.js";
//import { Conta } from "./Conta/Conta.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticação } from "./SistemaAutenticacao.js";
// import {ContaCorrente} from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario";

// const cliente1 = new Cliente("Janaina", 11122233309);

// //const contaCorrenteJanaina = new ContaCorrente( cliente1, 1001);
// ///const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// //const conta = new Conta(0, cliente1, 1001); // não faz sentido chamar a classe Conta pois ela é generica

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);


// // console.log(conta);
// console.log(contaSalario);


const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456")
const gerenteEstaLogado = SistemaAutenticação.login(diretor, "123456");//ele não espera classe especifica
const diretorEstaLogado = SistemaAutenticação.login(gerente, "123");

const clienteEstaLogado = SistemaAutenticação.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);





