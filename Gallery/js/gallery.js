var imgList = [
	{name: "img_1.jpg", alt: ""},
	{name: "img_2.jpg", alt: ""},
	{name: "img_3.jpg", alt: ""}
];

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
	for( ; i < imgList.length; i++){
		var imgCard = "\