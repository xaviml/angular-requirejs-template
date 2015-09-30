define(['../module'], function (module) {
    'use strict';
    module.controller('userListController', [
        '$scope',
        '$state',
        'userService',
        function ($scope, $state, service) {

            //get - GET object
            //query - GET array
            //save - POST
            //delete & remove - DELETE
            $scope.users = service.query();

            $scope.order = 'email';



            $scope.edit = function (user) {
                $state.go('userdetail', {id: user.id});
            };

            $scope.delete = function (user) {
                user.$delete(
                    function () {
                        $scope.users.pop(user);
                    }
                );
            };

            $scope.create = function () {
                $state.go('userdetail',  {id: 'new'});
            }
        }
    ]);
});
