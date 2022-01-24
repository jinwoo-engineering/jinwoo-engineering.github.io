(function () {
    'use strict'

    function App () {
        this.template = new window.app.Template()
        this.view = new window.app.View(this.template)
    }
    App.prototype.start = function () {
        this.view.render('showComponents')
        this.view.bind('windowScroll')
        this.view.bind('gnbsButtonClick')
        this.view.bind('largerButtonclick')
        this.view.bind('galleryCloseButtonClick')
    }

    const jinwooApp = new App()

    window.addEventListener('load', function () {
        jinwooApp.start()
    }, false)
})()
