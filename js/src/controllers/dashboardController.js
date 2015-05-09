App.DashboardController = Ember.ArrayController.extend({
  phrasesCount: Ember.computed.alias('length')
})