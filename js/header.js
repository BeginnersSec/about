if (navigator.userAgentData && navigator.userAgentData.mobile) {
	document.write('<h1 id="title">Beginners Sec</h1> \
	<div> \
		<ul id="headerUrlList"> \
			<li><a href="./about.html"> About / Join </a></li> \
		</ul> \
	</div> \
	<h3>一部動作はPCのみ対応します。</h3>');
	} else {
	document.write('<h1 id="title">Beginners Sec</h1> \
	<div> \
		<ul id="headerUrlList"> \
			<li><a href="./index.html"> Home </a></li> \
			<li><a href="./about.html"> About / Join </a></li> \
			<li><a href="https://qiita.com/organizations/BeginnersSec" target="_blank"> News / Blog </a></li> \
		</ul> \
	</div>');
}