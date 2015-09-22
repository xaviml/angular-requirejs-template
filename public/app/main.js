require.config({

    paths: {
        'angular': '../lib/angular/angular',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router',
        'angular-bootstrap': '../lib/angular-bootstrap/ui-bootstrap',
        'angular-resource': '../lib/angular-resource/angular-resource',
        'domReady': '../lib/requirejs-domready/domReady'
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
        }
    },

    deps: [
        './bootstrap'
    ]
});
