console.log('portfolio js init');

var PortfolioApp = angular.module('PortfolioApp',['ngMaterial','ngAnimate','ngRoute']);

PortfolioApp.run([function(){
  console.log('portfolio angular init');
}]);

PortfolioApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about',{
    templateUrl: '/views/about.html',
    controller: 'HomeCtrl'
  })
  .when('/projects',{
    templateUrl: '/views/projects.html',
    controller: 'HomeCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  })
}])


// BandStormApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

  // $locationProvider.html5Mode(true);