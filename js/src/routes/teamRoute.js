App.TeamRoute = Ember.Route.extend(App.ResetScroll, {
  model: function() {
    return this.store.findAll("volunteer")
  }
})