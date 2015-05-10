var App = Ember.Application.create({
});

// Resets scroll
App.ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
    console.log("resetting scrolls")
  }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({
})