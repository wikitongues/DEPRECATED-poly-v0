App.Phrase = DS.Model.extend({
  book: DS.belongsTo("book"),
  sourcePhrase: DS.attr("string"),
  sourceAudio: DS.attr("string"),
  sourceVideo: DS.attr("string"),
  targetPhrase: DS.attr("string"),
  targetAudio: DS.attr("string"),
  targetVideo: DS.attr("string")
})