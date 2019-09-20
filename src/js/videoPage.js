var videos = "<p id='vid2' data-index-number='2' class='videos' onclick='runVideo(event)'>GIF's</p>";
	videos += "<p id='vid1' data-index-number='1' class='videos' onclick='runVideo(event)'>SCIENCE</p>";

function runVideo(event){
	var pg = bySel(".pg_full") || bySel(".pg");

	if(!pg){
		var pg = createEle("div"),
	    	xOut = createEle("div"),
	    	dS = dataVideos[event.path[0].dataset.indexNumber],
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

