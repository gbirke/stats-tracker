define(['backbone','models/stat'], function(Backbone, Stat) {
	"use strict";

	var Stats = Backbone.Collection.extend({
		model: Stat
	});

	return new Stats();
});