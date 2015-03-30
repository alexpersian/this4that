/**
 * Created by alexpersian on 3/16/15.
 */

// public/js/controllers/MainCtrl.js

angular.module('MainCtrl', [])
    .controller('MainController', function($scope) {
        $scope.tagline = 'You\'ll find all kinds of cool things here. \nJust browse through the listings, and if you' +
        ' find something you like let us know. We\'ll take care of all the arrangements for you!';

        $scope.bigData = {};

        $scope.bigData.fourThis = false;
        $scope.bigData.fourThat = false;
});