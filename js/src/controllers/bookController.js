App.BookController = Ember.ObjectController.extend({
  actions: {
    favorite: function() {
      this.toggleProperty('favorite')
    },
    editability: function() {
      $(this).toggleClass('toggled'),
      this.toggleProperty('editing')
    },
    privacy: function() {
      $(this).toggleClass('toggled'),
      this.toggleProperty('privacy')
    },
    moreInfo: function() {
      $(".icon.more").toggleClass("close")
      $(".moreInfo").toggleClass("open")
    },
     addPhrase: function() {
      $(".newPhrase").toggleClass("open")
      $(".entry.entering").toggle()
    }
  }
})

