define(['angular'], function (ng) {
    'use strict';
    var module = ng.module('app.dashboard', ['ui.router', 'chart.js', 'ui.bootstrap', 'uiGmapgoogle-maps']);

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                controller: 'dashboardController',
                templateUrl: 'app/modules/dashboard/view/DashboardView.html'
            })
    }]);

    return module;
});