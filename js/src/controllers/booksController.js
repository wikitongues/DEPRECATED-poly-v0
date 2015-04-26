App.BooksController = Ember.ArrayController.extend({
  phrasesCount: Ember.computed.alias('length')
})