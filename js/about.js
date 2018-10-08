!function(){
	var m_View = document.getElementById("View");
	m_View.style.width = document.getElementsByClassName("body_container")[0].offsetWidth + 'px';
	
	var m_Title = document.getElementById("Title");
	m_Title.innerHTML += "<a id='name' href='https://github.com/cynricchiu'>Github: @Cynric</a>";
	
	//初始化底图
	function InitMap(){
		var Layers = new Array();
		var m_Map = L.map('MapView', {
			center: [35.848841, 116.450574],
			zoom: 6,
			minZoom: 6,
			maxZoom: 15,
			renderer: L.canvas(),
			attributionControl: false,          //右下角logo
			zoomControl: false                  //左上角缩放
		});
		var LEnums = {
			BASE_VECTOR: 0
		};
		var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		Layers[LEnums.BASE_VECTOR] = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18});			//OSM矢量
		m_Map.addLayer(Layers[LEnums.BASE_VECTOR]);
	}
	
	InitMap();
}()
