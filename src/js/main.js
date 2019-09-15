var myUI, pageContent;


pageContent = [
	"<div><div id='leftPanel'><h1>NEWS FEED</h1><div>" + newsFeed + "</div></div><div id='rightTopPanel'><h3>LINKS</h3><div>" + links + "</div></div><div id='rightMiddlePanel'><h3>JOKES</h3><div>" + joke + "</div></div><div id='rightBottomPanel'><h3>PORTAL</h3><div>" + portal + "</div></div></div>",
	"<div><div id='leftPanel'><h1>IMAGES</h1><div>" + images + "</div></div><div id='leftPanel'><h1>VIDEOS</h1><div>" + videos + "</div></div>",
	"<div><div id='rightTopPanel'><h3>LINKS</h3><div>" + extras1 + "</div></div><div id='rightMiddlePanel'><h3>JOKES</h3><div>" + extras2 + "</div></div><div id='rightMiddlePanel'><h3>JOKES</h3><div>" + extras3 + "</div></div><div id='rightBottomPanel'><h3>PORTAL</h3><div>" + extras4 + "</div></div></div>",
	"<div><div id='leftPanel'><h1>CREDITS</h1><div>" + credits + "</div><div id='leftPanel'><h1>LICENSE</h1><div>" + license + "</div></div>"
];

myUI = {
	makeRight: function(x){return x.className = x.className + "_right" },
    takeRight: function(x){ var y,z; return y = x.className.split('_right'), z = y[0], x.className = z },
    makeLeft: function(x){return x.className = x.className + "_left" },
    takeLeft: function(x){ var y,z; return y = x.className.split('_left'), z = y[0], x.className = z },
	init: function(){
		myUI.load();
	},
	load: function(e){
		var container = createEle("div"),
		    navR = createEle("div"),
		    navL = createEle("div"),
		    section = createEle("section"), pages = 4, currentPage = 0,
		    footer = createEle("footer");

		LSinit("currentPage", currentPage);
        saveLS("currentPage", currentPage);
		for (var i = 0; i < pages; i++) {
			var page = createEle("div");

			page.id = "page" + i;
			page.className = "page_right";
		    

			if(i === 0){
				page.className = "page_full";
				
			}
			section.className = "sections";
			section.append(page);
			page.innerHTML = pageContent[i];
		}

		navR.innerHTML = "▶";
		navR.id = "navR";
		navR.className = "navs";
		navR.onclick = myUI.navRight(navL,navR);

		navL.innerHTML = "◀";
		navL.className = "navs";
		navL.id = "navL";
		makeLock(navL);
		navL.onclick = myUI.navLeft(navL,navR);

		footer.innerHTML = "Ehawk LLC &copy; 2020";

		container.append(navL,navR,section,footer);

		body.append(container);

		/* ---- */
		//myUI.swiper(section, e);
		/* ---- */
	},
	navLeft: function(navL,navR){
		return function(){
			var currentPage = parseLS("currentPage");

			if(currentPage > 0) {
				var thisPage = bySel("#page" + currentPage);
				takeFull(thisPage);
				myUI.makeRight(thisPage);
				currentPage--;
				saveLS("currentPage",currentPage);
				var nextPage = bySel("#page" + currentPage);
				myUI.takeLeft(nextPage);
				makeFull(nextPage);

				if(currentPage === 3) {
					makeLock(navR);
				} else {
					takeLock(navR);
				}
				if(currentPage < 1){
				    makeLock(navL);
				} else {
					takeLock(navL);
				}

			}
		}
	},
	navRight: function(navL,navR){
		return function(){
			var currentPage = parseLS("currentPage");
			if(currentPage < 3) {
				var thisPage = bySel("#page" + currentPage);
				takeFull(thisPage);
				myUI.makeLeft(thisPage);
				currentPage++;
				saveLS("currentPage",currentPage);
				var nextPage = bySel("#page" + currentPage);
				myUI.takeRight(nextPage);
				makeFull(nextPage);
			
				if(currentPage > 0) {
					takeLock(navL);
				} else {
					makeLock(navL);
				}
				if(currentPage === 3){
				    makeLock(navR);
				} else {
					takeLock(navR);
				}
				
			}
		}
	}
};

window.onload = function(){
		myUI.init();
}