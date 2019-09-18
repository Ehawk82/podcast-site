var extras1 = "<p id='ex8' data-index-number='8' class='extras' onclick='runExtras(event)'>MILKWEED PROJECT</p>";
	extras1	+= "<p id='ex7' data-index-number='7' class='extras' onclick='runExtras(event)'>CONTRIBUTORS</p>";

var extras2 = "<p id='ex6' data-index-number='6' class='extras' onclick='runExtras(event)'>CUSTOM MASKS</p>";
    extras2 += "<p id='ex5' data-index-number='5' class='extras' onclick='runExtras(event)'>SPONSORED BOOKS</p>";

var extras3 = "<p id='ex4' data-index-number='4' class='extras' onclick='runExtras(event)'>GAMES</p>";
    extras3 += "<p id='ex3' data-index-number='3' class='extras' onclick='runExtras(event)'>PRODUCT REVIEWS</p>";

var extras4 = "<p id='ex2' data-index-number='2' class='extras' onclick='runExtras(event)'>HOW TO MAKE SOLAR PANELS</p>"
	extras4 += "<p id='ex1' data-index-number='1' class='extras' onclick='runExtras(event)'>FAVORITE SWITCHES</p>";
	extras4 += "<p id='ex0' data-index-number='0' class='extras' onclick='runExtras(event)'>ATWA</p>";

function runExtras(event){
	var pg = bySel(".pg_full") || bySel(".pg");

	if(!pg){
		var pg = createEle("div"),
	    	xOut = createEle("div"),
	    	dS = dataExtras[event.path[0].dataset.indexNumber],
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