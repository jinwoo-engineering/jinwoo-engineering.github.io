  
/*global NodeList */
// (function (window) {

    'use strict';

    window.qs = function (selector, scope) {
        return (scope || document).querySelector(selector)
    }

    window.qsa = function (selector, scope) {
        return (scope || document).querySelectorAll(selector)
    }

    NodeList.prototype.forEach = Array.prototype.forEach
    
// })(window);