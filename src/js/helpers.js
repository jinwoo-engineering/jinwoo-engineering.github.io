'use strict'

function Helpers(){
	console.log('Helpers')
}

Helpers.qs = function (selector, scope) {
	return (scope || document).querySelector(selector);
}

Helpers.qsa = function (selector, scope) {
	return (scope || document).querySelectorAll(selector);
}

if( NodeList.prototype.hasOwnProperty('forEach') === false ) {
	console.log('NodeList.prototype.hasOwnProperty(forEach) :', NodeList.prototype.forEach)
	NodeList.prototype.forEach = Array.prototype.forEach
} 