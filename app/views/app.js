define(['backbone.marionette', 'hbs!templates/stat-item'], function(Marionette, statItemTpl) {
  var App = Marionette.ItemView.extend({
    template: {
    	type: "handlebars",
    	template: statItemTpl
    }
  });

  return App;
});