App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        id: 0,
        image: "img/banner.jpg",
      }
    ];
  }
})