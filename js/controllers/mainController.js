angular.module('eStore')
.controller('mainController', function($scope, mainService) {

$scope.title = mainService.title;
$scope.shopLink = mainService.shopLink;
$scope.footerInfoLinks = mainService.footerInfoLinks;


})
