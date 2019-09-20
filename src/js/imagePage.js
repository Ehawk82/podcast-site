var images = "<p id='img2' data-index-number='2' class='images' onclick='runImage(event)'>HOMEGROWN MEMES</p>";
	images += "<p id='img1' data-index-number='1' class='images' onclick='runImage(event)'>GENERAL MEMES</p>";

function runImage(event){
	var pg = bySel(".pg_full") || bySel(".pg");

	if(!pg){
		var pg = createEle("div"),
	    	xOut = createEle("div"),
	    	dS = dataImages[event.path[0].dataset.indexNumber],
	    	title = createEle("h3"),
	    	description = createEle("div");
	    var p = dS.items[0];

	   	description.innerHTML = dS.des;
	   	description.className = "description";

		title.className = "pod_title";
		title.innerHTML = dS.title;

	    xOut.className = "xOut";
	    xOut.innerHTML = "◀";
	    xOut.onclick = xOutFunc(event,pg);

		pg.className = "pg";
		pg.append(xOut,title,description);

		for (var key in p) {
		    if (p.hasOwnProperty(key)) {
		    	var myItems = createEle("img");

		    	myItems.src = p[key];
		    	myItems.className = "myItems";
		    	myItems.onclick = blowupImage(pg,myItems,key);
		    	pg.append(myItems);
		    }
		}

		body.append(pg);
		
	    setTimeout(function() {
	    	makeFull(pg);
	    }, 10);

	} else { return false }
};

function blowupImage(pg,myItems,key){
	return function(){
	var newPg = bySel(".newPg") || bySel(".newPg_full");
	takeFull(pg);
	if(!newPg){
		var tmp = myItems.getAttribute('src').split('/'),
		    image_name = tmp[4].split('.')[0].split('_thumb')[0],
		    newPgContain = createEle("div");
		
			var newPg = createEle("img");

			newPg.className = "newPg";
			newPg.onclick = xOutImg(newPgContain,pg);
			newPg.src = "src/assets/" + image_name + ".png";

			newPgContain.className = "newPgContain";
			newPgContain.append(newPg);

			pg.append(newPgContain);
			setTimeout(function(){
				makeFull(newPgContain);
			},10);
		} else {
			return false;
		}
	}
};

function xOutImg(newPgContain,pg){
	return function(){
		takeFull(newPgContain);
		setTimeout(function(){
			makeFull(pg);
			newPgContain.remove();
		},666);
	}
};