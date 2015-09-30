define([
    'angular',
    'angular-ui-router',
    'angular-bootstrap',
    'angular-resource',
    'angular-chart',
    'angular-google-maps'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'ui.bootstrap',
        'ngResource',
        'chart.js',
        'uiGmapgoogle-maps',

        //modules
        'app.dashboard',
        'app.user'
    ]);
});
