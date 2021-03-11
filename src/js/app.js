'use strict'

function Jinwoo () {
    this.helpers = new window.app.Helpers()
    this.template = new window.app.Template()
    this.view = new window.app.View(this.template)
    this.controller = new window.app.Controller(this.helpers)
}

const jinwoo = new Jinwoo()
jinwoo.view.show()
jinwoo.controller.handleGnbFix()
jinwoo.controller.handleNavs()
