'use strict';function ClassHelpers(){}ClassHelpers.prototype.qs=function(a,b){return(b||document).querySelector(a)},ClassHelpers.prototype.qsa=function(a,b){return(b||document).querySelectorAll(a)},NodeList.prototype.forEach=Array.prototype.forEach,window.app=window.app||{},window.app.helpers=new ClassHelpers;