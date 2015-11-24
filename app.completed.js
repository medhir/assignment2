var app = angular.module('directoryApp', ['ListingsFactory']);

app.controller('listingsController', function($scope, Listings) {
  $scope.listings = Listings;
  $scope.detailedInfo = undefined;

  $scope.addListing = function() {
    $scope.listings.push($scope.newListing);
    $scope.newListing = {};
  };

  $scope.deleteListing = function(index) {
    $scope.listings.splice(index, 1);
  };

  $scope.showDetails = function(index) {
    $scope.detailedInfo = $scope.listings[index];
  };
});