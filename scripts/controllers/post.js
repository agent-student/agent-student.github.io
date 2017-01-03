angular.module('app')
.controller('newPost', function ($scope, factor){
	$scope.save = function(title, descr, rev, rating, pick, writenBy, link) {
  	$scope.data = {};
  	$scope.data.push ({
		title: title,
		descr:descr,
		rev:rev,
		rating:rating,
		pick:pick,
		writenBy:writenBy,
		link:link
	});
		angular.copy(post.data[0], factor.inf);
	}
});