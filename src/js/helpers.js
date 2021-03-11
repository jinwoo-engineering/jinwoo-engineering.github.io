'use strict'

function ClassHelpers () {
}

ClassHelpers.prototype.qs = function (selector, scope) {
    return (scope || document).querySelector(selector)
}

ClassHelpers.prototype.qsa = function (selector, scope) {
    return (scope || document).querySelectorAll(selector)
}

// if( NodeList.prototype.hasOwnProperty('forEach') === false ) {
NodeList.prototype.forEach = Array.prototype.forEach
// }
window.app = window.app || {}
window.app.helpers = new ClassHelpers()
