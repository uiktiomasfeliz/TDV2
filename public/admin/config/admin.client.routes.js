angular.module('admin').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'admin/views/admin.client.view.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);
