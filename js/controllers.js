app.controller("MainController", function($scope, $http, $location) {
  $scope.view = {};
  $scope.searchMovies = function() {
    $http.get('http://www.omdbapi.com/?s='+$scope.view.searchText+'&type=movie&page=1&r=json').then(function(res) {
      $scope.view.queryString = $scope.view.searchText;
      $scope.view.searchText = "";  
      $scope.searchForm.$setPristine();
      $location.path('/searchResults')
      console.log(res);
    })
  }
})

app.controller("SearchResultsController", function($rootScope, $scope, $http) {

})