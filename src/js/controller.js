'use strict'

function Controller (helpers) {
    this.helpers = helpers
    this.$gnbFix = this.helpers.qs('#gnbFix')
    this.$header = this.helpers.qs('#header')
}

Controller.prototype.handleGnbFix = function () {
    this.$gnbFix && window.addEventListener('scroll', () => {
        let isHidden = true
        if (window.pageYOffset > this.$header.offsetHeight) {
            isHidden = false
        }
        this.$gnbFix.setAttribute('data-hidden', isHidden)
    })
}

Controller.prototype.handleNavs = function () {
    const helpers = this.helpers
    helpers.qsa('.gnb')
        .forEach(gnb => {
            helpers.qs('.toggle-button', gnb)
                .addEventListener('click', function () {
                    const isExpanded = gnb.getAttribute('data-expanded')
                    gnb.setAttribute('data-expanded', isExpanded === 'false')
                }, false)
        })
}

window.app = window.app || {}
window.app.Controller = Controller
