require.config({
    baseUrl: 'app',
    paths: {
        'jquery': '../vendors/jquery/jquery.min',
        'underscore': '../vendors/underscore/underscore',
        'backbone': '../vendors/backbone/backbone'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['views/app'], function (AppView) {
    new AppView();
});