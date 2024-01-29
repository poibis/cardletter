 mapContainer = document.getElementById('navi_map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.56020032129378, 126.83930631305121), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
    };

const map = new kakao.maps.Map(mapContainer, mapOption);

// 지도 이동을 막습니다.
map.setDraggable(false);

// 마커가 표시될 위치입니다
const markerPosition  = new kakao.maps.LatLng(37.56020032129378, 126.83930631305121);

// 마커를 생성합니다
const marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding:5px; width:145px; text-align:center;">더베뉴지 서울<br>강서구 강서로 388</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition,
    content : iwContent
});

// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

 // 버튼 클릭에 따라 지도 이동 기능을 막거나 풀고 싶은 경우에는 map.setDraggable 함수를 사용합니다
 function setDraggable(draggable) {
     // 마우스 드래그로 지도 이동 가능여부를 설정합니다
     map.setDraggable(draggable);

     $(".map_toggled").removeClass('toggle_selected');
     $(this).addClass('toggle_selected');
 }