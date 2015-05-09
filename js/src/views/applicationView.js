App.ApplicationView = Ember.View.extend({
  didInsertElement: function() {
    $(window).load(
      $(".container").css('min-height',($('html').innerHeight())-$('nav').innerHeight()-$('footer').innerHeight())
    )
    $(window).resize(function(){
      $(".container").css('min-height',($('html').innerHeight())-$('nav').innerHeight()-$('footer').innerHeight())
    });
  }
});

