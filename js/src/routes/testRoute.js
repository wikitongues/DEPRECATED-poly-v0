App.BookRoute = Ember.Route.extend({
  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
  },
  model: function() {
    return $.parseJSON($.get("http://localhost:5000/api/book"))
    console.log($.get("http://localhost:5000/api/book"))
  }
});