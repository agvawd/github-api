angular.module("github-api").service("mainSrv", function($http, $q, env){

	var param = "?client_id=" + env.id + "&client_secret=" + env.sec;

	this.getUser = function(username){
		var deferred = $q.defer();
		$http({
			method: "GET",
			url: 'https://api.github.com/users/' + username + param
		}).then(function(response){
			console.log(response);
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}
})