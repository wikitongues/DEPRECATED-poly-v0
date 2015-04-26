App.SubmitView = Ember.View.extend({
  templateName: "submit",
  name: "",
  email: "",
  link: "",
  speaker: "",
  language: "",
  videoLocation: "",
  transcription: "",
  translation: "",
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
            'subject': 'New Video:'+this.get("language"),
            'html': "Name of submitter: "+this.get("name")+
              "<br/>Email: "+this.get("email")+
              "<br/>Link to the video: "+this.get("link")+
              "<br/>Name of speaker: "+this.get("speaker")+
              "<br/>Languages spoken: "+this.get("language")+
              "<br/>Location of video: "+this.get("videoLocation")+
              "<br/>Transcription: "+this.get("transcription")+
              "<br/>Translation: "+this.get("translation")+
              "<br/>Message: "+this.get("message")+
              "<br/>Release Form: "+this.get("releaseForm")
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
