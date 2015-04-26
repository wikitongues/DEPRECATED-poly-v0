App.VolunteerController = Ember.Controller.extend({
  actions: {
    openGuidelines: function () {
      $(".guidelines").toggle()
    }
  }
})