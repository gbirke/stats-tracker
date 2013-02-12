define(['marionette'], function(Marionette) {
  var App = Marionette.ItemView.extend({
    template: "#statItem"
  });

  return App;
});