app.controller("MainController", function($scope, $http, $location, $routeParams) {
  $scope.view = {};
  $scope.searchMovies = function() {
    $http.get('http://www.omdbapi.com/?s='+$scope.view.searchText+'&type=movie&page=1&r=json').then(function(res) {
      // Cpature previous query string (sets up to clear search bar)
      $scope.view.queryString = $scope.view.searchText;
      $scope.view.searchResults = res.data;
      $scope.view.searchText = "";  
      $scope.searchForm.$setPristine();
      $routeParams.searchText = $scope.view.queryString;
      $location.path('/searchResults/'+$scope.view.queryString)
      console.log(res);
    })
  }
})

app.controller("SearchResultsController", function($rootScope, $scope, $http, $location, $routeParams) {
  $scope.displayMovie = function(id) {
    $http.get('http://www.omdbapi.com/?i='+id+'&plot=long&r=json').then(function(res) {
      console.log(res);
      $scope.view.movieToDisplay = res.data;
      $routeParams.movieID = id;
      $location.path('/displayMovie/'+$routeParams.movieID)
    })
  }
})