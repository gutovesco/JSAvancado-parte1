class Mensagem{

    constructor(texto=''){ //o comportamento padrao de texto vai ser ''
        this._texto
    }

    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
    
}
let mensagem = new Mensagem()