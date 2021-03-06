require.config({
    baseUrl: 'app',
    paths: {
        'jquery': '../vendors/jquery/jquery.min',
        'underscore': '../vendors/underscore/underscore',
        'backbone': '../vendors/backbone/backbone',
        'backbone.babysitter': '../vendors/backbone.babysitter/lib/amd/backbone.babysitter',
        'backbone.localStorage': '../vendors/backbone.localStorage/backbone.localStorage-min',
        'backbone.touch': '../vendors/backbone.touch/backbone.touch',
        'backbone.wreqr': '../vendors/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.marionette': '../vendors/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.marionette.handlebars': '../vendors/backbone.marionette.handlebars/src/backbone.marionette.handlebars',
        'handlebars': '../vendors/handlebars/handlebars',
        'json2': '../vendors/require-handlebars-plugin/hbs/json2',
        'i18nprecompile': '../vendors/require-handlebars-plugin/hbs/i18nprecompile',
        'hbs': '../vendors/require-handlebars-plugin/hbs'
    },
    deps: ["backbone.marionette.handlebars", "backbone.touch"],
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.localStorage': {
            deps: ['backbone'],
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

require(['jquery', 'backbone.marionette', 'collections/stats', 'views/app', 'views/addstat', 'views/stats'], function ($, Marionette, stats, AppLayout, AddStatView, StatsView) {

    var app = new Marionette.Application();
    app.addRegions({
        mainRegion: "#main"
    });

    var layout = new AppLayout();
    app.mainRegion.show(layout);

    var addStat = new AddStatView();
    layout.addstat.show(addStat);

    var statsView = new StatsView({
        collection: stats
    });
    layout.statlist.show(statsView);
    stats.fetch();

});