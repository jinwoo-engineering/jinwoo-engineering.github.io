(function () {
    'use strict'

    var isIE = (
        function () {
            var agent = navigator.userAgent.toLowerCase()
            var ieChk = (navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) ||
                (agent.indexOf('msie') !== -1)
            if (ieChk) return true
            return false
        }
    )()

    var scripts = '<script src="./js/helpers{{_v}}.js"></script>' +
            '<script src="./js/template{{_v}}.js"></script>' +
            '<script src="./js/view{{_v}}.js"></script>' +
            '<script src="./js/controller{{_v}}.js"></script>' +
            '<script src="./js/app{{_v}}.js"></script>'
    scripts = scripts.replace(/{{_v}}/gm, isIE ? '.lower' : '')

    document.open()
    document.write(scripts)
    document.close()
})()
