App.TeamRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("teamMember", params.teamMember_id)
  }
});