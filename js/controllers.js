app.controller("MainController", function($scope, $http, $location, $routeParams) {
  $scope.view = {};
  $scope.view.contentType = "movie";
  $scope.view.contentTypeDisplay = "Movie Title";
  $scope.setContentType = function(forURL, forDisplay) {
    $scope.view.contentType = forURL;
    $scope.view.contentTypeDisplay = forDisplay;
  }
  $scope.searchMovies = function() {
    $http.get('http://www.omdbapi.com/?s='+$scope.view.searchText+'&type='+$scope.view.contentType+'&page=1&r=json').then(function(res) {
      // Cpature previous query string (sets up to clear search bar)
      $scope.view.query = {
        text: $scope.view.searchText,
        contentType: $scope.view.contentType,
        contentTypeDisplay: $scope.view.contentTypeDisplay
      };
      $scope.view.query.searchResults = res.data;
      console.log($scope.view.query)
      $scope.view.searchText = "";  
      $scope.searchForm.$setPristine();
      $routeParams.searchText = $scope.view.query.text;
      $location.path('/searchResults/'+$routeParams.searchText)
      // console.log(res);
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

