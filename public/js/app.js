"use strict";(function(){'use strict';function a(){this.template=new window.app.Template,this.view=new window.app.View(this.template)}a.prototype.start=function(){this.view.render("showComponents"),this.view.bind("windowScroll"),this.view.bind("gnbsButtonClick"),this.view.bind("largerButtonclick"),this.view.bind("galleryCloseButtonClick")};var b=new a;window.addEventListener("load",function(){b.start()},!1)})();