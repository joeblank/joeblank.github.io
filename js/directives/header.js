angular.module('eStore')
    .directive('headerDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'views/header.html',

            controller: function($scope, mainService, $interval) {
                $scope.cartCount = 0;

                $scope.something = function() {
                    var cart = mainService.itemsInCart();
                    $scope.cartCount = (cart);
                }


                $scope.getBrands = mainService.getBrands();

                $scope.departments = mainService.getDepartments();

                $scope.departmentsDiv = false;
                $scope.showDepartments = function() {
                    $scope.departmentsDiv = $scope.departmentsDiv ? false : true;
                }

                $scope.brandDiv = false;
                $scope.showBrands = function() {
                    // $scope.brandDiv = $scope.brandDiv ? false : true;
                    if (!$scope.brandDiv) {
                      $scope.brandDiv = true;
                    } else {
                      $scope.brandDiv = false;

                    }
                }

                // $(function() {
                //   $('.clock').click(function() {
                //     $('.clock').css({'animation': 'spin 1s'}, function() {
                //       $('.clock').css()
                //     })
                //   })
                // })


                $(function() {
                  $('.link-container').hover(function() {
                    $(this).css({'text-decoration': 'underline'})
                  })
                })

                $(function() {
                  $('.link-container').mouseout(function() {
                    $(this).css({'text-decoration': 'none'})
                  })
                })

                $(function() {
                  $('.brands').hover(function() {
                    $(this).css({'text-decoration': 'underline'})
                  })
                })

                $(function() {
                  $('.brands').mouseout(function() {
                    $(this).css({'text-decoration': 'none'})
                  })
                })

                $interval(function() {
                    $scope.something();
                    console.log($scope.cartCount);
                }, 1000);
            },
            link: function(scope, element, attr) {

            }
        }


    })
