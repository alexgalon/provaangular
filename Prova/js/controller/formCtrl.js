//Dando um nome para o meu controller
myApp.controller('FormCtrl', function( $scope ){

	$scope.indexCadastro = 0;
	$scope.clicouEditar  = false;
	$scope.showTabela    = false;
 	
 	$scope.list = [];

 	//funcao para cadastrar uma novo cadastro
 	$scope.adicionarCadastro = function( nome, email, fone ){
 		if (nome) {
 			$scope.list.push({
 			nomeCad  : nome,
	 		emailCad : email,
	 		foneCad  : fone
 			}); 		
 		}

 		$scope.showTabela = ($scope.list.length);

 		$scope.cancelarEditar();
 	};

 	//funcao para editar uma tarefa
 	$scope.editarCadastro = function( dataIndex ){
 		$scope.indexTarefa = dataIndex;
 		$scope.nome  = $scope.list[dataIndex].nomeCad;
 		$scope.email = $scope.list[dataIndex].emailCad;
		$scope.fone  = $scope.list[dataIndex].foneCad;

 		$scope.clicouEditar=true;
 	};

 	//funcao para o botao renomear
	$scope.renomearCadastro = function( novoNome, novoEmail, novoFone){
		var editObj = {};//objeto com o valor inicial vazio

		editObj = {
			'nomeCad' : novoNome,
			'emailCad': novoEmail,
			'foneCad' : novoFone
		}

		$scope.list[$scope.indexCadastro] = editObj;

		$scope.cancelarEditar();
 	}; 	

	//funcao para o remover a tarefa
	$scope.removerCadastro = function( remove ){
		$scope.list.splice(remove, 1);

		$scope.showTabela = ($scope.list.length);
	}; 	


 	//funcao para editar uma tarefa
	$scope.cancelarEditar = function( ){
 		$scope.nome  = undefined;
 		$scope.email = undefined;
		$scope.fone  = undefined;

 		$scope.clicouEditar = false;
 	};

  });