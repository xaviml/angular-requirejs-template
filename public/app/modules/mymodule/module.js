define(['angular'], function (ng) {
    'use strict';
    var module = ng.module('app.mymodule', ['ui.router', 'chart.js']);

    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('myview1', {
                url: '/mymodule/view1',
                controller: 'myController',
                templateUrl: 'app/modules/mymodule/view/MyView.html'
            })
            .state('myview2', {
                url: '/mymodule/view2',
                controller: 'myController2',
                templateUrl: 'app/modules/mymodule/view/MyView2.html'
            })
    }]);

    return module;
});