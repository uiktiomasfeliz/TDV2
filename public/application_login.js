var mainApplicationModuleName = 'logApp';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource',
                                                                        'ngRoute',
                                                                        'users',
                                                                        'login'
                                                                      ]);

mainApplicationModule.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
    //$locationProvider.html5Mode(true).hashPrefix('!');
  }
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});
