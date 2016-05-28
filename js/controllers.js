app.controller("MainController", function($scope, $http, $location) {
  $scope.view = {};
  $scope.searchMovies = function() {
    $http.get('http://www.omdbapi.com/?s='+$scope.view.searchText+'&type=movie&page=1&r=json').then(function(res) {
      // Cpature previous query string (sets up to clear search bar)
      $scope.view.queryString = $scope.view.searchText;
      $scope.view.searchResults = res.data;
      $scope.view.searchText = "";  
      $scope.searchForm.$setPristine();
      $location.path('/searchResults')
      console.log(res);
    })
  }
})

app.controller("SearchResultsController", function($rootScope, $scope, $http) {

})