require.config({

    paths: {
        'angular': '../lib/angular/angular',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router',
        'angular-bootstrap': '../lib/angular-bootstrap/ui-bootstrap',
        'angular-resource': '../lib/angular-resource/angular-resource',
        'domReady': '../lib/requirejs-domready/domReady',
        'chart': '../lib/Chart.js/Chart',
        'angular-chart': '../lib/angular-chart.js/angular-chart'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'chart': {
            exports: 'chart.js'
        },
        'angular-chart': {
            deps: ['angular', 'chart']
        }
    },

    deps: [
        './bootstrap'
    ]
});
