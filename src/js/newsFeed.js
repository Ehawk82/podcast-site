newsFeed = "<p class='articles' onclick='runArticle(this)'>S1E3</p>";
newsFeed += "<p class='articles' onclick='runArticle(this)'>S1E2</p>";
newsFeed += "<p class='articles' onclick='runArticle(this)'>S1E1</p>";

function runArticle(z){
	var articles = bySelAll(".articles");

	z.onclick = null;
	console.log(z.innerHTML);
};