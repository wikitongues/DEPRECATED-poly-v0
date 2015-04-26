App.ContactRoute = Ember.Route.extend(App.ResetScroll, {
  actions: {
    closeModal: function() {
      $("section.success").hide()
      $("body").removeClass("modalFreeze")
    }
  }
})