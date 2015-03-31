/**
 * Created by alexpersian on 3/20/15.
 */

// public/js/services/ContactService.js

angular.module('ContactService', []).factory('Contact', ['$http', function($http) {
    return {
        // call to GET all the contacts
        get: function() {
            return $http.get('./api/contacts');
        },

        // call to POST a new contact
        create: function() {
            return $http.post('./api/contacts', contactData);
        },

        // call to DELETE a contact
        delete: function() {
            return $http.delete('./api/contacts', id);
        }
    }
}]);