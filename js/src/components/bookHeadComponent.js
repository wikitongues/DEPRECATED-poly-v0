App.bookHeadComponent = Ember.Component.extend({
  actions: {
     favorite: function() {
      // console.log("hi")
      this.sendAction(),
      console.log("hi")
    }
  }
})