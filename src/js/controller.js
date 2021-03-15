'use strict'

function Controller (view) {
    this.view = view
}

Controller.prototype.init = function () {
    this.view.drawComponents()
    this.view.onWindowScroll()
    this.view.onToggleButtonClick()
}

window.app = window.app || {}
window.app.Controller = Controller
