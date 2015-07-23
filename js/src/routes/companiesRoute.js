App.CompaniesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll("company")
  }
});