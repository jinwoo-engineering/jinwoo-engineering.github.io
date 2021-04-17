'use strict'

function View (template) {
    this.template = template
    this.$cpnts = window.qsa('[data-component]')
    this.$gnbFix = window.qs('#gnbFix')
    this.$header = window.qs('#header')
}

View.prototype.render = function(viewCmd, parameter) {

    const self = this

    const commands = {
        showComponents: function(){
            self.template.drawComponents( self.$cpnts )
        },
        showHideGnbFix: function(){
            self.$gnbFix.setAttribute('data-hidden', parameter)
        },
        setDataExpanded: function(){
            const isExpanded = parameter.getAttribute('data-expanded')
            parameter.setAttribute('data-expanded', isExpanded === 'false')         
        }
    }

    commands[viewCmd]()
}

View.prototype.bind = function (event, handler) {

    const self = this

    if ( event === 'handleScroll' ) {
        if (!this.$gnbFix) return
        window.addEventListener('scroll', function(){
            handler(self.$header)
        }, false)

    } else if ( event === 'gnbsButtonClick' ) {
        window.qsa('.gnb')
            .forEach(gnb => {
                window.qs('[data-gnb-button]', gnb)
                    .addEventListener('click', function () {
                        handler(gnb)
                    }, false)
            })
    }
}

window.app = window.app || {}
window.app.View = View
