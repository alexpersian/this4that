/**
 * Created by alexpersian on 3/16/15.
 */

// public/js/services/ThisService.js

angular.module('ThisService', [])
    .factory('This', function($http, $injector) {
        return $http.get('/api')
            .then(function() {
                return $injector.get('api');
            });
    })
    .factory('api', function($http, $injector) {
        var store = {
            posts: [],

            get: function() {
                return $http.get('/api/posts')
                    .then(function(res) {
                        angular.copy(res.data, store.posts);
                        return store.posts;
                    });
            }
        };
    });