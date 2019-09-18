var links = "<p id='link3' data-index-number='3' class='links' onclick='runLink(event)'>link 3</p>";
	links += "<p id='link2' data-index-number='2' class='links' onclick='runLink(event)'>link 2</p>";
	links += "<p id='link1' data-index-number='1' class='links' onclick='runLink(event)'>link 1</p>";

function runLink(event){
	var pg = bySel(".pg_full") || bySel(".pg");

	if(!pg){
		var pg = createEle("div"),
	    	xOut = createEle("div"),
	    	dS = dataLinks[event.path[0].dataset.indexNumber],
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