app.controller("MainController", function($scope, $http) {
  $scope.view = {};
  $scope.searchMovies = function() {
    $http.get('http://www.omdbapi.com/?s='+$scope.view.searchText+'&type=movie&page=1&r=json').then(function(res) {
      console.log(res);
    })
  }
})

app.controller("SearchResultsController", function($rootScope, $scope, $http) {

})