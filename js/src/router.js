App.Router.map(function() {
  this.resource("login");
  this.resource("profile");
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
  this.resource("dashboard");
  this.resource("book", {path:"/dashboard/:book_id"});
  this.route("create_book");
})