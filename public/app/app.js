define([
    'angular',
    'angular-ui-router',
    'angular-bootstrap',
    'angular-resource'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'ui.bootstrap',
        'ngResource',

        //modules
        'app.mymodule'
    ]);
});
