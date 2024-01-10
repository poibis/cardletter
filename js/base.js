// domReady
$(function() {

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
