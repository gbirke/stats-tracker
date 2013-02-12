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

require(['jquery', 'marionette', 'views/app'], function ($, Marionette, AppView) {

    var statList = new Marionette.Region({el:'#statlist'}),
        v = new AppView();
    statList.show(v);
});