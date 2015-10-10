var mainApplicationModuleName = 'adminApp';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource',
                                                                        'ngRoute',
                                                                        'users',
                                                                        'admin'
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
