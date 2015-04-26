App.Router.map(function() {
  this.resource("team");
  this.resource("mission");
  this.resource("expeditions");
  this.resource("projects");
  this.route("get_involved");
  this.resource("press");
  this.route("submit");
  this.route("volunteer");
  this.route("contact");
  this.resource("legal");
  this.resource("releaseForm");
  this.resource("books");
  this.resource("book", {path:"/books/:book_id"})
})