define([
    'angular',
    'angular-ui-router',
    'angular-bootstrap',
    'angular-resource',
    'angular-chart'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'ui.bootstrap',
        'ngResource',
        'chart.js',

        //modules
        'app.dashboard',
        'app.user'
    ]);
});
