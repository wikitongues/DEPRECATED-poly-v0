Ember.TEMPLATES["node_modules/ember-template-compiler/tests/file-system/app/foo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      <img src=\"img/logos/horizontalLockup.svg\" alt=\"Wikitongues\">\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("About");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Get Involved");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Team");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Legal");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("Submit a video");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("Volunteer");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

function program19(depth0,data) {
  
  
  data.buffer.push("© 2014 Wikitongues, Inc., All Rights Reserved");
  }

  data.buffer.push("<nav>\n  <div class=\"logo\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <ul class=\"top-nav\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mission", options) : helperMissing.call(depth0, "link-to", "mission", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    \n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "get_involved", options) : helperMissing.call(depth0, "link-to", "get_involved", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <li class=\"donate\">\n      <a href=\"https://www.fracturedatlas.org/site/fiscal/profile?id=11735\" target=\"_blank\">Donate</a>\n    </li>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<footer>\n  <div class=\"content-wrapper\">\n    <div class=\"links\">\n        <ul>\n            <li class=\"header\">Organization</li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mission", options) : helperMissing.call(depth0, "link-to", "mission", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "team", options) : helperMissing.call(depth0, "link-to", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            \n            \n            \n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "legal", options) : helperMissing.call(depth0, "link-to", "legal", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n        <ul>\n            <li class=\"header\">Get involved</li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "submit", options) : helperMissing.call(depth0, "link-to", "submit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteer", options) : helperMissing.call(depth0, "link-to", "volunteer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n        <ul>\n            <li class=\"header\">Follow us</li>\n            <li class=\"footerLink\"><a target=\"_blank\" href=\"https://youtube.com/user/WikiTongues\">Youtube</a></li>\n            <li class=\"footerLink\"><a target=\"_blank\" href=\"https://www.facebook.com/wikitongues\">Facebook</a></li>\n            <li class=\"footerLink\"><a target=\"_blank\" href=\"https://twitter.com/wikitongues\">Twitter</a></li>\n            <li class=\"footerLink\"><a target=\"_blank\" href=\"http://wikitongues.tumblr.com/\">Tumblr</a></li>\n            <li class=\"footerLink\"><a target=\"_blank\" href=\"http://instagram.com/wikitongues\">Instragram</a></li>\n        </ul>\n    </div>\n     <ul class=\"copyright\">\n      <li>\n        <img src=\"img/logos/horizontalLockupWhite.svg\" class=\"icon\" alt=\"\">\n      </li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n        <a href=\"https://www.fracturedatlas.org\" class=\"footerLink\" target=\"_blank\">Fiscal Sponsorship by Fractured Atlas</a>\n      </li>\n    </ul>\n  </div>\n</footer>");
  return buffer;
  
});

Ember.TEMPLATES["book"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Back");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <li class=\"entry\">\n            <ul>\n              <li class=\"source\">\n                <p>");
  stack1 = helpers._triageMustache.call(depth0, "sourcePhrase", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                <div class=\"options-wrapper\">\n                  <div class=\"options\">\n                    <a href=\"\">\n                      <img src=\"img/poly/sound.svg\" alt=\"\">\n                    </a>\n                    \n                  </div>\n                </div>\n              </li>\n              <li class=\"target\">\n                <p>");
  stack1 = helpers._triageMustache.call(depth0, "targetPhrase", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                <div class=\"options-wrapper\">\n                  <div class=\"options\">\n                    <a href=\"\">\n                      <img src=\"img/poly/sound.svg\" alt=\"\">\n                    </a>\n                    \n                  </div>\n                </div>\n              </li>\n            </ul>\n          </li>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n          <p class=\"empty\">Shoot! There is nothing here!</p>\n        ");
  }

  data.buffer.push("<section class=\"page poly\">\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a"),
    'class': ("back")
  },hashTypes:{'tagName': "STRING",'class': "STRING"},hashContexts:{'tagName': depth0,'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "books", options) : helperMissing.call(depth0, "link-to", "books", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <section class=\"app\">\n    <nav class=\"top-navigation\">\n      <a title=\"Save\"></a>\n      <p>");
  stack1 = helpers._triageMustache.call(depth0, "phraseCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      <div class=\"rightSubNav\">\n        <a title=\"More\"></a>\n        <a title=\"Settings\"></a>\n        <div class=\"moreNavItems\">\n          <a title=\"Share\"></a>\n          <a title=\"Embed\"></a>\n          <a title=\"Location\"></a>\n        </div>\n      </div>\n    </nav>\n    <section class=\"banner\">\n      <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("bannerUrl"),
    'alt': ("User")
  },hashTypes:{'src': "STRING",'alt': "STRING"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"fallback\">\n    </section>\n    <nav class=\"language-navigation\">\n      <h1 class=\"source\"><a>");
  stack1 = helpers._triageMustache.call(depth0, "sourceName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></h1>\n      <a class=\"direction\">></a>\n      <h1 class=\"target\"><a>");
  stack1 = helpers._triageMustache.call(depth0, "targetName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></h1>\n    </nav>\n    <section class=\"phrases\">\n      <ul class=\"entries\">\n        ");
  stack1 = helpers.each.call(depth0, "phrases", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n      <button><a>+</a></button>\n    </section>\n  </section>\n</section>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["books"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <section class=\"app\">\n        <section class=\"presentation\">\n          <h2 ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("title")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n          <p class=\"number\">");
  stack1 = helpers._triageMustache.call(depth0, "phrasesCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        </section>\n        <section class=\"banner\">\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("a")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "book", "", options) : helperMissing.call(depth0, "link-to", "book", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </section>\n\n        <nav class=\"language-navigation\">\n          <h1 class=\"source\"><a href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "sourceName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></h1>\n          <a href=\"#\" class=\"direction\">></a>\n          <h1 class=\"target\"><a href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "targetName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></h1>\n        </nav>\n      </section>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("bannerUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/>\n          ");
  return buffer;
  }

  data.buffer.push("<section class=\"books\">\n  <div class=\"appContainer\">\n    <p>People you follow</p>\n    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/about-subheader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Mission");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Team");
  }

  data.buffer.push("<section class=\"subheader\">\n  <ul>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'className': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'className': "STRING",'tagName': "STRING"},hashContexts:{'className': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mission", options) : helperMissing.call(depth0, "link-to", "mission", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "team", options) : helperMissing.call(depth0, "link-to", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n  </ul>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["components/form-modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"success\">\n    <div class=\"modal\">\n      <h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n      <p>");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Okay!</button>\n    </div>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["components/get-involved-email"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<p class=\"alt-email\">Alternatively, you can always reach us at <a href=\"mailto:hello@wikitongues.org\">hello@wikitongues.org</a></p>");
  
});

Ember.TEMPLATES["components/get-involved-subheader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Submit  a video");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Volunteer");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<section class=\"subheader\">\n  <ul>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "submit", options) : helperMissing.call(depth0, "link-to", "submit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteer", options) : helperMissing.call(depth0, "link-to", "volunteer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["components/google-maps"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"map-canvas\"></div>");
  
});

Ember.TEMPLATES["components/release-forms"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"termsOfService\">\n  <div class=\"page\">\n    <h1>Release Form</h1>\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideTOS", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Close</button>\n    <p>For good and valuable consideration I acknowledge as received, and by checking this release I grant as follows:</p>\n    <ol>\n      <li>I irrevocably grant to Wikitongues and its licensees, successors, and assigns the right to license and use the digital video taken of me on the date of recording, including my voice, picture, portrait or likeness as captured in a still image (the “footage”) in any and all media and for any use whatsoever (except illegal or pornographic), including without limitation, Wikitongues, art, stock, advertising, trade and promotion, in perpetuity. If I should receive a copy of the footage, I shall only use it for my own personal use and I shall not authorize anyone else to use it. I agree and acknowledge I have no commercial monetary rights to the footage and that Wikitonguesl owns all rights to the footage, including the right to copyright the footage.</li>\n      <li>I agree that no use of this footage need be submitted to me for any further approval and that Wikitongues shall be without liability to me for any distortion or illusionary effect or adverse result to me on account of the publication, distribution or broadcast of the footage. I agree that the footage may be combined with other material and may be cropped, altered or modified. I consent to the use of my name or a fictitious name in association with this footage.</li>\n      <li>I understand that my personal information will not be made publicly available but may be used as required or necessary directly in relation to the licensing of the footage and may be retained as long as necessary to fulfill this purpose, including being transferred to countries with differing data protection and privacy laws where it may be stored, accessed and used.</li>\n      <li>I release, discharge and agree to hold harmless Wikitongues and its licensees, successors, and assigns from any liability arising out of or in connection with the use of the content, including any and all claims for defamation, libel or slander and or invasion of privacy or publicity.</li>\n      <li>I hereby warrant that I am of full age and have every right to contract in my own name in the above regard.  I state further that I have read the above authorization, release and agreement, prior to its execution, and that I am fully familiar with the contents thereof. This agreement shall be binding upon me, my heirs, successors, and assigns.</li>\n      <li>I agree that this release is irrevocable, worldwide and perpetual and will be governed by the laws of the State of New York and the United States of America.</li>\n    </ol>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});

Ember.TEMPLATES["components/submit-guidelines"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"guidelines\">\n  <section class=\"page\">\n    <h1>Video Guidelines</h1>\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideGuidelines", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Close</button>\n    <p>Wikitongues accepts videos from people all over the world. In order to provide content that is consistent, please read below for a description of what we look for.</p>\n    <ul>\n        <li>\n            <h4>Subject</h4>\n            <p>You. Talk about yourself — your language, country, or culture; your family, passions or home. Be yourself! Speak formally or informally, in the accent you’re most comfortable. Be comfortable! Keep in mind that first and foremost, you’re speaking for yourself.</p>\n        </li>\n        <li>\n            <h4>Style</h4>\n            <p>Look directly at the camera while you speak and frame your portrait intimately, from the shoulders up, or closer. Viewers should feel like you’re talking to them directly.</p>\n        </li>\n        <li>\n            <h4>Format</h4>\n            <p>Wikitongues accepts videos of any level of technical quality. If you have access to a webcam or a smartphone, great! If you have access to professional audiovisual equipment, even better. For comparative production quality guidelines, see the table below.</p>\n        </li>\n        <li>\n            <table>\n                <tr>\n                    <td class=\"label\">Technical Quality</td>\n                    <td class=\"label\">Video</td>\n                    <td class=\"label\">Audio</td>\n                    <td class=\"label\">File Format</td>\n                </tr>\n                <tr>\n                    <td class=\"label\">1st Tier</td>\n                    <td>DSLR Camera</td>\n                    <td>Field recorder, preferably with lav mic and windscreen</td>\n                    <td>H.264</td>\n                </tr>\n                <tr>\n                    <td class=\"label\">2nd Tier</td>\n                    <td>Tablet or smartphone camera</td>\n                    <td>iTalk for iOS, Audio Recorder for Android, or comparable app</td>\n                    <td>H.264 or MPEG-4</td>\n                </tr>\n                <tr>\n                    <td class=\"label\">3rd Tier</td>\n                    <td>Webcam</td>\n                    <td>Native audio</td>\n                    <td>MPEG-4, .mov, et. al</td>\n                </tr>\n            </table>\n        </li>\n    </ul>\n  </section>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/volunteer-guidelines"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"guidelines\">\n  <section class=\"page\">\n      <h1>Volunteering Guidelines</h1>\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideGuidelines", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Close</button>\n      <p>As a volunteer for Wikitongues, there are many ways to be involved.</p>\n      <ol>\n        <li>\n          Becoming an ambassador\n          <p>Ambassadors are members of our community who act as cultural representatives to their home and wherever else they may travel. They have authority to pursue partnerships with like-minded organizations and bring in new volunteers, and they have the responsibility to record as many languages videos as they can.</p>\n        </li>\n        <li>\n          Joining the social media team\n          <p>The social media team works to give our videos maximum visibility across our social networks. They also produce original content such as long-form articles for our <a href=\"http://wikitongues.tumblr.com/\">blog</a> and share any and all inspiring linguistic and cultural content from across the web.</p>\n        </li>\n        <li>\n          Joining our web dev team\n          <p>Though our outlet is currently social media, we are working on new and better ways to show you every language in the world, and also to make it easier for anyone to contribute. If you have experience in UX/UI or development, we could use your help in the completion of a web and mobile app, slated for release in 2015.</p>\n        </li>\n      </ol>\n  </section>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  stack1 = helpers._triageMustache.call(depth0, "get-involved-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page form\">\n  <form action=\"\" class=\"contact-form\">\n    <h1>Contact</h1>\n    <p>We're always eager to hear from you!</p>\n    <ul>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'title': ("Name"),
    'required': ("true"),
    'value': ("view.name"),
    'placeholder': ("Name (Required)")
  },hashTypes:{'title': "STRING",'required': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'title': depth0,'required': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'title': ("Email"),
    'required': ("true"),
    'type': ("email"),
    'value': ("view.email"),
    'placeholder': ("Email (Required)")
  },hashTypes:{'title': "STRING",'required': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'title': depth0,'required': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n    </ul>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'title': ("Message"),
    'value': ("view.message"),
    'placeholder': ("Message (optional)")
  },hashTypes:{'title': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'title': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n    <button class=\"submit\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Send</button>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "get-involved-email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </form>\n</section>\n\n<section class=\"success\">\n    <div class=\"modal\">\n      <h1>Thank you for your message!</h1>\n      <p>We're glad you reached out.</p>\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Okay!</button>\n    </div>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["expeditions"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"page\">\n    <h1>expeditions</h1>\n</section>\n");
  
});

Ember.TEMPLATES["get_involved"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Submit a video");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Volunteer");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<section class=\"banner getInvolved\"></section>\n<section class=\"page getInvolved\">\n    <h1>Get involved</h1>\n    <p>Wikitongues wouldn't be anywhere without our community of volunteers. If you believe in what we're doing, there are plenty of ways to get involved.</p>\n    <ul class=\"activities\">\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("button")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "submit", options) : helperMissing.call(depth0, "link-to", "submit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("button")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteer", options) : helperMissing.call(depth0, "link-to", "volunteer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("button")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n    </ul>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Submit a video");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Become a volunteer");
  }

  data.buffer.push("<section class=\"banner index\"></section>\n<section class=\"page index\">\n    <div class=\"information\">\n        <h1>Every language in the world</h1>\n        <a class=\"youTubeLink\" href=\"https://www.youtube.com/user/WikiTongues\" target=\"_blank\">\n            <img src=\"img/youTubeLink.png\" alt=\"\">\n            <div class=\"triangle\"></div>\n            <p>Join us on YouTube</p>\n        </a>\n        <br>\n        <p>Wikitongues is a global effort to record and provide access to every language in the world. We’re a network of volunteers on every continent who work to bring you new language videos every week, driven by a commitment to the value of diversity. Be a part of our movement.</p>\n        <ul class=\"activities\">\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("button")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "submit", options) : helperMissing.call(depth0, "link-to", "submit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("button")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteer", options) : helperMissing.call(depth0, "link-to", "volunteer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n          <li>\n            <a href=\"https://www.fracturedatlas.org/site/fiscal/profile?id=11735\" target=\"_blank\">Support us</a>\n          </li>\n        </ul>\n    </div>\n  </section>");
  return buffer;
  
});

Ember.TEMPLATES["legal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"page legal\">\n  <h1>Legal</h1>\n  <div class=\"term\">\n    <h2>Terms of Service</h2>\n    <p>By submitting a video to Wikitongues, you hereby agree:</p>\n    <ol>\n      <li><p>to have secured the consent of the individual or individuals who appear in that video to record them,</p></li>\n      <li><p>that you either possess or have obtained the legal rights to share this video online, and </p></li>\n      <li><p>that you irrevocably grant Wikitongues and its licensees, successors and assigns the right to license and distribute and use the video of you, including your voice, picture, portrait or likeness as captured in a still image from the footage, in any and all media and for any use whatsoever (except illegal or pornographic), including without limitation, Wikitongues, art, stock, advertising, trade and promotion, in perpetuity.</p></li>\n    </ol>\n    <p>If you should receive a copy of the footage, you shall only use it for your own personal use and you shall not authorize anyone else to use it.</p>\n    <p>You agree and acknowledge that you have no commercial monetary rights to the footage and that Wikitongues owns all rights to the footage, including the right to copyright the footage.</p>\n    </div>\n    <div class=\"term\">\n      <h2>Privacy Policy</h2>\n      <p>Wikitongues will never give or sell your personal information to any third-party organization or individual without your explicit consent.</p>\n    </div>\n</section>");
  
});

Ember.TEMPLATES["mission"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("get involved");
  }

  data.buffer.push("<section class=\"banner mission\">\n  <p class=\"credit\">Cristina Panicali</p>\n</section>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "about-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page mission\">\n  <section class=\"excerpt\">\n    <p>We stand for the values of diversity and respect between all the peoples of Earth.</p>\n    <p>We stand for the rights of individuals and their communities to live where they live and to be who they are, thinking, speaking and acting freely.</p>\n    <p>We pledge to forge connections across cultural boundaries, build bridges of understanding between cultures and countries, and ensure that every person has access to the breadth and the beauty of human experience.</p>\n    <p>We are Wikitongues.</p>\n  </section>\n\n  <p>When the Internet first went public in 1995, more than seven thousand languages were spoken around the world. Today, that reality is in rapid decline, as the side-effects of globalization provoke the death of a different language every two weeks. Unless something changes, this rate is likely to spell the extinction of more than 3,000 languages before the turn of the next century. This would be a catastrophic tragedy on an intimate, human scale, for the death of thousands of languages means not just the disappearance of grammar systems and vocabularies, but the human communities who use them as well.</p>\n\n  <p>Apologists for this reality may be inclined to argue that culture is dynamic, and that languages have always gone extinct to make room for new ones. After all, there would be no French without the death of Latin, and no English had Old Saxon not faded away. While this is without a doubt, the twenty-first century’s rate of language death is unprecedented. It stems not from the natural ebb and flow of human diversity, but the marginalizing forces of the nineteenth and twentieth centuries, when world governments began pressuring minorities to abandon their cultures and adopt arbitrarily-defined ‘national languages’.</p>\n\n  <p>This reality is changing, however slowly. Documents like the European Union’s <a href=\"http://www.coe.int/t/dg4/education/minlang/\" target=\"_blank\">Charter for Regional and Minority Languages</a> and Mexico’s <a href=\"http://www.diputados.gob.mx/LeyesBiblio/pdf/257.pdf\" target=\"_blank\">General Law of Linguistic Rights</a> indicate that world leaders are beginning to prioritize the importance of sustainable diversity. Moreover, the Internet has created a safe space for speakers of any language to meet, communicate, and share in their commonality of expression. Though it is but a minor example, by the end of 2014, Wikipedia <a href=\"http://en.wikipedia.org/wiki/List_of_Wikipedias\" target=\"_blank\">has been translated</a> into nearly 300 languages, a number that is likely to continue growing as the web reaches millions of new users every year.</p>\n\n  <p>Wikitongues is an affirmative response to this welcome change. We are a community of volunteers who believe that globalization can be a force for unity through diversity. As the world gets smaller, our cultural heritage need not suffer from mass extinction.</p>\n\n  <p>Based in over fourteen countries, Wikitongues volunteers travel when they can and are always listening, working hard to record new languages so that everyone can continue learning from others, and revel in all the depth and nuance of identity. If you like what we’re doing, stay up to date! Subscribe to us <a href=\"http://www.youtube.com/subscription_center?add_user=wikitongues\" target=\"_blank\">on YouTube</a> for new videos every week. If you believe in what we’re doing, ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "get_involved", options) : helperMissing.call(depth0, "link-to", "get_involved", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("! Our community is open to everyone.</p>\n\n  <p>You can also make a <a href=\"https://www.fracturedatlas.org/site/fiscal/profile?id=11735\" target=\"_blank\">tax-deductible donation</a>: we’re a non-profit organization, and rely on contributions to see our mission through.</p>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["press"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"page\">\n    <h1>Press</h1>\n</section>");
  
});

Ember.TEMPLATES["projects"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Expeditions");
  }

  stack1 = helpers._triageMustache.call(depth0, "about-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page\">\n    <h1>Projects</h1>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("p")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "expeditions", options) : helperMissing.call(depth0, "link-to", "expeditions", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["releaseForm"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"page\">\n    <h1>Volunteering Guidelines</h1>\n    <p>By submitting a video to Wikitongues, you hereby agree: (1) to have secured the consent of the individual or individuals who appear in that video to record them, (2) that you either possess or have obtained the legal rights to share this video online, and (3) that you irrevocably grant Wikitongues and its licensees, successors and assigns the right to license and distribute and use the video of you, including your voice, picture, portrait or likeness as captured in a still image from the footage, in any and all media and for any use whatsoever (except illegal or pornographic), including without limitation, Wikitongues, art, stock, advertising, trade and promotion, in perpetuity. If you should receive a copy of the footage, you shall only use it for your own personal use and you shall not authorize anyone else to use it. You agree and acknowledge that you have no commercial monetary rights to the footage and that Wikitongues owns all rights to the footage, including the right to copyright the footage.</p>\n</section>");
  
});

Ember.TEMPLATES["submit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  stack1 = helpers._triageMustache.call(depth0, "get-involved-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page form\">\n  <form>\n    <h1>Submit a video</h1>\n    <p>Join the conversation, and share your language with the world.</p>\n    <a class=\"secondaryLink\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openGuidelines", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Video Guidelines</a>\n    \n    ");
  stack1 = helpers._triageMustache.call(depth0, "submit-guidelines", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <ul>\n      <li><p>About you</p></li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("view.name"),
    'placeholder': ("Name (Required)"),
    'required': (1)
  },hashTypes:{'value': "ID",'placeholder': "STRING",'required': "INTEGER"},hashContexts:{'value': depth0,'placeholder': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("view.email"),
    'placeholder': ("Email (Required)"),
    'required': (1)
  },hashTypes:{'value': "ID",'placeholder': "STRING",'required': "INTEGER"},hashContexts:{'value': depth0,'placeholder': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("view.link"),
    'placeholder': ("Link to Video File (Dropbox, Google Drive, Mediafire) (Required)"),
    'required': (1)
  },hashTypes:{'value': "ID",'placeholder': "STRING",'required': "INTEGER"},hashContexts:{'value': depth0,'placeholder': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n    </ul>\n    <ul>\n      <li><p>About the speaker</p></li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("view.speaker"),
    'placeholder': ("What is the speaker's name? (Required)"),
    'required': (1)
  },hashTypes:{'value': "ID",'placeholder': "STRING",'required': "INTEGER"},hashContexts:{'value': depth0,'placeholder': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("view.language"),
    'placeholder': ("What languages are used in this video? (Required)"),
    'required': (1)
  },hashTypes:{'value': "ID",'placeholder': "STRING",'required': "INTEGER"},hashContexts:{'value': depth0,'placeholder': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n    </ul>\n    <ul>\n      <li><p>About the video</p></li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("view.videoLocation"),
    'placeholder': ("Where was this video made? (Required)"),
    'required': (1)
  },hashTypes:{'value': "ID",'placeholder': "STRING",'required': "INTEGER"},hashContexts:{'value': depth0,'placeholder': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("view.transcription"),
    'placeholder': ("Transcribe the video (optional)")
  },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("</li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("view.translation"),
    'placeholder': ("Translate the video (optional)")
  },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("</li>\n    </ul>\n    <p>Leave us a message</p>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("view.message"),
    'placeholder': ("Message (optional)")
  },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n    <ul>\n      <li><p>Release form</p></li>\n      <li>\n        \n        <a class=\"secondaryLink\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openTOS", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Read Release Form</a>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "release-forms", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li class=\"checkbox\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("releaseForm"),
    'checked': ("view.releaseForm")
  },hashTypes:{'type': "STRING",'id': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<label for=\"releaseForm\">I have read and accept the release form (Required)</label></li>\n    </ul>\n    <button class=\"submit\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Send</button>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "get-involved-email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </form>\n</section>\n\n<section class=\"success\">\n    <div class=\"modal\">\n      <h1>Thank you for submitting a video!</h1>\n      <p>We'll be sure to notify you when it goes live.</p>\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Okay!</button>\n    </div>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["team"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li>\n                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photo"),
    'title': ("languages")
  },hashTypes:{'src': "STRING",'title': "STRING"},hashContexts:{'src': depth0,'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                <p>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                <p class=\"country\">");
  stack1 = helpers._triageMustache.call(depth0, "location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            </li>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Become a volunteer today");
  }

  data.buffer.push("<section class=\"banner team\">\n    \n</section>\n");
  stack1 = helpers._triageMustache.call(depth0, "about-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page team\">\n    <h1>We're from around the world</h1>\n    <ul>\n        ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("button")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteer", options) : helperMissing.call(depth0, "link-to", "volunteer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["volunteer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  stack1 = helpers._triageMustache.call(depth0, "get-involved-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page form\">\n  <form>\n    <h1>Become a volunteer</h1>\n    <p>Apply to join our community as a volunteer or ambassador.</p>\n    <a class=\"secondaryLink\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openGuidelines", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Volunteer Guidelines</a>\n    \n    ");
  stack1 = helpers._triageMustache.call(depth0, "volunteer-guidelines", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <ul>\n      <li><p>About you</p></li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'required': ("true"),
    'value': ("view.name"),
    'placeholder': ("Name (Required)")
  },hashTypes:{'required': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'required': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'required': ("true"),
    'type': ("email"),
    'value': ("view.email"),
    'placeholder': ("Email (Required)")
  },hashTypes:{'required': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'required': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'required': ("true"),
    'value': ("view.location"),
    'placeholder': ("Location (Required)")
  },hashTypes:{'required': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'required': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n    </ul>\n    <ul>\n      <li><p>How would you like to contribute?</p></li>\n      <li class=\"checkbox\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("ambassador"),
    'checked': ("view.ambassador")
  },hashTypes:{'type': "STRING",'id': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<label for=\"ambassador\">Language Recording</label></li>\n      <li class=\"checkbox\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("socialMedia"),
    'checked': ("view.socialMedia")
  },hashTypes:{'type': "STRING",'id': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<label for=\"socialMedia\">Social Media</label></li>\n      <li class=\"checkbox\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("webDev"),
    'checked': ("view.webDev")
  },hashTypes:{'type': "STRING",'id': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<label for=\"webDev\">Web Development</label></li>\n      <li>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("view.otherVolunteer"),
    'placeholder': ("Other (Please specify)")
  },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</li>\n    </ul>\n    <p>Please tell us a bit about yourself</p>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("view.message"),
    'placeholder': ("What do you do?")
  },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n    <button class=\"submit\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Send</button>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "get-involved-email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </form>\n</section>\n\n<section class=\"success\">\n    <div class=\"modal\">\n      <h1>Thank you for applying!</h1>\n      <p>We'll reach out to you as soon as possible.</p>\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Okay!</button>\n    </div>\n</section>");
  return buffer;
  
});