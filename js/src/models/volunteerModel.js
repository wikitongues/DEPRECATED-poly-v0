App.Volunteer = DS.Model.extend({
  name: DS.attr("string"),
  location: DS.attr("string"),
  latitude: DS.attr("number"),
  longitude: DS.attr("number"),
  photo: DS.attr("string")
})