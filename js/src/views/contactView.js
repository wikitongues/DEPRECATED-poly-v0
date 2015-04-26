App.ContactView = Ember.View.extend({
  templateName: "contact",
  name: "",
  email: "",
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
            'subject': 'New Message: '+this.get("message"),
            'html': "Name of submitter: "+this.get("name")+
              "<br/>Email: "+this.get("email")+
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
