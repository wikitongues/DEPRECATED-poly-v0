Ember.TEMPLATES["node_modules/ember-template-compiler/tests/file-system/app/foo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["_teamList"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers['if'].call(depth0, "director", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "team.teamMember", "", options) : helperMissing.call(depth0, "link-to", "team.teamMember", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers.unless.call(depth0, "director", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"list\">\n  <ul>\n  <li class=\"header\">Managing Directors</li>\n    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n  <ul>\n  <li class=\"header\">Venture Partners</li>\n    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"about\">\n  <div class=\"content\">\n    <p class=\"bodyCopy\">Quotidian Ventures is a seed stage fund founded in NYC in 2010 by Pedro Torres Picón. Our passion is helping founders create technology products that modernize large industries in which they have deep domain expertise. Whether the entrepreneur has a technical background or not, we provide the resources and hands on support needed to allow him or her to make the difficult transition from industry expert to internet entrepreneur.</p>\n  </div>\n</div>");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['header-nav'] || (depth0 && depth0['header-nav']),options={hash:{
    'tagName': ("nav")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "header-nav", options))));
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers['footer-nav'] || (depth0 && depth0['footer-nav']),options={hash:{
    'tagName': ("footer")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "footer-nav", options))));
  return buffer;
  
});

Ember.TEMPLATES["careers"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"careers\">\n  <div class=\"content\">\n    <p class=\"quotidian bodyCopy\">Quotidian Ventures is not currently hiring but drop us a line if you're interesting.</p>\n    <h1>Openings in our portfolio companies</h1>\n    <p class=\"bodyCopy\">Our portfolio companies are hiring!</p>\n  </div>\n</div>");
  
});

Ember.TEMPLATES["companies"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "aquired", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li class=\"company aquired\">\n          <div class=\"wrapper\">\n            <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"link\">\n              <img src=\"images/logo.png\" alt=\"\" class=\"quotidian-logo\">\n              <div class=\"photoWrapper\">\n                ");
  stack1 = helpers['if'].call(depth0, "photo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </div>\n              <span class=\"info\">\n                <p><b>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b></p>\n                <p>");
  stack1 = helpers._triageMustache.call(depth0, "location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                ");
  stack1 = helpers['if'].call(depth0, "aquired", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </span>\n            </a>\n            <span class=\"social\">\n              <ul>\n                <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("twitter")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"twitter\"></a></li>\n                <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("angelList")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"angelList\"></a></li>\n              </ul>\n            </span>\n          </div>\n        </li>\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                  <span class=\"helper\"></span>\n                  <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                  <p class=\"aquiredBy\">Aquired by ");
  stack1 = helpers._triageMustache.call(depth0, "aquired", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li class=\"company\">\n          <div class=\"wrapper\">\n            <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"link\">\n              <div class=\"photoWrapper\">\n                ");
  stack1 = helpers['if'].call(depth0, "photo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </div>\n              <span class=\"info\">\n                <p><b>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b></p>\n                <p>");
  stack1 = helpers._triageMustache.call(depth0, "location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                ");
  stack1 = helpers['if'].call(depth0, "aquired", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </span>\n            </a>\n            <span class=\"social\">\n              <ul>\n                <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("twitter")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"twitter\"></a></li>\n                <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("angelList")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"angelList\"></a></li>\n              </ul>\n            </span>\n          </div>\n        </li>\n        ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                  <p>Aquired by ");
  stack1 = helpers._triageMustache.call(depth0, "aquired", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"companies\">\n  <div class=\"content\">\n    <ul>\n      ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/aquired-company-component"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          <span class=\"helper\"></span>\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <p class=\"aquiredBy\">Aquired by ");
  stack1 = helpers._triageMustache.call(depth0, "aquired", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        ");
  return buffer;
  }

  data.buffer.push("<li class=\"company aquired\">\n  <div class=\"wrapper\">\n    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"link\">\n      <img src=\"images/logo.png\" alt=\"\" class=\"quotidian-logo\">\n      <div class=\"photoWrapper\">\n        ");
  stack1 = helpers['if'].call(depth0, "photo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <span class=\"info\">\n        <p><b>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b></p>\n        <p>");
  stack1 = helpers._triageMustache.call(depth0, "location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        ");
  stack1 = helpers['if'].call(depth0, "aquired", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    </a>\n    <span class=\"social\">\n      <ul>\n        <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("twitter")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"twitter\"></a></li>\n        <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("angelList")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"angelList\"></a></li>\n      </ul>\n    </span>\n  </div>\n</li>");
  return buffer;
  
});

Ember.TEMPLATES["components/company-component"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          <span class=\"helper\"></span>\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("company.photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <p>Aquired by ");
  stack1 = helpers._triageMustache.call(depth0, "company.aquired", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        ");
  return buffer;
  }

  data.buffer.push("<li class=\"company\">\n  <div class=\"wrapper\">\n    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("company.url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"link\">\n      <div class=\"photoWrapper\">\n        ");
  stack1 = helpers['if'].call(depth0, "company.photo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <span class=\"info\">\n        <p><b>");
  stack1 = helpers._triageMustache.call(depth0, "company.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b></p>\n        <p>");
  stack1 = helpers._triageMustache.call(depth0, "company.location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        ");
  stack1 = helpers['if'].call(depth0, "company.aquired", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    </a>\n    <span class=\"social\">\n      <ul>\n        <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("company.twitter")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"twitter\"></a></li>\n        <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("company.angelList")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"angelList\"></a></li>\n      </ul>\n    </span>\n  </div>\n</li>");
  return buffer;
  
});

Ember.TEMPLATES["components/footer-nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("About");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<ul class=\"org\">\n  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("about"),
    'title': ("about")
  },hashTypes:{'classNames': "STRING",'title': "STRING"},hashContexts:{'classNames': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  \n  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("contact"),
    'title': ("contact")
  },hashTypes:{'classNames': "STRING",'title': "STRING"},hashContexts:{'classNames': depth0,'title': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n</ul>\n<ul class=\"social\">\n  <li><a href=\"https://twitter.com/qventures\">Twitter</a></li>\n  <li><a href=\"https://angel.co/qventures\">AngelList</a></li>\n  <li><a href=\"http://nytm.org/made\">&#9829; NY</a></li>\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/header-nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <img class=\"pinwheel\" src=\"images/logo.png\" alt=\"Quotidian Ventures\">\n    <img class=\"logoType\" src=\"images/logoType.png\" alt=\"Quotidian Ventures\">\n    <img class=\"phoneLogo\" src=\"images/phoneLogo.png\" alt=\"Quotidian Ventures\">\n  ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Companies");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Team");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Stream");
  }

  data.buffer.push("<span class=\"mobileTop\">\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("logo"),
    'title': ("Quotidian Ventures")
  },hashTypes:{'classNames': "STRING",'title': "STRING"},hashContexts:{'classNames': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <button class=\"mobileNav\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleNavMenu", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></button>\n</span>\n<ul class=\"headerNav\">\n  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("companies"),
    'title': ("Companies")
  },hashTypes:{'classNames': "STRING",'title': "STRING"},hashContexts:{'classNames': depth0,'title': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "companies", options) : helperMissing.call(depth0, "link-to", "companies", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("team"),
    'title': ("team")
  },hashTypes:{'classNames': "STRING",'title': "STRING"},hashContexts:{'classNames': depth0,'title': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "team", options) : helperMissing.call(depth0, "link-to", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("stream"),
    'title': ("stream")
  },hashTypes:{'classNames': "STRING",'title': "STRING"},hashContexts:{'classNames': depth0,'title': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stream", options) : helperMissing.call(depth0, "link-to", "stream", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n</ul>");
  return buffer;
  
});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"contact\">\n  <div class=\"content\">\n    <section class=\"labs\">\n      <p>Quotidian Ventures operates from Quotidian Labs, our co-working space slap-bang right in the middle of the New York tech world.</p>\n      <p class=\"address\"><a target=\"_blank\" href=\"https://maps.google.com/maps?ll=40.741235,-73.99129&amp;z=14&amp;t=m&amp;hl=en&amp;gl=US&amp;mapclient=embed&amp;q=16%20W%2022nd%20St%20New%20York%2C%20NY%2010010\">16 West 22nd St, 6th Floor, New York, NY 10010</a></p>\n      <div class=\"map\">\n        <iframe width=\"100%\" height=\"380\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://www.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=16+West+22nd+St,+New+York,+NY&amp;aq=&amp;sll=40.741263, -73.991268&amp;sspn=0.022085,0.045447&amp;ie=UTF8&amp;hq=&amp;hnear=16+West+22nd+St,+New+York,+10007&amp;t=m&amp;ll=40.741263, -73.991268&amp;spn=0.030904,0.008497&amp;z=14&amp;iwloc=A&amp;output=embed\"></iframe>\n      </div>\n      <p>For more information about Quotidian Labs, email <a href=\"mailto:labs@quotidian.co\">labs@quotidian.co</a></p>\n    </section>\n    <section class=\"emails\">\n      <h1>Contact</h1>\n      <p>To be considered for funding, please email a pitch and some funny pictures to <a href=\"mailto:hi@quotidian.co\">hi@quotidian.co</a></p>\n      <p>For all media inquiries, please contact <a href=\"mailto:press@quotidian.co\">press@quotidian.co</a></p>\n    </section>\n    <section class=\"assets\">\n      <h1>Brand Assets</h1>\n      <p>Horizontal logo: <a href=\"/images/Horizontal.zip\">download</a></p>\n      <p>Vertical logo: <a href=\"/images/Vertical.zip\"> download</a></p>\n    </section>\n  </div>\n</div>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("See who we work with");
  }

  data.buffer.push("<div class=\"index\">\n  <div class=\"content\">\n    <h1>We are\n      <span id=\"indexCycle\">\n        <span class=\"indexCycleWrapper\">\n          <span class=\"indexCycleOption\">pre-product</span><span class=\"indexCycleOption\">pre-traction</span><span class=\"indexCycleOption\">pre-seed</span>\n        </span>\n      </span> investors <br>in <span>New York</span> companies <br> with unique <span>founder/market fit.</span></h1>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "companies", options) : helperMissing.call(depth0, "link-to", "companies", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["stream"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("<div class=\"news\">\n  <div class=\"content\">\n    <h1>News</h1>\n    \n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["team"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"team\">\n  <div class=\"content\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "teamList", options) : helperMissing.call(depth0, "partial", "teamList", options))));
  data.buffer.push("\n    <div class=\"teamBlock\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["team/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"image\">\n  <img src=\"http://dummyimage.com/600x400/4d494d/686a82.gif&text=placeholder+image\" alt=\"placeholder+image\">\n</div>\n<p>At Quotidian Ventures, we firmly believe in working closely and collaboratively as a team. In working with us, you have access to each and every partner.</p>");
  
});

Ember.TEMPLATES["team/teamMember"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<li><a class=\"linkedIn\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("linkedIn")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></a></li>");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<li><a class=\"twitter\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("twitter")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></a></li>");
  return buffer;
  }

  data.buffer.push("<h1>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n<div class=\"social\">\n  <ul>\n    ");
  stack1 = helpers['if'].call(depth0, "linkedIn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "twitter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>\n<p class=\"title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n<div class=\"image\">\n  <img src=\"http://dummyimage.com/893x429/4d494d/686a82.gif&text=placeholder+image\" alt=\"placeholder+image\">\n</div>\n<p>");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>");
  return buffer;
  
});