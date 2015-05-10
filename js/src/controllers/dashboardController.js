App.DashboardController = Ember.ArrayController.extend({
  phrasesCount: Ember.computed.alias('length'),
  actions: {
    favorite: function() {
      this.toggleProperty('favorite'),
      console.log('hi')
    }
  }
})