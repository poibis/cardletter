/*
* scroll action script
* */

let tween = gsap.timeline();
tween.to(".start_comment1", {y:-10, opacity: 1, duration:150} );
tween.to(".start_comment1", {opacity: 0, duration:150, delay: 100} );
tween.to(".start_comment2", {y:-10, opacity: 1, duration:150});
tween.to(".start_comment2", {opacity: 0, duration:150, delay: 100} );
tween.to(".start_comment3", {y:-10, opacity: 1, duration:150});
tween.to(".start_comment3", {opacity: 0, duration:150, delay: 100} );
tween.to(".start_comment4", {y:-10, opacity: 1, duration:150});
tween.to(".start_comment4", {opacity: 0, duration:150, delay: 100} );
tween.to(".cover_img", {scale: 0.5, duration:500});

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger_1",
    duration: 2500,
    triggerHook: "onLeave",
})
    .setTween(tween)
    .addTo(controller)
    .addIndicators({name: "set_bg_trigger_1(duration:2000)"})