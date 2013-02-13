define(['backbone.marionette', 'hbs!templates/app'], function(Marionette, statItemTpl) {
  var App = Marionette.Layout.extend({
    template: {
    	type: "handlebars",
    	template: statItemTpl
    },
    regions: {
    	header: '#header',
    	addstat: '#addstat',
    	statlist: '#statlist'
    }
  });

  return App;
});