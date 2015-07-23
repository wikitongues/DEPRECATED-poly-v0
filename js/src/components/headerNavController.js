App.HeaderNavComponent = Ember.Component.extend({
  actions: {
    toggleNavMenu: function() {
      $("ul.headerNav").toggleClass("open")
    }
  }
})
