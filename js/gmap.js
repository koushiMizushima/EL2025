function show_map() {
	var latlng = new google.maps.LatLng(31.582601, 130.543710);
	var myOptions = {
		zoom: 18,
		/*拡大比率*/
		center: latlng,
		/*表示枠内の中心点*/
		mapTypeId: google.maps.MapTypeId.ROADMAP /*表示タイプの指定*/
	};
	var map = new google.maps.Map(document.getElementById('gmap'), myOptions);
	//マーカーを作成
	var marker = new google.maps.Marker({
		position: latlng, //マーカーの位置
		map: map, //表示する地図
		title: 'アース＆ライフ' //ロールオーバー テキスト
	});
	//吹き出しを作成
	var contentString = '<div id="infodiv">' +
		'<h3 class="map_title">アース＆ライフ</h3>' +
		'<p class="map_comment">鹿児島市中央町18番地1　15階</p></div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString //吹き出し内コメント
	});
	//吹き出しをオープン
	infowindow.open(map, marker);
	//マーカーをクリックすれば吹き出しが再表示
	google.maps.event.addListener(marker, 'click', function () {
		infowindow.open(map, marker);
	});
}
//MAPセンター表示
$(function () {
	show_map();

	$(window).resize(function () {
		show_map();
	});
});
