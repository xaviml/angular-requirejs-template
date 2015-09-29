define([
    'require',
    'angular',
    'config',
    'includes',
    'app'
], function (require, ng, config, includes, app) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });

    app.run(function($http) {
        console.log("Init the web app");
        $http.defaults.headers.common['Authorization'] = 'Basic YWRtaW46ODFkYzliZGI1MmQwNGRjMjAwMzZkYmQ4MzEzZWQwNTU=';
    });
});
