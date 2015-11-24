var app = angular.module('directoryApp', ['ListingsFactory']);

app.controller('listingsController', function($scope, Listings) {
  $scope.listings = Listings;
  $scope.detailedInfo = undefined;

  /* 
    Implement these functions in the controller to make your application function 
    as described in the assignment spec. 
   */
  $scope.addListing = function() {};
  $scope.deleteListing = function(index) {};
  $scope.showDetails = function(index) {};
});