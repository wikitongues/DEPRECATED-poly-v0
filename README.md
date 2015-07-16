#Wikitongues Phrasebooks, V0

##Getting Started

Requires [Grunt CLI](https://www.npmjs.com/package/grunt-cli)

To install dependencies, run:

    $ npm install && bower install


Run **back-end** from `./backend` with:

    $ python api.py

Go to [http://localhost:5000/api/book](http://localhost:5000/api/book)

Run **front-end** with:

    $ grunt

Go to [http://localhost:3000/#/dashboard](http://localhost:3000/#/dashboard)

For ease of development, be sure to use the Ember Inspector available for [Chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/).


##To Do:

####Core

* ~~Save input fields to model~~ `./js/src/controllers/bookController.js:67`
* ~~Set up server~~ `./backend/api.py`
* Consume JSON API with Ember
* Design dashboard UI
* New Book flow
* User Object
* Log In page [exists](http://localhost:3000/#/login)

####Visual

* ~~Refactor Phrase element~~
* Animate Settings toggle
* Fix New Phrase autoscroll

####New Features

* Search within book
* Edit phrase
* Phrase tags
* Secondary input (Video, audio, gender, declensions)
* Continuous input
* Cancel input on blur
* More Info review: Should have only three actions:
  * Share
  * Settings
  * ?
* Book Settings
* Kill hashbangs


##About [Wikitongues](http://www.wikitongues.org)

Wikitongues is an international non-profit organization founded to develop and maintain public access to all of the world’s 7,000 languages.

In coordination with a network of volunteers in over twenty countries and a growing community of online subscribers, we work to obtain video recordings of speakers and signers worldwide as well as other types of linguistic and cultural documentation, such as bilingual phrasebooks and oral histories.

Formed as an outlet for free expression in one’s native language, Wikitongues is intended to further language education and cultural fluency, and to combat linguistic prejudice and discrimination.

We publish videos weekly on our [YouTube](http://www.youtube.com/wikitongues/videos) channel.
