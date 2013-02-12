require.config({
    baseUrl: 'app',
    paths: {
        'jquery': '../vendors/jquery/jquery.min',
        'underscore': '../vendors/underscore/underscore',
        'backbone': '../vendors/backbone/backbone',
        'backbone.babysitter': '../vendors/backbone.babysitter/lib/amd/backbone.babysitter',
        'backbone.wreqr': '../vendors/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.marionette': '../vendors/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.marionette.handlebars': '../vendors/backbone.marionette.handlebars/src/backbone.marionette.handlebars',
        'handlebars': '../vendors/handlebars/handlebars',
        'json2': '../vendors/require-handlebars-plugin/hbs/json2',
        'i18nprecompile': '../vendors/require-handlebars-plugin/hbs/i18nprecompile',
        'hbs': '../vendors/require-handlebars-plugin/hbs'
    },
    deps: ["backbone.marionette.handlebars"],
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    hbs: {
        disableI18n: true
    }
});

require(['jquery', 'backbone.marionette', 'views/app'], function ($, Marionette, AppView) {

    var statList = new Marionette.Region({
        el: '#statlist'
    }),
        v = new AppView();
    statList.show(v);
});