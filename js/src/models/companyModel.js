App.Company = DS.Model.extend({
  name: DS.attr('string'),
  aquired: DS.attr('boolean'),
  photo: DS.attr('string'),
  photoUrl: function() {
    return "background-image:url('"+this.get("photo")+"');"
  }.property('photo'),
  location: DS.attr('string'),
  url: DS.attr('string'),
  twitter: DS.attr('string'),
  angelList: DS.attr('string')
});