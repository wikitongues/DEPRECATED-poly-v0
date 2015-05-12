App.DashboardController = Ember.ArrayController.extend({
  phrasesCount: Ember.computed.alias('length'),
  needs: "book",
  actions:{
    favorite: function() {
      this.toggleProperty('favorite')
    }
  }
})