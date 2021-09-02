(function (window) {
    'use strict'

    function Controller (view) {
        this.view = view
    }

    Controller.prototype.setView = function () {
        this.view.render('showComponents')
        this.view.bind('windowScroll')
        this.view.bind('gnbsButtonClick')
        this.view.bind('largerButtonclick')
        this.view.bind('largeImageCloseButtonClick')
    }

    window.app = window.app || {}
    window.app.Controller = Controller
})(window)
