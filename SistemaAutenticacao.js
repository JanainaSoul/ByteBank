/*
ser autenticavel significa ter o metodo autenticar
*/ 

export class SistemaAutenticação{
    static login(autenticavel, senha){ // objeto =funcionario pode ser tratado de varias formas
        if(SistemaAutenticação.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);  //polimorfismo - funcionario mais generico
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        
    }
}
