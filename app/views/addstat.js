define(['jquery', 'backbone.marionette','collections/stats', 'hbs!templates/add-stat'], function($, Marionette, stats, addStatTpl) {

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
	    	var name, dup;
	    	evt.preventDefault();
	    	name = $.trim(this.ui.newStat.val());
	    	if(!name) {
	    		return;
	    	}
	    	if(dup = stats.findByName(name)) {
	    		dup.trigger("stat:input:duplicate", dup);
	    		return;
	    	}


	    	stats.create({name: name, value: 0});
	    }
	});

	return AddStatView;
});