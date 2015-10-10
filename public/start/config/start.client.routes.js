angular.module('start').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'start/views/start.client.view.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);
