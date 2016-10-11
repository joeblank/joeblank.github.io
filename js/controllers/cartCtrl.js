angular.module('eStore')
.controller('cartCtrl', function($scope, mainService, $interval) {

setInterval(function() {
  var cart = mainService.getCart();
  $scope.cartItems = cart;
}, 2000);


$interval(function(){
  $scope.cartItems = mainService.getCart();

}, 500)

$interval(function() {
  $scope.getTotal = mainService.getTotal();
}, 1000)



$scope.removeFromCart = function(obj) {
  mainService.removeFromCart(obj);
}



$(function() {
  $('.remove-item').click(function() {
    $('item-cart-container', this).hide();
  })
})

})
