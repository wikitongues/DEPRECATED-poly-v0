var App = Ember.Application.create({
});

// Resets scroll
App.ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
    console.log("resetting scrolls")
  }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({
})
// App.store = DS.Store.create({
//   App.ApplicationAdapter = DS.RESTAdapter.create({
//     namespace: "data",
//     url: "http://localhost:5000/api/book",
//     ajax: function (url, type, hash) {
//       hash.url = url;
//       hash.type = type;
//       hash.dataType = 'jsonp';
//       hash.contentType = 'application/json; charset=utf-8';
//       hash.context = this;

//         if (hash.data && type !== 'GET') {
//             hash.data = JSON.stringify(hash.data);
//         }

//       jQuery.ajax(hash);
//     },
//   })
// });

// App.store = DS.Store.create({
//     // revision: 11,
//     adapter: DS.RESTAdapter.create({
//         namespace: "data",
//         url: "http://localhost:5000/api/book",
//         ajax: function (url, type, hash) {
//             hash.url = url;
//             hash.type = type;
//             hash.dataType = 'jsonp';
//             hash.contentType = 'application/json; charset=utf-8';
//             hash.context = this;

//             if (hash.data && type !== 'GET') {
//                 hash.data = JSON.stringify(hash.data);
//             }

//             jQuery.ajax(hash);
//         },
//     })
// });

// App.BookAdapter = DS.RESTAdapter.extend({
//   // namespace: 'api/1',
//   buildURL: function(type, id, record) {
//     var requestURL = 'http://localhost:5000/api/book'
//   },

//   ajax: function(url, method, hash) {
//     hash = hash || {};
//     hash.crossDomain = true;
//     // hash.xhrFields = {withCredentials: true};
//     return this._super(url, method, hash);
//   },

//   find: function(store, type, id, record) {
//     return this.ajax(this.buildURL(), 'GET')
//   }
// });

// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return $.getJSON('http://localhost:5000/api/book');
//   }
// });