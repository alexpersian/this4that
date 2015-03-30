/**
 * Created by alexpersian on 3/16/15.
 */

// public/js/appRoutes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        // nerds page that uses NerdController
        .when('/this', {
            templateUrl: 'views/this.html',
            controller: 'ThisController'
        })
        // geek page that uses GeekController
        .when('/that', {
            templateUrl: 'views/that.html',
            controller: 'ThatController'
        })
        // contact page that uses ContactController
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        hashPrefix: '!'
    });
}]);