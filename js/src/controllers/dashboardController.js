App.DashboardController = Ember.ArrayController.extend({
  phrasesCount: Ember.computed.alias('length'),

  actions: {
    openMore: function() {
      console.log('doing its job')
    }
  }

})