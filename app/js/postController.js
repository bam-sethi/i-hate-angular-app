angular.module('angularApp')
  .controller('PostController', PostController)

PostController.$inject = ['$resource']

function PostController($resource){
  var self = this;
  var self.all = [];

  // this.posts =  all.query();

  

}
