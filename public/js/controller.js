'use strict';function Controller(a){this.view=a}Controller.prototype.init=function(){this.view.drawComponents(),this.view.handleWindowScroll(),this.view.handleToggleButtonClick()},window.app=window.app||{},window.app.Controller=Controller;