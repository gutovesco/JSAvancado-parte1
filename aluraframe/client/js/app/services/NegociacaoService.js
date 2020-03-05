class NegociacaoService{
    
    obterNegociacoesSemana(cb){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            if(xhr.status == 200) {
                cb(null, JSON.parse(xhr.responseText)
                  .map(objeto=> new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                  
            } else {
                console.log(xhr.responseText);
                cb('nao foi possivel obter negociacoes')
            }
          }
        xhr.send()
    }
}