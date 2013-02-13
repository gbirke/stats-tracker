define(['backbone.marionette', 'hbs!templates/stat-item'], function(Marionette, statTpl) {

	var StatView = Marionette.ItemView.extend({
		template: {
	    	type: "handlebars",
	    	template: statTpl
	    },
	    tagName: 'li'
	});

	return StatView;
});