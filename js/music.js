!function() {
	var m_songplayer = document.createElement("iframe");
	m_songplayer.className = "songplayer";
	var songSrc = "//music.163.com/outchain/player?type=2&id=34014481&auto=1&height=66";
	m_songplayer.setAttribute('src', songSrc);
	m_songplayer.setAttribute('width', 330);
	m_songplayer.setAttribute('height', 320);
	m_songplayer.setAttribute('frameborder', "no");
	document.getElementsByTagName("body")[0].appendChild(m_songplayer);
}();
