define(['jquery', 'backbone.marionette','collections/stats', 'hbs!templates/add-stat'], function($, Marionette, stats, addStatTpl) {

	/**
	 * View "add stat" form
	 */
	var AddStatView = Marionette.ItemView.extend({
		template: {
	    	type: "handlebars",
	    	template: addStatTpl
	    },
	    ui: {
	    	newStat: '#newStat'
	    },
	    events: {
	    	// TOOD check if form submit works with iOS keyboard
	    	'submit': 'addstat',
	    	'click #addstat-submit': 'addstat'
	    },
	    addstat: function(evt) {
	    	var name, dup, stat;
	    	evt.preventDefault();
	    	name = $.trim(this.ui.newStat.val());
	    	if(!name) {
	    		return;
	    	}
	    	if(dup = stats.findByName(name)) {
	    		dup.trigger("stat:input:duplicate", dup);
	    		return;
	    	}

	    	stat = stats.create({name: name, value: 0});
	    	this.ui.newStat.blur().val("");
	    	stat.trigger("stat:added");
	    }
	});

	return AddStatView;
});