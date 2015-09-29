define(['angular'], function (ng) {
    'use strict';
    var module = ng.module('app.user', ['ui.router', 'ui.bootstrap']);

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('userlist', {
                url: '/user',
                controller: 'userListController',
                templateUrl: 'app/modules/user/view/UserListView.html'
            })
            .state('userdetail', {
                url: '/user/:id',
                controller: 'userDetailController',
                templateUrl: 'app/modules/user/view/UserDetailView.html'
            })
    }]);

    return module;
});