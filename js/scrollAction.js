/*
* scroll action script
* */

let tween = gsap.timeline();
tween.to(".start_comment0", {opacity: 0, duration:150} );
tween.to(".start_comment1", {y:-10, opacity: 1, duration:600, delay: 1000} );
tween.to(".start_comment1", {opacity: 0, duration:600, delay: 1000} );
tween.to(".start_comment2", {y:-10, opacity: 1, duration:600});
tween.to(".start_comment2", {opacity: 0, duration:600, delay: 1000} );
tween.to(".start_comment3", {y:-10, opacity: 1, duration:600});
tween.to(".start_comment3", {opacity: 0, duration:600, delay: 1000} );
tween.to(".start_comment4", {y:-10, opacity: 1, duration:600});
tween.to(".start_comment4", {opacity: 0, duration:600, delay: 1000} );
tween.to(".start_comment5", {y:-10, opacity: 1, duration:600});
tween.to(".start_comment5", {opacity: 0, duration:600, delay: 1000} );
tween.to(".start_comment6", {y:-10, opacity: 1, duration:600});
tween.to(".start_comment6", {opacity: 0, duration:600, delay: 1000} );
tween.to(".start_comment7", {y:-10, opacity: 1, duration:3000});
tween.to(".start_comment8", {opacity: 1, duration:3000, delay: 3000});
tween.to(".start_comment7", {opacity: 0, duration:3000, delay: 3000} );
tween.to(".info_box", {visibility: "hidden", duration:1, delay: 1} );
tween.to(".cover_img", {scale: 0.75, filter: "brightness(100%)", duration:5000});
tween.to(".start_comment_final", {y:-20, opacity: 1, duration:1500, delay: 300} );

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger_1",
    duration: 6000,
    triggerHook: "onLeave",
})

    .setPin(".pin_div", {pushFollowers:true})
    .setTween(tween)
    .addTo(controller)
    .addIndicators({name: "set_bg_trigger_1(duration:5000)"})