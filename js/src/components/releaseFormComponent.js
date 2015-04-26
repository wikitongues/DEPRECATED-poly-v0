App.ReleaseFormsComponent = Ember.Component.extend({
  actions: {
    hideTOS: function () {
      $(".termsOfService").hide()
    }
  }
})