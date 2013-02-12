require.config({
    baseUrl: 'app',
    paths: {
        'jquery': '../vendors/jquery/jquery.min',
        'underscore': '../vendors/underscore/underscore',
        'backbone': '../vendors/backbone/backbone',
        'backbone.babysitter': '../vendors/backbone.babysitter/lib/amd/backbone.babysitter',
        'backbone.wreqr': '../vendors/backbone.wreqr/lib/amd/backbone.wreqr',
        'marionette': '../vendors/backbone.marionette/lib/core/amd/backbone.marionette'
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

require(['jquery', 'views/app'], function ($, AppView) {
    var v = new AppView();
    v.render();
    $('#statlist').html(v.el);
});