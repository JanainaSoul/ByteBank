import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100)
    }

    // sacar(valor){ //sobreescrevendo a taxa 
    //     const taxa = 1.01;
    //     return this._sacar();
    // }

}