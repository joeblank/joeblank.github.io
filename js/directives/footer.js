angular.module('eStore')
.directive('footerDir', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/footer.html',
    controller: function($scope, $timeout) {
      $scope.hiddenEmail = false;
      $scope.showEmailMsg = function() {
        $scope.hiddenEmail = $scope.hiddenEmail ? false: true;
      }

      // $scope.closeEmail = function() {
      //   $(function() {
      //     $('.close-email').click(function() {
      //       $('.hidden-email-message').hide();
      //       $scope.emailAddress = '';
      //     });
      //   })
      // }

      $scope.fadeOutMessage = function() {
        $timeout(function () {
          $(function() {
            $('.hidden-email-message').fadeOut('slow');
          })
        }, 3000);
      }
    }
  }
})
