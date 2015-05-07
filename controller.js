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

	$scope.vote = function(post, direction){
		FirebaseService.vote(post, direction)
			.then(function(){
				getPosts()
			})
	}

	$scope.submitComment = function(post, commentForm){
		FirebaseService.comment(post, commentForm)
			.then(function(){
				getPosts();
			})
	}

	getPosts();
	
});