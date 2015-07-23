App.Router.map(function() {
  this.resource("companies");
  this.resource("team", function() {
    this.route("teamMember", {path:":teamMember_id"})
  });
  this.resource("stream");
  this.resource("about");
  this.resource("careers");
  this.resource("contact");
})