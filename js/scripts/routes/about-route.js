App.AboutRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        id: 0,
        image: "img/earth-01.jpg",
        text: "Our World"
      }
    ];
  }
});