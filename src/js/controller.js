'use strict'

function Controller (view) {
    const self = this
    self.view = view

    self.view.bind('windowScroll', function (header) {
        self.comparePageY(header)
    })
}

Controller.prototype.setView = function () {
    const self = this

    self.view.render('showComponents')

    self.view.bind('gnbsButtonClick', function (gnb) {
        self.toggleGnb(gnb)
    })
}

Controller.prototype.comparePageY = function (header) {
    let isHidden = true
    if (window.pageYOffset > header.offsetHeight) {
        isHidden = false
    }
    this.view.render('setGnbFixHidden', isHidden)
}

Controller.prototype.toggleGnb = function (gnb) {
    this.view.render('setElemExpanded', gnb)
}

window.app = window.app || {}
window.app.Controller = Controller
