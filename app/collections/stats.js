define(['backbone','models/stat', 'backbone.localStorage'], function(Backbone, Stat) {
	"use strict";

	var Stats = Backbone.Collection.extend({
		model: Stat,
		localStorage: new Backbone.LocalStorage("stats"),
		findByName: function(name) {
			return this.find(function(s) {
				return s.get('name') == name;
			});
		}
	});

	return new Stats();
});