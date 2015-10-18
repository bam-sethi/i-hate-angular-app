angular
  .module('angularApp', ['ui.router'])
  .config(PostRouter);

//do i need to inject here?

function PostRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/posts');

  $stateProvider
    .state('post', {
      url: '/posts',
      templateUrl: 'post.html'
    })

};