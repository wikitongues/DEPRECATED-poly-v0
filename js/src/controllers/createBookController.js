App.CreateBookController = Ember.ObjectController.extend({
  actions: {
    favorite: function() {
      this.toggleProperty('favorite')
    },
    moreInfo: function() {
      $(".icon.more").toggleClass("close")
      $(".moreInfo").toggleClass("open")
    },
     addPhrase: function() {
      $("p.empty").hide()
      $(".newPhrase").toggleClass("open")
      $(".entry.entering").toggle()

    }
  }
})

