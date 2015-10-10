angular.module('start').controller('main', ['$scope', '$translate',
  function($scope, $translate) {
    //$scope.authentication = Authentication;

    $scope.setLang = function(langKey) {
      // You can change the language during runtime
      $translate.use(langKey);
    };
    $scope.getLang = function() {
      // You can change the language during runtime
      return $translate.use();
    };

  }
]);
