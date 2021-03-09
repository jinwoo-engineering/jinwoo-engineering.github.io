'use strict'

const win = window
const dom = document

const template = {
    gnb: () => {
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
                        <a href="../html/home.html" class="__link">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a href="../html/about.html" class="__link">회사소개</a>
                    </li>
                    <li class="nav-item">
                        <a href="../html/status.html" class="__link">회사현황</a>
                    </li>
                    <li class="nav-item">
                        <a href="../html/business.html" class="__link">사업소개</a>
                    </li>
                    <li class="nav-item">
                        <a href="../html/sales.html" class="__link">매출계획</a>
                    </li>
                </ul>
            </nav>
            `
    },
    footer: () => {
        return `
            <div class="info">
                <p class="address">경기도 동두천시 삼육사로 548번길 84 (상패동)</p>
                <p class="tel">TEL : 031-858-2430</p>
                <p class="tel">FAX : 031-858-2429</p>
                <p class="email">EMAIL : <a href="mailto:jinwoo43705@naver.com">jinwoo43705@naver.com</a></p>
            </div>
            <div class="copyright">Copyright © JINWOO ENGINEERING. All rights reserved.</div>`
    },
    gnbFix: () => {
        return template.gnb()
    }
}

const className = {
    gnb: 'gnb',
    footer: 'footer',
    gnbFix: 'gnb gnbFix'
}

const makeTemplate = () => {
    dom.querySelectorAll('[data-component]')
        .forEach(cpnt => {
            const key = cpnt.getAttribute('data-component')
            cpnt.className = className[key]
            cpnt.innerHTML = template[key]();
            (key === 'gnb' || key === 'gnbFix') && cpnt.setAttribute('data-expanded', false)
        })
}

const handleGnbFix = () => {
    const gnbFix = dom.getElementById('gnbFix')
    const header = dom.getElementById('header')
    gnbFix && win.addEventListener('scroll', () => {
        let isHidden = true
        win.scrollY > header.offsetHeight && (isHidden = false)
        gnbFix.dataset.hidden = isHidden
    })
}

const handeNavs = () => {
    [...dom.getElementsByClassName('gnb')]
        .forEach(gnb => {
            gnb.getElementsByClassName('toggle-button')[0]
                .addEventListener('click', () => {
                    const isExpanded = gnb.getAttribute('data-expanded')
                    gnb.setAttribute('data-expanded', isExpanded === 'false')
                }, false)
        })
}

makeTemplate()

handleGnbFix()

handeNavs()
