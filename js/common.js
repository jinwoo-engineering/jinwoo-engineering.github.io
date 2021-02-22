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
	footer: `<h3>Footer</h3>`,
	gnbFix: tempateGnb
};

var className = {
	gnb: 'gnb',
	footer: 'footer',
	gnbFix: 'gnb gnbFix'
};

var components = dom.querySelectorAll('[data-component]');
components.forEach( cp => {
	var key = cp.dataset.component;
	cp.className = className[key];
	cp.innerHTML = template[key];
});




