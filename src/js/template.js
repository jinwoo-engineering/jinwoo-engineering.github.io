'use strict'

function Template () {
}

Template.prototype.gnb = function () {
    return `
        <h1 class="brand">진우엔지니어링</h1>
        <button type="button" class="toggle-button">
            <span class="bars">
                <span class="__bar"></span>
                <span class="__bar"></span>
                <span class="__bar"></span>
            </span>
        </button>
        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="../home.html" class="__link">HOME</a>
                </li>
                <li class="nav-item">
                    <a href="../about.html" class="__link">회사소개</a>
                </li>
                <li class="nav-item">
                    <a href="../status.html" class="__link">회사현황</a>
                </li>
                <li class="nav-item">
                    <a href="../business.html" class="__link">사업소개</a>
                </li>
                <li class="nav-item">
                    <a href="../sales.html" class="__link">매출계획</a>
                </li>
            </ul>
        </nav>`
}

Template.prototype.footer = function () {
    return `
        <div class="footer-inner">
            <div class="info">
                <p class="address">경기도 동두천시 삼육사로 548번길 84 (상패동)</p>
                <p class="tel">TEL : 031-858-2430</p>
                <p class="tel">FAX : 031-858-2429</p>
                <p class="email">EMAIL : <a href="mailto:jinwoo43705@naver.com">jinwoo43705@naver.com</a></p>
            </div>
            <div class="copyright">Copyright © JINWOO ENGINEERING. All rights reserved.</div>
        </div>`
}

Template.prototype.gnbFix = function () {
    return `<div class="gnbFix-inner">${Template.prototype.gnb()}</div>`
}

window.app = window.app || {}
window.app.Template = Template
