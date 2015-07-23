App.TeamRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll("teamMember")
  }
});