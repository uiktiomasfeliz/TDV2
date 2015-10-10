var mainApplicationModuleName = 'myApp';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource',
                                                                        'ngRoute',
                                                                        'pascalprecht.translate',
                                                                        'start',
                                                                        'articles'
                                                                      ]);

mainApplicationModule
.config(['$locationProvider',
                              '$translateProvider',
  function($locationProvider, $translateProvider) {
    $locationProvider.hashPrefix('!');
    //$locationProvider.html5Mode(true).hashPrefix('!');
    $translateProvider.translations('es_ES', translation_es);
    $translateProvider.translations('en_EN', translation_en);
    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('es_ES');
  }
])
.directive( 'elemReady', function( $parse ) {
   return {
       restrict: 'A',
       link: function( $scope, elem, attrs ) {
          elem.ready(function(){
            var docElem = document.documentElement,
                header = document.querySelector( '.navbar-default' ),
                didScroll = false,
                changeHeaderOn = 200;

            function init() {
                window.addEventListener( 'scroll', function( event ) {
                    if( !didScroll ) {
                        didScroll = true;
                        setTimeout( scrollPage, 250 );
                    }
                }, false );
            }

            function scrollPage() {
                var sy = scrollY();
                if ( sy >= changeHeaderOn ) {
                    classie.add( header, 'navbar-scroll' );
                }
                else {
                    classie.remove( header, 'navbar-scroll' );
                }
                didScroll = false;
            }

            function scrollY() {
                return window.pageYOffset || docElem.scrollTop;
            }

            init();
          })
       }
    }
})
;

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});
