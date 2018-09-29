!function() {
//图片列表
var images_201704 = [
	{name: "01.jpg", title: "软萌の小臭鱼丸", id: "20170401"},
	{name: "02.jpg", title: "舒服の小臭鱼丸", id: "20170402"},
	{name: "03.jpg", title: "看电视の小臭鱼丸", id: "20170403"},
	{name: "04.jpg", title: "害怕惊奇の小臭鱼丸", id: "20170404"}
];
var images_201808 = [
	{name: "01.jpg", title: "懒鬼の臭鱼丸", id: "20180801"},
	{name: "02.jpg", title: "心虚の臭鱼丸", id: "20180802"},
	{name: "03.jpg", title: "懒鬼の臭鱼丸*2", id: "20180803"}
];
var images_201809 = [
	{name: "01.jpg", title: "和奥特曼一起睡觉の臭鱼丸", id: "20180901"},
	{name: "02.jpg", title: "被奥特曼征服の臭鱼丸", id: "20180902"},
	{name: "03.jpg", title: "被奥特曼征服の臭鱼丸*2", id: "20180903"},
	{name: "04.jpg", title: "和奥特曼谈心の臭鱼丸", id: "20180904"},
	{name: "05.jpg", title: "被奥特曼偷袭の臭鱼丸", id: "20180905"},
	{name: "05.jpg", title: "被奥特曼偷袭の臭鱼丸", id: "20180905"}
];
var imgList = [
	{date: "201704", images: images_201704},
	{date: "201808", images: images_201808},
	{date: "201809", images: images_201809}
];

//组织数据
var sort_imgList = new Array();
function SortImages(){
	var i=0;
	for( ; i < imgList.length; i++){
		var j=0;
		for( ; j < imgList[i]["images"].length; j++){
			var new_image = { title: imgList[i]["images"][j].title, date: imgList[i].date ,id: imgList[i]["images"][j].id};
			sort_imgList.push(new_image);
		}
	}
}
//追加元素
function AppendHtml(elem,value){
    var node = document.createElement("div"),
        fragment = document.createDocumentFragment(),
        childs = null,
        i = 0;
    node.innerHTML = value;
    childs = node.childNodes;
    for( ; i < childs.length; i++){
        fragment.appendChild(childs[i]);
    }
    elem.appendChild(fragment);
    childs = null;
    fragment = null;
    node = null;
};
//初始化相册
function InitGallery(){
	var i=0;
	var gallery = document.getElementById("neko_gallery");
	gallery.style.width = document.getElementsByClassName("body_container")[0].offsetWidth + 'px';
	//alert(document.getElementsByClassName("body_container")[0].offsetWidth);
	for( ; i < imgList.length; i++){
		var title = imgList[i].date.substr(0,4) + "年" + imgList[i].date.substr(4,5) + "月";
		var gTitle = "<p class='gTitle'>" + title + "</p>";
		AppendHtml(gallery, gTitle);
		var gBody = "<div class='gBody'></div>";
		AppendHtml(gallery, gBody);
		var imgBlock = document.getElementsByClassName("gBody")[i];
		var j=0;
		for( ; j < imgList[i]["images"].length; j++){
			var img = "<div id='" + imgList[i]["images"][j]["id"] + "' class='imgBlock' style='background-image:url(img/" + imgList[i]["date"] + "/" + imgList[i]["images"][j].name + ");'></div>";
			AppendHtml(imgBlock, img);
		}
	}	
};
//绑定事件
var currentId,nextId,previousId;
var nextImgSrc,previousImgSrc;
var currentTitle;
//计算上下id
function ScrollId(id){
	var i=0;
	for( ; i < sort_imgList.length; i++){
		if(sort_imgList[i]["id"] == id){
			if(i==0){
				nextId = sort_imgList[i+1]["id"];
				nextImgSrc = "img/" + nextId.slice(0,6) + "/" + nextId.slice(6,8) + ".jpg" ;
				previousId = sort_imgList[i]["id"];
				previousImgSrc = "img/" + previousId.slice(0,6) + "/" + previousId.slice(6,8) + ".jpg" ;
			}
			else if(i==sort_imgList.length-1){
				nextId = sort_imgList[i]["id"];
				nextImgSrc = "img/" + nextId.slice(0,6) + "/" + nextId.slice(6,8) + ".jpg" ;
				previousId = sort_imgList[i-1]["id"];
				previousImgSrc = "img/" + previousId.slice(0,6) + "/" + previousId.slice(6,8) + ".jpg" ;
			}
			else{
				nextId = sort_imgList[i+1]["id"];
				nextImgSrc = "img/" + nextId.slice(0,6) + "/" + nextId.slice(6,8) + ".jpg" ;
				previousId = sort_imgList[i-1]["id"];
				previousImgSrc = "img/" + previousId.slice(0,6) + "/" + previousId.slice(6,8) + ".jpg" ;
			}
			break;
		}		
	}
}
//遍历寻找图片名称
function Entitle(id){
	var i=0;
	for( ; i < sort_imgList.length; i++){
		if(sort_imgList[i]["id"] == id){
			currentTitle = sort_imgList[i]["title"];
		}		
	}
}
function AddEvent(){
	var imgBlocks = document.getElementsByClassName("imgBlock");
	var outterGallery = document.getElementById("outter_gallery");
	var bigImage = document.getElementById("bigImage");
	var i=0;
	//点击放大图片
	for( ; i < imgBlocks.length; i++){
		imgBlocks[i].onclick = function(){
			outterGallery.style.display = "block";
			var img_url = this.style["background-image"];
			var img_name = this.style["background-image"];
			img_url = img_url.slice(5,img_url.length-2);
			bigImage.src = img_url ;
			bigImage.title = this.id ;
			//currentImgSrc = "img/" + this.id.slice(0,6) + "/" + this.id.slice(6,8) + ".jpg" ;
			ScrollId(this.id);
			currentId = this.id;
			//显示标题
			Entitle(currentId);
			document.getElementById("title").innerHTML = currentTitle;
		}
	}
	//点击恢复
	outterGallery.onclick = function(event){
		el = event.target;	//判断鼠标是否点击空白处
		if(el.id=="outter_gallery")
			outterGallery.style.display = "none";
	}
	//点击切换
	var nextButton = document.getElementById("next");
	nextButton.onclick = function(){
		var bigImage = document.getElementById("bigImage");
		bigImage.src = nextImgSrc;
		ScrollId(nextId);
		//更新标题
		Entitle(nextId);
		document.getElementById("title").innerHTML = currentTitle;
	}
	var previousButton = document.getElementById("previous");
	previousButton.onclick = function(){
		var bigImage = document.getElementById("bigImage");
		bigImage.src = previousImgSrc ;
		ScrollId(previousId);
		//更新标题
		Entitle(previousId);
		document.getElementById("title").innerHTML = currentTitle;
	}
	//鼠标滚轮切换
	if(outterGallery.addEventListener) {
		outterGallery.addEventListener("mousewheel", MouseWheelHandler, false);         // IE9, Chrome, Safari, Opera
		outterGallery.addEventListener("DOMMouseScroll", MouseWheelHandler, false);	  // Firefox
	}
	else 
		outterGallery.attachEvent("onmousewheel", MouseWheelHandler);    			// IE 6/7/8
	
	function MouseWheelHandler(e) {
		var e = window.event || e; 	// old IE support
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		if(delta<0){//向下滚动
			var bigImage = document.getElementById("bigImage");
			bigImage.src = nextImgSrc;
			ScrollId(nextId);
			//更新标题
			Entitle(nextId);
			document.getElementById("title").innerHTML = currentTitle;
		}
		if(delta>0){//向上滚动
			var bigImage = document.getElementById("bigImage");
			bigImage.src = previousImgSrc ;
			ScrollId(previousId);
			//更新标题
			Entitle(previousId);
			document.getElementById("title").innerHTML = currentTitle;
		}
	}
}
SortImages();
InitGallery();
AddEvent();
console.log("这是相册");
}();
