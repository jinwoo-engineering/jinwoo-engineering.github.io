'use strict'

function ClassController () {
    this.helpers = window.app.helpers
    this.$gnbFix = this.helpers.qs('#gnbFix')
    this.$header = this.helpers.qs('#header')
    this.$gnbs = this.helpers.qsa('.gnb')
}

ClassController.prototype.handleGnbFix = function () {
    this.$gnbFix && window.addEventListener('scroll', () => {
        let isHidden = true
        window.pageYOffset > this.$header.offsetHeight && (isHidden = false)
        this.$gnbFix.setAttribute('data-hidden', isHidden)
    })
}

ClassController.prototype.handleNavs = function () {
    this.$gnbs.forEach(gnb => {
        gnb.querySelector('.toggle-button')
            .addEventListener('click', () => {
                const isExpanded = gnb.getAttribute('data-expanded')
                gnb.setAttribute('data-expanded', isExpanded === 'false')
            }, false)
    })
}

window.app = window.app || {}
window.app.controller = new ClassController()
window.app.controller.handleGnbFix()
window.app.controller.handleNavs()
