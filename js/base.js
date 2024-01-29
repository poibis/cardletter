// domReady
$(function() {

    /*// mobile only check
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // 안드로이드 아이폰을 검사해 체크
    if(!isMobile) {
        location.href="https://www.naver.com";
    }*/

    /* start at top 0 */
    /*window.scrollTo(0,0);*/

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

    /**
     * ? preload image cache 처리
     *
    **/
    let imgSrcs = [];
    //const IMG_PRE_URL = "https://www.jswjake.xyz/carletter/img/sequence";
    const IMG_PRE_URL = "./img/sequence";
    for (let i = 1; i < 141; i++) {
        imgSrcs.push(`${IMG_PRE_URL}/`+i+`.jpg`);
    }

    function preloadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
        })
    }

    async function preloadImages() {
        const startTime = new Date().getTime();
        await
            Promise.all(imgSrcs.map(preloadImage));
        const endTime = new Date().getTime();
        console.log($('.time').html(endTime - startTime));
    }

    preloadImages();

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
        onSelect: function(e){
            $(this).datepicker('setDate', newDate);
            $('.ui-datepicker-year').text($('.ui-datepicker-year').text()+'년');
        }
    }).datepicker( "setDate", newDate);


    $('.ui-datepicker-year').after('년');
    $('.ui-datepicker-month').attr('class','txt_highlight');


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


    $('.map_toggled').on('click', (e)=>{
        $(".map_toggled").removeClass('toggle_selected');
        let mapSelected = e.target.id;
        $("#"+mapSelected).addClass('toggle_selected');
    })

    /**
    * ? easter_egg
    * */
    let eggCount = 0;
    $('.easter_egg').on('click', ()=>{
        eggCount += 1;
        console.log(eggCount);
    })
});

// windowLoad
$(window).on('load',function() {
    /*$('.sakura_cover').sakura();*/
});

/*$('#stop_sakura').on('click', function() {
    $('body').sakura('stop');
    $('body').sakura('stop');
});*/

//  keydown block
/*
$(document).keydown(function (e) {
    if(e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) ) {
        return false;
    }
})*/

$(document).on('change', '.ui-datepicker-year', function(e) {
    const year = $('.ui-datepicker-year option:selected').text();
    $('.ui-datepicker-year').text(year);
})
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


console.log(`
%c     ██ ███████ ██     ██    ██     ██  ██████  ██████  ██      ██████  
%c     ██ ██      ██     ██    ██     ██ ██    ██ ██   ██ ██      ██   ██ 
%c     ██ ███████ ██  █  ██    ██  █  ██ ██    ██ ██████  ██      ██   ██ 
%c██   ██      ██ ██ ███ ██    ██ ███ ██ ██    ██ ██   ██ ██      ██   ██ 
%c █████  ███████  ███ ███      ███ ███   ██████  ██   ██ ███████ ██████  
                                                                                                                                            

`, "color:#22577A", "color:#38A3A5", "color:#57CC99", "color:#80ED99", "color:#99FFED",);

