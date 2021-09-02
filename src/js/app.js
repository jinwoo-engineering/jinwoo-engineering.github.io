(function () {
    'use strict'

    function Jinwoo () {
        this.template = new window.app.Template()
        this.view = new window.app.View(this.template)
        this.controller = new window.app.Controller(this.view)
    }

    const jinwooApp = new Jinwoo()

    function setView () {
        jinwooApp.controller.setView()
    }

    window.addEventListener('load', function () {
        setView()
    }, false)
})()
