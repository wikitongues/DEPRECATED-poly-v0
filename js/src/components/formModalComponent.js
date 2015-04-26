App.FormModalComponent = Ember.Component.extend({
  actions: {
    closeModal: function() {
      $("section.success").hide()
    }
  }
})