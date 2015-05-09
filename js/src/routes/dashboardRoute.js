App.DashboardRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('book');
  }
});