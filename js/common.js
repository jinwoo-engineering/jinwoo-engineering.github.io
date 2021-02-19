'use strict';

const gnbTemplate = 
`
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
const footerTemplate = `<h3>Footer</h3>`;

// root.insertAdjacentHTML('afterbegin', gnbTemplate);
gnb.className = "gnb";
gnb.innerHTML = gnbTemplate;

footer.className = "footer";
footer.innerHTML = footerTemplate;

gnbFix.className = "gnb-fix";
gnbFix.innerHTML = gnbTemplate;


