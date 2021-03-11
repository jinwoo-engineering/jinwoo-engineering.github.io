'use strict'

function Helpers () {
}

Helpers.prototype.qs = function (selector, scope) {
    return (scope || document).querySelector(selector)
}

Helpers.prototype.qsa = function (selector, scope) {
    return (scope || document).querySelectorAll(selector)
}

// if( NodeList.prototype.hasOwnProperty('forEach') === false ) {
NodeList.prototype.forEach = Array.prototype.forEach
// }
window.app = window.app || {}
window.app.Helpers = Helpers
