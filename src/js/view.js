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
        }
    }
    commands[viewCmd]()
}

View.prototype.bind = function (event, handler) {
    const self = this
    if (!this.$gnbFix) return
    if( event === 'handleScroll') {
        window.addEventListener('scroll', function(){
            handler(self.$header)
        }, false)
    }
}




View.prototype.handleToggleButtonClick = function () {
    window.qsa('.gnb')
        .forEach(gnb => {
            window.qs('[data-gnb-button]', gnb)
                .addEventListener('click', function () {
                    const __is = gnb.getAttribute('data-expanded')
                    gnb.setAttribute('data-expanded', __is === 'false')
                }, false)
        })
}



window.app = window.app || {}
window.app.View = View
