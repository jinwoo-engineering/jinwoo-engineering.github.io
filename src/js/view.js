'use strict'

function View (helpers, template) {
    this.helpers = helpers
    this.template = template
    this.cpnts = document.querySelectorAll('[data-component]')
    this.$gnbFix = this.helpers.qs('#gnbFix')
    this.$header = this.helpers.qs('#header')
}

View.prototype.showComponents = function () {
    const __cn = {
        gnb: 'gnb',
        footer: 'footer',
        gnbFix: 'gnb gnbFix'
    }
    this.cpnts.forEach(cpnt => {
        const __key = cpnt.getAttribute('data-component')
        cpnt.className = __cn[__key]
        cpnt.innerHTML = this.template[__key]()
        if (__key === 'gnb' || __key === 'gnbFix') {
            cpnt.setAttribute('data-expanded', false)
        }
    })
}

View.prototype.handleGnbFix = function () {
    if (!this.$gnbFix) return
    window.addEventListener('scroll', () => {
        let __is = true
        if (window.pageYOffset > this.$header.offsetHeight) {
            __is = false
        }
        this.$gnbFix.setAttribute('data-hidden', __is)
    }, false)
}

View.prototype.handleNavs = function () {
    const __hp = this.helpers
    __hp.qsa('.gnb')
        .forEach(gnb => {
            __hp.qs('.toggle-button', gnb)
                .addEventListener('click', function () {
                    const __is = gnb.getAttribute('data-expanded')
                    gnb.setAttribute('data-expanded', __is === 'false')
                }, false)
        })
}

window.app = window.app || {}
window.app.View = View
