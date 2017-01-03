angular.module('app')
.controller('mainController', function ($http, $scope, factor){
	$http.get('https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=7c58249a3e8b493b875769760401f417')
		.success(function(result){
			$scope.results = result.results;
		})
	$scope.factor=factor;
});