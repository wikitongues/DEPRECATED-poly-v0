App.BookController = Ember.ObjectController.extend({
  sourcePhrase:"",
  targetPhrase:"",
  actions: {
    focused: function() {
      alert('f');
    },
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
      $(".newPhrase").show().toggleClass("open")
      var a = $(".book").scrollTop()
      // b=0
      // $(".newPhrase.open .input.source").on("click", function() {
        // if(b==0) {
      $(".book .phrases .entries").append("<li class='entry'><ul><li class='source'><p><span class='progress'><span></span><span></span><span></span></span></p></li></ul></li>")
        // };
        // b=1
      // })
      $(".book").scrollTop(a+100)
      console.log("scrollTop")
    },
    saveSource: function() {
      if($(".newPhrase .input.source").val()!="") {
        $(".book .phrases .entries .entry:last-of-type ul li.source p").html($(".newPhrase .input.source").val()).parent().parent().append("<li class='target'><p><span class='progress'><span></span><span></span><span></span></span></p></li>")
        $(".newPhrase .input.source").hide()
        $(".newPhrase .input.target").show()
        $(".newPhrase .saveSource").hide()
        $(".newPhrase .saveTarget").show()
        $(".newPhrase .input.source").val("")
      }
      var a = $(".book").scrollTop()
      $(".book").scrollTop(a+100)
    },
    saveTarget: function() {
      if($(".newPhrase .input.target").val()!="") {
        $(".newPhrase .input.source").show()
        $(".newPhrase .input.target").hide()
        $(".newPhrase .saveSource").show()
        $(".newPhrase .saveTarget").hide()
        $(".newPhrase .input.target").val("")
        $(".newPhrase").toggleClass("open")

        var a = $(".book").scrollTop()
        $(".book").scrollTop(a+100)

        var phrase = this.store.createRecord('phrase',{
          sourcePhrase: this.get("sourcePhrase"),
          targetPhrase: this.get("targetPhrase"),
          book: this.get('model'),
          createdAt: new Date()
        })
        var controller = this
        phrase.save().then(function(phrase) {
          controller.set("sourcePhrase", "");
          controller.set("targetPhrase", "");
          controller.get("model.phrases").addObject(phrase)
        })
      }
      $(".book .phrases .entries .entry:last-of-type").remove()
    }
  }
})
