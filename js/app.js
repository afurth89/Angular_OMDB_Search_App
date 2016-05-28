var app = angular.module("omdbMovieApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/searchResults', {
      templateUrl: '../partials/searchResults.html',
      controller: 'SearchResultsController'
    })
  $locationProvider.html5Mode(true);
});