/**
 * Created by alexpersian on 3/17/15.
 */

// public/js/services/ThatService.js

angular.module('ThatService', []).factory('That', ['$http', function($http) {
    return {
        // call to GET all the geeks
        get: function() {
            return $http.get('./api/geeks');
        },

        // call to POST a new geek
        create: function() {
            return $http.post('./api/geeks', geekData);
        },

        // call to DELETE a geek
        delete: function() {
            return $http.delete('./api/geeks', id);
        }
    }
}]);