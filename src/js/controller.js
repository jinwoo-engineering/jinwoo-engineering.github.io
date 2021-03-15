'use strict'

function Controller (view) {
    this.view = view
}

Controller.prototype.init = function () {
    this.view.drawComponents()
    this.view.handleWindowScroll()
    this.view.handleToggleButtonClick()
}

window.app = window.app || {}
window.app.Controller = Controller
