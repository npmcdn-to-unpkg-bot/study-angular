app.controller("listaTelefonicaCtrl", function($scope, $http){
  $scope.app = "Lista Telefonica";
  $scope.backendPath = "http://localhost/study-angular/rbranas/listaTelefonica/backend/";
  $scope.contatos = [];
  $scope.operadoras = [];

  var carregarContatos = function(){
    $http.get($scope.backendPath + "contatos.json").success(function(data){
      $scope.contatos = data;
    }).error(function(data, status){
      $scope.message = "Aconteceu um problema: " + data;
    });
  }
  carregarContatos();
  var carregarOperadoras = function(){
    $http.get($scope.backendPath + "operadoras.json").success(function(data){
      $scope.operadoras = data;
    });
  }
  carregarOperadoras();

  $scope.adicionarContato = function(contato){
    $scope.contatos.push(angular.copy(contato));
    $http.post($scope.backendPath + "contatos.php", contato).success(function(data){
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      //carregarContatos();
    });
  };
  $scope.apagarContato = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if(!contato.selecionado){
        return contato;
      }
    });
  };
  $scope.isContatoSelecionado = function(contatos){
    return contatos.some(function(contato){
      return contato.selecionado;
    });
  };
  $scope.ordenarPor = function(campo){
    $scope.criterioDeOrdenacao = campo
    $scope.direcaoDaOrdenacao = ! $scope.direcaoDaOrdenacao;
  };
});
