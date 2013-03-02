define(['backbone.marionette', 'views/stat', 'views/empty-list-info'], function(Marionette, StatView, EmptyView) {

	var StatsCollectionView = Marionette.CollectionView.extend({
        itemView: StatView,
        emptyView: EmptyView,
        tagName: 'ul',
        className: 'statlist'
    });

	return StatsCollectionView;
});