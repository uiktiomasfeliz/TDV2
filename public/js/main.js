$(document).ready(function () {
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    })
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 70
        }, 500);
        event.preventDefault();
    });

});
new WOW().init();

//ANGULAR THING!!
angular.module('app', ['pascalprecht.translate'])
.config(['$translateProvider', function($translateProvider){
  $translateProvider.translations('es_ES', translation_es);
  $translateProvider.translations('en_EN', translation_en);
  // Tell the module what language to use by default
  $translateProvider.preferredLanguage('es_ES');
}])
.controller('main', ['$scope', '$translate', function($scope, $translate) {
  $scope.setLang = function(langKey) {
    // You can change the language during runtime
    $translate.use(langKey);
  };
  $scope.getLang = function() {
    // You can change the language during runtime
    return $translate.use();
  };
}]);
