angular.module('angularApp', ['ui.router'])
  .config('PostRouter');

//do i need to inject here?

function PostRouter($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider('home', {
    url: '/home',
    templateUrl: 'home.html'
  });
};