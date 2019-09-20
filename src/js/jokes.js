var joke = "<p id='joke2' data-index-number='2' class='jokes' onclick='runJoke(event)'>Joke 2</p>";
	joke += "<p id='joke1' data-index-number='1' class='jokes' onclick='runJoke(event)'>Joke 1</p>";

function runJoke(event){
	var pg = bySel(".pg_full") || bySel(".pg");

	if(!pg){
		var pg = createEle("div"),
	    	xOut = createEle("div"),
	    	dS = dataJokes[event.path[0].dataset.indexNumber],
	    	title = createEle("h3"),
	    	description = createEle("div");
	    	
	   	description.innerHTML = dS.des;
	   	description.className = "description";

		title.innerHTML = dS.title;
		title.className = "pod_title";

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