define(['backbone'], function(Backbone) {
	"use strict";

	var Stat = Backbone.Model.extend({
		/**
		 * Add amount to value
		 */
		addToValue: function(amount) {
			this.set('value', this.get('value') + amount);
			return this;
		}
	});

	return Stat;
});