angular.module("github-api").controller("mainCtrl", function($scope, mainSrv){

	$scope.getUserData = function(){
		mainSrv.getUser($scope.searchText).then(function(response){
			$scope.user = response;
		})
	}
})