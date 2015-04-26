App.VolunteerView = Ember.View.extend({
  templateName: "volunteer",
  name: "",
  email: "",
  location: "",
  other: "",
  message: "",

  actions: {
    submit: function(event) {
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'ZMiPM6bTRAzqjOaIqzn-tA',
          'message': {
            'from_email': this.get("email"),
            'to': [
                {
                  'email': 'hello@wikitongues.org',
                  'name': 'Wikitongues',
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject': 'New Volunteer:'+this.get("location"),
            'html': "Name of submitter: "+this.get("name")+
              "<br/>Email: "+this.get("email")+
              "<br/>Location of volunteer: "+this.get("location")+
              "<br/>Ambassador: "+this.get("ambassador")+
              "<br/>Social Media: "+this.get("socialMedia")+
              "<br/>Developer: "+this.get("webDev")+
              "<br/>Other: "+this.get("other")+
              "<br/>Message: "+this.get("message")
          }
        }
       }).done(function(response) {
        var status = response[0].status;
        if(status == 'sent')
          $("section.success").show();
          $("body").addClass("modalFreeze");
       });
    }
  }
})
