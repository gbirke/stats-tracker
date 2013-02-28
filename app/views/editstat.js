define(['jquery', 'backbone.marionette','hbs!templates/edit-stat'], function($, Marionette, editStatTpl) {
	"use strict";

	var EditStatView = Marionette.ItemView.extend({
		className: "action",
		template: {
	    	type: "handlebars",
	    	template: editStatTpl
	    },
	    events: {
	    	"click button": 'handleChange'
	    },
	    /**
	     * Handle click to buttons - Add button amount (positive or negative)
	     * to model value
	     */
	    handleChange: function(evt) {
	    	var amount = parseInt($(evt.target).data('add'));
	    	this.model.addToValue(amount).save();
	    }
	});

	return EditStatView;
});