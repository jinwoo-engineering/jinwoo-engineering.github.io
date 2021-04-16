'use strict'

function Controller (view) {
    const self = this
    self.view = view

    self.view.bind('handleScroll', function (){
        self.controlScroll(header)
    })
}

Controller.prototype.setView = function () {
    this.view.render('showComponents')

    this.view.handleToggleButtonClick()
}

Controller.prototype.controlScroll = function (header) {
    const self = this
    let isHidden = true
    if (window.pageYOffset > header.offsetHeight) {
        isHidden = false
    }
    self.view.render('showHideGnbFix', isHidden)
}



window.app = window.app || {}
window.app.Controller = Controller
