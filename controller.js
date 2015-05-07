var app = angular.module('reddit');
app.controller('PostsController', function($scope, FirebaseService){

	

	var getPosts = function(){
		FirebaseService.getRequest()
			.then(function(data){
				$scope.posts = data;
			})
	}

	$scope.addPost = function(){
		FirebaseService.addPost($scope.newPost)
			.then(function(){
				getPosts()
			})
	}



	getPosts();
	

});