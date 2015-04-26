App.SubmitRoute = Ember.Route.extend(App.ResetScroll, {
  model: function() {
    return {
      title: "Thank you for submitting a video!",
      text: "We'll be sure to notify you when it goes live."
    };
  },
  actions: {
    closeModal: function() {
      $("section.success").hide()
      $("body").removeClass("modalFreeze")
    }
  }
})