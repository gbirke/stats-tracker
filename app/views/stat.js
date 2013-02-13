define(['backbone.marionette', 'hbs!templates/stat-item'], function(Marionette, statTpl) {

	var StatView = Marionette.ItemView.extend({
		modelEvents: {
			'stat:input:duplicate': function(){
				// TODO Show change view for this element
			}
		},
		template: {
	    	type: "handlebars",
	    	template: statTpl
	    },
	    tagName: 'li'
	});

	return StatView;
});