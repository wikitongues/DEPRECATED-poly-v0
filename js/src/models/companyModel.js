App.Company = DS.Model.extend({
  name: DS.attr('string'),
  aquired: DS.attr('boolean'),
  photo: DS.attr('string'),
  location: DS.attr('string'),
  url: DS.attr('string'),
  twitter: DS.attr('string'),
  angelList: DS.attr('string')
});