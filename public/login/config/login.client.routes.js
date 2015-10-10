angular.module('login').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'login/views/login.client.view.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);
