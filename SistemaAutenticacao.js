/*
ser autenticavel significa ter o metodo autenticar

duck type é comum em linguagens fracamente tipada
*/ 

export class SistemaAutenticação{
    static login(autenticavel, senha){ // objeto =funcionario pode ser tratado de varias formas
        if(SistemaAutenticação.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);  //polimorfismo - funcionario mais generico
        }
        return false;
    }

    static ehAutenticavel(autenticavel){ //pode chamar diretamente - não precisa criar instancia
        return "autenticar" in autenticavel && //operador IN  
        autenticavel.autenticar instanceof Function        
    }
}
