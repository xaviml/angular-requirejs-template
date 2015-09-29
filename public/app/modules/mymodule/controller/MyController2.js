define(['../module'], function (module) {
    'use strict';
    module.controller('myController2', [
        '$scope',
        'userService',
        function ($scope, service) {

            //get - GET object
            //query - GET array
            //save - POST
            //delete & remove - DELETE
            $scope.users = service.query();
        }
    ]);
});
