var images = "<p id='img2' data-index-number='2' class='images' onclick='runImage(event)'>images 2</p>";
	images += "<p id='img1' data-index-number='1' class='images' onclick='runImage(event)'>images 1</p>";

function runImage(event){
	var pg = bySel(".pg_full") || bySel(".pg");

	if(!pg){
		var pg = createEle("div"),
	    	xOut = createEle("div"),
	    	dS = dataImages[event.path[0].dataset.indexNumber],
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