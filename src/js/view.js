'use strict'

function View (template) {
    this.template = template
    this.$cpnts = window.$qsa('[data-component]')
    this.$gnbFix = window.$qs('#gnbFix')
    this.$header = window.$qs('#header')
}

View.prototype.render = function (viewCmd, param) {
    const self = this

    const commands = {
        showComponents: function () {
            self.template.drawComponents(self.$cpnts)
        },
        setGnbFixHidden: function () {
            self.$gnbFix.setAttribute('data-hidden', param)
        },
        setElemExpanded: function () {
            const isExpanded = param.getAttribute('data-expanded')
            param.setAttribute('data-expanded', isExpanded === 'false')
        }
    }

    commands[viewCmd]()
}

View.prototype.bind = function (event, handler) {
    const self = this

    switch (event) {
    case 'windowScroll' :
        if (!this.$gnbFix) return
        window.addEventListener('scroll', function () {
            handler(self.$header)
        })
        break

    case 'gnbsButtonClick' :
        window.$qsa('.gnb')
            .forEach(gnb => {
                window.$qs('[data-gnb-button]', gnb)
                    .addEventListener('click', function () {
                        handler(gnb)
                    })
            })
        break
    }
}

window.app = window.app || {}
window.app.View = View
