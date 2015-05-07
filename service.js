var app = angular.module('reddit');
app.service('FirebaseService', function($http, $q){

	var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

	this.getRequest = function(){
		var dfd = $q.defer()
		$http({
			method: 'GET',
			url: 'https://devmtn.firebaseio.com/posts.json'
		}).then(function(response){
			console.log(response);
			dfd.resolve(response.data);
		})
		return dfd.promise;
	};

	this.addPost= function(post){

		post.timestamp = Date.now();
  	post.comments = [];
  	post.karma = 0;
  	post.id = guid();
		
		return $http({
			method: 'PUT',
			url: 'https://devmtn.firebaseio.com/posts/' + post.id + '.json',
			data: post
		})

	};


	

});