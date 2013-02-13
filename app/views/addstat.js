define(['backbone.marionette','collections/stats', 'hbs!templates/add-stat'], function(Marionette, stats, addStatTpl) {

	var AddStatView = Marionette.ItemView.extend({
		template: {
	    	type: "handlebars",
	    	template: addStatTpl
	    },
	    ui: {
	    	newStat: '#newStat'
	    },
	    events: {
	    	'click #addstat': 'addstat'
	    },
	    addstat: function(evt) {
	    	console.log(evt, this);
	    	evt.preventDefault();
	    }
	});

	return AddStatView;
});