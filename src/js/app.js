'use strict'

function Jinwoo (name) {
    this.template = new window.app.Template()
    this.view = new window.app.View(this.template)
    this.controller = new window.app.Controller(this.view)
}

const jinwoo = new Jinwoo()

function setView(){
    jinwoo.controller.setView()
}

window.addEventListener('load', function(){
    setView()
}, false)