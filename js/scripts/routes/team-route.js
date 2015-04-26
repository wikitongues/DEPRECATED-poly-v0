App.TeamRoute = Ember.Route.extend(App.ResetScroll, {
  model: function() {
    return this.store.findAll("volunteer")
  }
});

App.Volunteer = DS.Model.extend({
  name: DS.attr("string"),
  location: DS.attr("string"),
  coordinates: DS.attr("number"),
  photo: DS.attr("string")
});
