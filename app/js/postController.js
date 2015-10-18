angular.module('angularApp')
  .controller('PostController', PostController)

PostController.$inject = ['$http']

function PostController($http){
  var self = this;
  self.title = "Angular Posts"
  self.all = [];
  self.addPost = addPost;
  self.newPost = {};
  self.getPosts = getPosts;
  console.log(self)
  
  getPosts()
  function getPosts(){
    $http
      .get('http://localhost:3000/posts')
      .then(function(res){
        self.all = res.data.posts;
        console.log(res.data.posts)
    })
  }

  function addPost(){
    $http
      .post('http://localhost:3000/posts', self.newPost)
      .then(function(res){
        getPosts();
      });
      self.newPost = {};
  }

}
