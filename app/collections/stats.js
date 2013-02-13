define(['backbone','models/stat', 'backbone.localStorage'], function(Backbone, Stat) {
	"use strict";

	var Stats = Backbone.Collection.extend({
		model: Stat,
		localStorage: new Backbone.LocalStorage("stats")
	});

	return new Stats();
});