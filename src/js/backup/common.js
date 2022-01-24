'use strict'

if (NodeList.prototype.hasOwnProperty('forEach') === false) {
    NodeList.prototype.forEach = Array.prototype.forEach
}

const template = {
    gnb: () => {
        return `
            <h1 class="brand">진우레이저(주)</h1>
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
            </nav>
            `
    },
    footer: () => {
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
    },
    gnbFix: () => {
        return `<div class="gnbFix-inner">${template.gnb()}</div>`
    }
}

const className = {
    gnb: 'gnb',
    footer: 'footer',
    gnbFix: 'gnb gnbFix'
}

const makeTemplate = () => {
    // document.querySelector('[data-component="gnb"]').innerHTML = template.gnb();
    document.querySelectorAll('[data-component]')
        .forEach(cpnt => {
            const key = cpnt.getAttribute('data-component')
            cpnt.className = className[key]
            cpnt.innerHTML = template[key]();
            (key === 'gnb' || key === 'gnbFix') && cpnt.setAttribute('data-expanded', false)
        })
}

const handleGnbFix = () => {
    const gnbFix = document.getElementById('gnbFix')
    const header = document.getElementById('header')
    if (gnbFix !== undefined) {
        window.addEventListener('scroll', () => {
            let isHidden = true
            window.pageYOffset > header.offsetHeight && (isHidden = false)
            gnbFix.setAttribute('data-hidden', isHidden)
        })
    }
    // gnbFix && window.addEventListener('scroll', () => {
    //     let isHidden = true
    //     window.pageYOffset > header.offsetHeight && (isHidden = false)
    //     gnbFix.setAttribute('data-hidden', isHidden)
    // })
}

const handeNavs = () => {
    document.querySelectorAll('.gnb')
        .forEach(gnb => {
            gnb.querySelector('.toggle-button')
                .addEventListener('click', () => {
                    const isExpanded = gnb.getAttribute('data-expanded')
                    gnb.setAttribute('data-expanded', isExpanded === 'false')
                }, false)
        })
}

makeTemplate()

handleGnbFix()

handeNavs()
