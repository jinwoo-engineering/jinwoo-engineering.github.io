'use strict';function Template(){console.log("Template")}Template.gnb=function(){return" <h1 class=\"brand\">\uC9C4\uC6B0\uC5D4\uC9C0\uB2C8\uC5B4\uB9C1</h1> <button type=\"button\" class=\"toggle-button\"> <span class=\"bars\"> <span class=\"__bar\"></span> <span class=\"__bar\"></span> <span class=\"__bar\"></span> </span> </button> <nav class=\"nav\"> <ul class=\"nav-list\"> <li class=\"nav-item\"> <a href=\"../home.html\" class=\"__link\">HOME</a> </li> <li class=\"nav-item\"> <a href=\"../about.html\" class=\"__link\">\uD68C\uC0AC\uC18C\uAC1C</a> </li> <li class=\"nav-item\"> <a href=\"../status.html\" class=\"__link\">\uD68C\uC0AC\uD604\uD669</a> </li> <li class=\"nav-item\"> <a href=\"../business.html\" class=\"__link\">\uC0AC\uC5C5\uC18C\uAC1C</a> </li> <li class=\"nav-item\"> <a href=\"../sales.html\" class=\"__link\">\uB9E4\uCD9C\uACC4\uD68D</a> </li> </ul> </nav>"},Template.footer=function(){return" <div class=\"footer-inner\"> <div class=\"info\"> <p class=\"address\">\uACBD\uAE30\uB3C4 \uB3D9\uB450\uCC9C\uC2DC \uC0BC\uC721\uC0AC\uB85C 548\uBC88\uAE38 84 (\uC0C1\uD328\uB3D9)</p> <p class=\"tel\">TEL : 031-858-2430</p> <p class=\"tel\">FAX : 031-858-2429</p> <p class=\"email\">EMAIL : <a href=\"mailto:jinwoo43705@naver.com\">jinwoo43705@naver.com</a></p> </div> <div class=\"copyright\">Copyright \xA9 JINWOO ENGINEERING. All rights reserved.</div> </div>"},Template.gnbFix=function(){return"<div class=\"gnbFix-inner\">"+Template.gnb()+"</div>"};