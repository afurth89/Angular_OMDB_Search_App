var app = angular.module("omdbMovieApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  $locationProvider.html5Mode(true);
});