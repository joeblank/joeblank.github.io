angular.module('eStore')
.controller('shopCtrl', function($scope, mainService) {

$scope.clothes = mainService.getClothes();
})
