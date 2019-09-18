var newsFeed = "<p id='s1e5' data-index-number='5' class='articles' onclick='runArticle(event)'>S1E5</p>";
	newsFeed += "<p id='s1e4' data-index-number='4' class='articles' onclick='runArticle(event)'>S1E4</p>";
	newsFeed += "<p id='s1e3' data-index-number='3' class='articles' onclick='runArticle(event)'>S1E3</p>";
	newsFeed += "<p id='s1e2' data-index-number='2' class='articles' onclick='runArticle(event)'>S1E2</p>";
	newsFeed += "<p id='s1e1' data-index-number='1' class='articles' onclick='runArticle(event)'>S1E1</p>";

function runArticle(event){
	var pg = bySel(".pg_full") || bySel(".pg");

	if(!pg){
		var pg = createEle("div"),
	    	xOut = createEle("div"),
	    	dS = dataSet[event.path[0].dataset.indexNumber],
	    	title = createEle("h3"),
	    	description = createEle("div");

	   	description.innerHTML = dS.des;
	   	description.className = "description";

		title.className = "pod_title";
		title.innerHTML = dS.title;

	    xOut.className = "xOut";
	    xOut.innerHTML = "◀";
	    xOut.onclick = xOutFunc(event,pg);

		pg.className = "pg";
		pg.append(xOut,title,description);

		body.append(pg);
		
	    setTimeout(function() {
	    	makeFull(pg);
	    }, 10);
	} else { return false }
};
function xOutFunc(event,pg){
	return function(){
		takeFull(pg);
		setTimeout(function(){
			pg.remove();
		},666);
	};
};