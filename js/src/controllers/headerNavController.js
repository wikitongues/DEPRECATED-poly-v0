App.HeaderNavController = Ember.Controller.extend({
  actions: {
    toggleNavMenu: function() {
      console.log("hi")
      $("headerNav").toggleClass("open")
    }
  }
})
