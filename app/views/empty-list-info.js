define(['backbone.marionette', 'hbs!templates/empty-list-info'], function(Marionette, infoTpl) {

	var StatsCollectionView = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'info',
        template: {
	    	type: "handlebars",
	    	template: infoTpl
	    },
    });

	return StatsCollectionView;
});