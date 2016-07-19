app.factory("contatosAPI", function($http, config){

  var _getContatos = function(){
    return $http.get( config.baseUrl + "backend/contatos.jsonx");
  }

  var _saveContato = function(contato){
    return $http.post( config.baseUrl + "backend/contatos.php", contato);
  }

  return {
    getContatos: _getContatos,
    saveContato: _saveContato
  }

});
