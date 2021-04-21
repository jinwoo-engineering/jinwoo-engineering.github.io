(function (window) {
    'use strict'

    function Template () {
        const self = this

        self.template = {
            gnb: function () {
                return `
                    <h1 class="brand">진우엔지니어링</h1>
                    <button type="button" class="toggle-button" data-gnb-button>
                        <span class="bars">
                            <span class="__bar"></span>
                            <span class="__bar"></span>
                            <span class="__bar"></span>
                        </span>
                    </button>
                    <nav class="nav">
                        <ul class="nav-list">
                            <li class="nav-item">
                                <a href="./home.html" class="__link">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a href="./about.html" class="__link">회사소개</a>
                            </li>
                            <li class="nav-item">
                                <a href="./status.html" class="__link">회사현황</a>
                            </li>
                            <li class="nav-item">
                                <a href="./business.html" class="__link">사업소개</a>
                            </li>
                            <li class="nav-item">
                                <a href="./sales.html" class="__link">매출계획</a>
                            </li>
                        </ul>
                    </nav>`
            },
            footer: function () {
                return `
                    <div class="footer-inner">
                        <div class="info">
                            <p class="address">경기도 동두천시 삼육사로 548번길 84 (상패동)</p>
                            <p class="tel">TEL : 031-858-2430 
                                <a href="tel: 031-858-2430" class="__link">통화</a>
                                <a href="sms: 031-858-2430" class="__link">문자</a>
                            </p>
                            <p class="tel">FAX : <a href="tel: 031-858-2429">031-858-2429</a></p>
                            <p class="email">EMAIL : <a href="mailto:jinwoo43705@naver.com">jinwoo43705@naver.com</a></p>
                        </div>
                        <div class="copyright">Copyright © JINWOO ENGINEERING. All rights reserved.</div>
                    </div>`
            },
            gnbFix: function () {
                return `<div class="gnbFix-inner">${self.template.gnb()}</div>`
            }
        }
    }

    Template.prototype.drawComponents = function (cpnts) {
        const self = this
        const name = {
            gnb: 'gnb',
            footer: 'footer',
            gnbFix: 'gnb gnbFix'
        }
        const draw = function (cpnt) {
            const key = cpnt.getAttribute('data-component')
            cpnt.className = name[key]
            if (key === 'gnb' || key === 'gnbFix') {
                cpnt.setAttribute('data-expanded', false)
            }
            cpnt.innerHTML = self.template[key]()
        }
        cpnts.forEach(function (cpnt) {
            draw(cpnt)
        })
    }

    window.app = window.app || {}
    window.app.Template = Template
})(window)
