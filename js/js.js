(function(){
	function GetId(name){
		return document.getElementById(name);
	};
	var img_with = 110;
	var left = 0;
	var m = 0;
	var pptLi = document.getElementById("image").getElementsByTagName("li");
	var pptLinum = pptLi.length - 5;
	var x = 0;

	// small picture slide
	function change_left(){
		var l = GetId("image").style.left;
		if(l = " "){
			left = 0;
		}
		else{
			left = l;
		}
	};
	change_left();
	var smallright = GetId("smallright"); 
	if (smallright.addEventListener) {
		smallright.addEventListener("click",function(){
			slideright();
		}, false);
	}else{
		smallright.attachEvent("onclick", function(){
			slideright();
		});
	};
	function slideright(){
		if(x == pptLinum){

		}else{
			left++;
			GetId("image").style.left = -left + "px";
			var t = setTimeout(function(){
				slideright();
			},5);
			if(left % img_with == 0){
				clearTimeout(t);
				x++;
			}
		}
	};

	var smallleft = GetId("smallleft"); 
	if (smallleft.addEventListener) {
		smallleft.addEventListener("click",function(){
			slideleft();
		}, false);
	}else{
		smallleft.attachEvent("onclick", function(){
			slideleft();
		});
	};
	function slideleft(){
		if(x == 0){

		}else{
			left--;
			if(x == 0){
				return;
			};
			GetId("image").style.left = -left + "px";
			var t = setTimeout(function(){
				slideleft();
			},5);
			if(left % img_with == 0){
				clearTimeout(t);
				x--;
			}
		}
	};
	// small picture slide
	// big picture change
	function bigPicture(){
		var gallery = GetId("image");
		var links = gallery.getElementsByTagName("img");
		function showPic(whichpic) {
			whichpic.setAttribute("id", "photo_on");
			var source = whichpic.getAttribute("src");
			var placeholder = document.getElementById("placeholder");
			placeholder.setAttribute("src",source);
			if (whichpic.getAttribute("title")) {
				var text = whichpic.getAttribute("title");
			} else {
				var text = "";
			};
			var description = document.getElementById("description");
			if (description.firstChild.nodeType == 3) {
				description.firstChild.nodeValue = text;
			}
			return false;
		};
		function lastPic(i){
			$("#turnleft").click(function(){
				if(i != 0){
					$(links[i - 1]).click();
				}
			});
		};
		function prepareGallery(){
			for(var i = 0 ; i < links.length; i++){
				links[i].onclick = function(){
					for(var n = 0; n < i;n++){
						if(n != i){
							links[n].setAttribute("id", "");
						};
					};
					return showPic(this);
				};
			}
		}
		$("#turnright").bind("click",function(){
			$("#photo_on").parent().next('li').find('img').click()
		});
		$("#turnleft").bind("click",function(){
			$("#photo_on").parent().prev('li').find('img').click()
		});
		function addLoadEvent(func) {
			var oldonload = window.onload;
			if (typeof window.onload != 'function') {
				window.onload = func;
			} else {
				window.onload = function() {
					oldonload();
					func();
				}
			}
		}
		addLoadEvent(prepareGallery);

	};
	bigPicture();
})();
