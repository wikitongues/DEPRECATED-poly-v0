App.TeamMember = DS.Model.extend({
  name: DS.attr('string'),
  director: DS.attr('boolean'),
  title: DS.attr('string'),
  photo: DS.attr('string'),
  text: DS.attr('string'),
  twitter: DS.attr('string'),
  linkedIn: DS.attr('string')
});