"use strict";(function(a){'use strict';function b(a){this.view=a}b.prototype.initial=function(){this.view.render("showComponents"),this.view.bind("windowScroll"),this.view.bind("gnbsButtonClick"),this.view.bind("largerButtonclick"),this.view.bind("galleryCloseButtonClick")},a.app=a.app||{},a.app.Controller=b})(window);