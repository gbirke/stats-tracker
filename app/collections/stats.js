define(['bootstrap','models/stat'], function(Bootstrap, Stat) {
	"use strict";

	var Stats = Bootstrap.Collection.extend({
		model: Stat
	});

	return new Stats();
});