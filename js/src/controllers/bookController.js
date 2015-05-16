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
    },
    saveSource: function() {
      var phrase=$(".newPhrase .input").val()
      $(".entry.entering").before("<li class='entry new'><ul><li class='source'><p>"+phrase+"</p></li></ul></li>")
      $(".entry.entering ul li.source").toggle()
      $(".entry.entering ul li.target").toggle()
      $(".newPhrase .saveSource").toggle()
      $(".newPhrase .saveTarget").toggle()
    },
    saveTarget: function() {
      var phrase=$(".newPhrase .input").val()
      $(".entry.new ul li.source").append("<li class='target'><p>"+phrase+"</p></li>")
      $(".entry.entering ul li.target").toggle()
      $(".newPhrase").toggleClass("open")
      $(".entry.entering").toggle()
      $(".newPhrase .saveSource").toggle()
      $(".newPhrase .saveTarget").toggle()
    }
  }
})

