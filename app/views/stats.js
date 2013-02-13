define(['backbone.marionette', 'views/stat'], function(Marionette, StatView) {

	var StatsCollectionView = Marionette.CollectionView.extend({
        itemView: StatView,
        tagName: 'ul',
        className: 'statlist'
    });

	return StatsCollectionView;
});