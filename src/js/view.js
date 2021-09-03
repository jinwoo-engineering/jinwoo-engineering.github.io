(function (window) {
    'use strict'

    function View (template) {
        this.template = template
        this.$cpnts = window.$qsa('[data-component]')
        this.$gnbFix = window.$qs('#gnbFix')
        this.$header = window.$qs('#header')
    }

    View.prototype.render = function (viewCmd, param) {
        const commands = {
            showComponents: () => {
                this.template.drawComponents(this.$cpnts)
            },
            setGnbFixHidden: () => {
                this.$gnbFix.setAttribute('data-hidden', param)
            },
            setElemExpanded: () => {
                const isExpanded = param.getAttribute('data-expanded')
                param.setAttribute('data-expanded', isExpanded === 'false')
            }
        }
        commands[viewCmd]()
    }

    View.prototype.bind = function (event, handler) {
        switch (event) {
        case 'windowScroll' :
            if (!this.$gnbFix) return
            window.addEventListener('scroll', () => {
                let isHidden = true
                if (window.pageYOffset > this.$header.offsetHeight) {
                    isHidden = false
                }
                this.render('setGnbFixHidden', isHidden)
            })
            break

        case 'gnbsButtonClick' :
            window.$qsa('.gnb')
                .forEach(gnb => {
                    window.$qs('[data-gnb-button]', gnb)
                        .addEventListener('click', () => {
                            this.render('setElemExpanded', gnb)
                        })
                })
            break
        case 'largerButtonclick':
            window.$qsa('[data-button="larger"]') &&
            window.$qsa('[data-button="larger"]')
                .forEach(element => {
                    element.addEventListener('click', function () {
                        const cpnt = window.$qs('#gallery')
                        cpnt.querySelector('img').src = this.getAttribute('data-src')
                        cpnt.querySelector('img').alt = this.getAttribute('data-alt')
                        cpnt.setAttribute('aria-hidden', false)
                        document.body.setAttribute('data-backdrop', true)
                    })
                })
            break
        case 'galleryCloseButtonClick':
            window.$qs('#closeGalleryButton') &&
            window.$qs('#closeGalleryButton')
                .addEventListener('click', () => {
                    window.$qs('#gallery')
                        .setAttribute('aria-hidden', true)
                    document.body.setAttribute('data-backdrop', false)
                })
            break
        }
    }

    window.app = window.app || {}
    window.app.View = View
})(window)
