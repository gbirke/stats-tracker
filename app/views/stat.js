define(['backbone.marionette', 'views/editstat', 'hbs!templates/stat-item'], function(Marionette, EditStatView, statTpl) {

	var StatView = Marionette.ItemView.extend({
		modelEvents: {
			'stat:input:duplicate': function(){
				// TODO Show change view for this element
			},
			'change:value' : 'updateValue'
		},
		template: {
	    	type: "handlebars",
	    	template: statTpl
	    },
	    tagName: 'li',
	    events: {
	    	"click .stat": "activateAction"
	    },
	    activateAction: function(evt) {
	    	if(this.isActive) {
	    		this.isActive = false;
	    		this.editView.close();
	    		this.$el.removeClass('current');
	    	}
	    	else {
	    		this.isActive = true;
	    		this.editView = new EditStatView({model: this.model});
	    		this.$el.append(this.editView.render().$el);
	    		this.$el.addClass('current');
	    	}
	    },
	    updateValue: function() {
	    	var v = this.model.get('value');
	    	this.$('.badge').text(v);
	    }
	});

	return StatView;
});