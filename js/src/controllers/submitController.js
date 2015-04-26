App.SubmitController = Ember.Controller.extend({
  actions: {
    openGuidelines: function () {
      $(".guidelines").toggle()
    },
    openTOS: function () {
      $(".termsOfService").toggle()
    }
  }
})