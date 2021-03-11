'use strict'

function ClassView () {
    this.template = window.app.template
    this.className = {
        gnb: 'gnb',
        footer: 'footer',
        gnbFix: 'gnb gnbFix'
    }
    this.cpnts = document.querySelectorAll('[data-component]')
}

ClassView.prototype.show = function () {
    this.cpnts.forEach(cpnt => {
        const key = cpnt.getAttribute('data-component')
        cpnt.className = this.className[key]
        cpnt.innerHTML = this.template[key]();
        (key === 'gnb' || key === 'gnbFix') && cpnt.setAttribute('data-expanded', false)
    })
}

window.app = window.app || {}
window.app.view = new ClassView()
window.app.view.show()
