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
