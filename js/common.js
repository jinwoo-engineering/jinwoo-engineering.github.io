'use strict';

var dom = document;

var tempateGnb = `
<h1 class="brand">진우엔지니어링</h1>
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
</nav>`;

var template = {
	gnb: tempateGnb,
	footer: `<div class="cell1">
	<p class="address">경기도 동두천시 삼육사로 548번길 84 (상패동)</p>
	<p class="tel">TEL : 031-858-2430</p>
	<p class="tel">FAX : 031-858-2429</p>
	<p class="email">EMAIL : <a href="mailto:jinwoo43705@naver.com">jinwoo43705@naver.com</a></p>
</div>
<div class="cell2">
	Copyright © JINWOO ENGINEERING. All rights reserved.
</div>`,
	gnbFix: tempateGnb
};

var className = {
	gnb: 'gnb',
	footer: 'footer',
	gnbFix: 'gnb gnbFix'
};

dom.querySelectorAll('[data-component]')
	.forEach( node => {
		var key = node.dataset.component;
		node.className = className[key];
		node.innerHTML = template[key];
	});




