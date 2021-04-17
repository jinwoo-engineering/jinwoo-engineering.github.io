'use strict'

function Controller (view) {
    const self = this
    self.view = view

    self.view.bind('handleScroll', function (header){
        self.controlScroll(header)
    })
}

Controller.prototype.setView = function () {
    const self = this

    self.view.render('showComponents')

    self.view.bind('gnbsButtonClick', function (gnb){
        self.toggleGnb(gnb)
    })
}

Controller.prototype.controlScroll = function (header) {
    let isHidden = true
    if (window.pageYOffset > header.offsetHeight) {
        isHidden = false
    }
    this.view.render('showHideGnbFix', isHidden)
}

Controller.prototype.toggleGnb = function (gnb) {
    this.view.render('setDataExpanded', gnb)
}

window.app = window.app || {}
window.app.Controller = Controller
