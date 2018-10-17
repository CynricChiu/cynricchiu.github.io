!function(){
	var m_View = document.getElementById("View");
	m_View.style.width = document.getElementsByClassName("body_container")[0].offsetWidth + 'px';
	
	var m_Title = document.getElementById("Title");
	m_Title.innerHTML += "<a id='name' href='https://github.com/cynricchiu'>Github: @Cynric</a>";
	
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
	
	//初始化底图
	function InitMap(){
		var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		Layers[LEnums.BASE_VECTOR] = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18});			//OSM矢量
		m_Map.addLayer(Layers[LEnums.BASE_VECTOR]);
	}
	function AddPoint(){
		var icon_max = L.icon({
			iconUrl: 'img/heart2.png',
			iconSize: [64*0.5, 64*0.5],
			iconAnchor: [0, 0]
		});
		var point_max = L.marker([40.296091, 116.580546],{icon: icon_max});
        m_Map.addLayer(point_max);
		point_max.bindTooltip("Max",{direction:top}).openTooltip();
		
		var icon_cynric = L.icon({
			iconUrl: 'img/heart1.png',
			iconSize: [64*0.5, 64*0.5],
			iconAnchor: [0, 0]
		});
		var point_cynric = L.marker([32.104742, 118.840643],{icon: icon_cynric});
		point_cynric.bindPopup(function (layer) {
            console.log(layer);
            var content = "<div>Cynric<div>";
            return content;
        });
        m_Map.addLayer(point_cynric);
		point_cynric.bindTooltip("Cynric").openTooltip();
		
		var icon_neko = L.icon({
			iconUrl: 'img/neko.png',
			iconSize: [64*0.5, 64*0.5],
			iconAnchor: [0, 0]
		});
		var point_neko = L.marker([32.104742, 118.844643],{icon: icon_neko});
		point_neko.bindPopup(function (layer) {
            console.log(layer);
            var content = "<div>臭鱼丸<div>";
            return content;
        });
        m_Map.addLayer(point_neko);
		//point_neko.bindTooltip("臭鱼丸").openTooltip();
		
	}
	
	function AddLine(){
		var railway_T65 = L.polyline([
			[32.092689, 118.802781],
			[32.949601, 117.384952],
			[34.271277, 117.213901],
			[37.455516, 116.29493],
			[38.315589, 116.884415],
			[39.909462, 116.433547]
		]);
		m_Map.addLayer(railway_T65);
	}
	InitMap();
	AddPoint();
	AddLine();
}()
