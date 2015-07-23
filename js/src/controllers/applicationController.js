App.HeaderNavComponent = Ember.Component.extend({
  actions: {
    toggleNavMenu: function() {
      console.log("hi")
      $("headerNav").toggleClass("open")
    }
  }
})
