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
	    	// TODO Handle onkey event and Enter key
	    	// TOOD put form in template and handle form submit (iPhone)
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
	    	this.ui.newStat.blur().val("");
	    }
	});

	return AddStatView;
});