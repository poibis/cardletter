// domReady
$(function() {

    /*// mobile only check
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // 안드로이드 아이폰을 검사해 체크
    if(!isMobile) {
        location.href="https://www.naver.com";
    }*/

    $("body").css("display","none").fadeIn(3500);

    const audioSource = "./resource/Liebeheim.mp3";
    const bg_audio = new Audio();
    bg_audio.src            = audioSource;
    bg_audio.loop           = true;
    $('.sakura_cover').sakura();

    $('.vol_control').click(function(){
        const volume = document.querySelector(".vol_control");
        if(volume.dataset.icon === "ON") {
            volume.dataset.icon = "OFF";
            $(this).attr('src',"./img/dist/mute.png");
            bg_audio.pause();
        } else {
            volume.dataset.icon = "ON";
            $(this).attr('src',"./img/dist/volume.png");
            bg_audio.play();
        }

    })

    const newDate = new Date(2024, 2, 30,0 ,0, 0);

    $(".datepicker").datepicker({
        dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        prevText: '',
        nextText: '',
        firstDay : 0,
        showMonthAfterYear:true,
        defaultDate: newDate,
    }).datepicker( "setDate", newDate);

    $('.ui-datepicker-year').text($('.ui-datepicker-year').html()+'년');


    function getClock() {
        const date = new Date();

    }


    function diffDay() {
        let chkTime = setInterval(function() {
            const masTime = new Date("2024-03-30 17:20:00");
            const todayTime = new Date();

            const diff = masTime - todayTime;

            const diffDay = Math.floor(diff / (1000*60*60*24));
            const diffHour = Math.floor((diff / (1000*60*60)) % 24);
            const diffMin = Math.floor((diff / (1000*60)) % 60);
            const diffSec = Math.floor(diff / 1000 % 60);

            $(".d-day").text( `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초 뒤`);

            if(diff < 0) {
                clearInterval(chkTime);
                $(".d-day").text( `모두 감사합니다.`);
            }
        })

    }
    diffDay();

    const mapContainer = document.getElementById('navi_map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.56020032129378, 126.83930631305121), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커가 표시될 위치입니다
    const markerPosition  = new kakao.maps.LatLng(37.56020032129378, 126.83930631305121);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var iwContent = '<div style="padding:5px; text-align:center;">더베뉴지 서울<br>강서구 강서로 388</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition,
        content : iwContent
    });

// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
});

// windowLoad
$(window).on('load',function() {
    $('.sakura_cover').sakura();
});

//  keydown block
/*
$(document).keydown(function (e) {
    if(e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) ) {
        return false;
    }
})*/

// wow js
new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset: 300,
        mobile: true,
        live: true
    }
).init();

