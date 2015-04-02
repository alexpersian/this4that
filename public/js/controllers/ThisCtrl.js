/**
 * Created by alexpersian on 3/16/15.
 */

// public/js/controllers/ThisCtrl.js

angular.module('ThisCtrl', [])
    .controller('ThisController', function($scope, $http) {
        $scope.postEntry = [];
        $http.get('/api/posts').success(function(post) {
            $scope.postEntry = post;
        })
    });