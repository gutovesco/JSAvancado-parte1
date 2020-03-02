class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
    }

    adiciona(event){
        event.preventDefault();

        let data = new Date(...this._inputData.value.split('-'). //formata o formato da data 
        map((item, indice) => { //pega o indice e cada valor do array
            if(indice == 1){ //indice 0 é o ano, 1 o mes e 2 o ano
            return item - 1; //retorna o mes -1 para ficar certo se o indice for o mes
            }
            else{
                return item
            }
        }))
    
        let negociacao = new NegociacaoController(
            data,
            this._inputQuantidade.value,
            this._inputValor.value,
        );

        console.log(negociacao);

    }
}