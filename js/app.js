var app = angular.module("omdbMovieApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/searchResults/:searchText', {
      templateUrl: '../partials/searchResults.html',
      controller: 'SearchResultsController'
    })
    .when('/displayMovie/:movieID', {
      templateUrl: '../partials/displayMovie.html'
    })
    .otherwise({redirectTo:'/'});
  $locationProvider.html5Mode(true);
});