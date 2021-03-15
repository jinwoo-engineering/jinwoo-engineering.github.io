'use strict'

function Controller (view) {
    this.view = view
}

Controller.prototype.init = function () {
    this.view.showComponents()
    this.view.handleGnbFix()
    this.view.handleNavs()
}

window.app = window.app || {}
window.app.Controller = Controller
