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
tween.to(".info_box", {visibility: "hidden", duration:1, delay: 1} );
tween.to(".cover_div", {width: '90%', filter: "brightness(100%)", duration:1500});

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger_1",
    duration: 1500,
    triggerHook: "0",
})

    .setPin(".pin_div", {pushFollowers:true})
    .setTween(tween)
    .addTo(controller)
    //.addIndicators({name: "set_bg_trigger_1(duration:1500)"})

// mode version
let tween_mode = gsap.timeline();
tween_mode.to(".cover_div_1", {width: '90%', duration:800});

new ScrollMagic.Scene({
    triggerElement: "#trigger_1-1",
    duration: 300,
    triggerHook: "0",
})
    .setPin(".pin_div_1", {pushFollowers:true})
    .setTween(tween_mode)
    .addTo(controller)
// mode version

const topPin    = $('#top_pin').offset().top;
const middlePin    = $('#middle_pin').offset().top;

// define images
let images = [];
for(let i=1; i<141; i++) {
    //i = i<10 ? '0'+i : i;
    images.push('./img/sequence/'+i+'.jpg');
}

// TweenMax can tween any property of any object. We use this object to cycle through the array
let obj = {curImg: 0};

// create tween
let imgTween = gsap.timeline();

const packageObj = imgTween.to(obj, 0.1,
    {
        curImg: images.length - 1,	        // animate proper curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 0,							// repeat 0 times
        immediateRender: true,			    // load first image automatically
        //ease: Linear.easeNone,			// show every image the same amount of time
        onUpdate: function () {
            $("#myimg").attr("src", images[obj.curImg]); // set the image source
        }
    },
);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger_2",
    duration: 600,
    triggerHook: "0.5",
})
    .setTween(packageObj)
    //.addIndicators({name: "image sequence (duration:600)"})
    .addTo(controller);

$(window).scroll(function(){
    let scrollPosition = $(this).scrollTop();
    $('#scrolltop').html(scrollPosition);
    $('#middletop').html(middlePin);
    if(scrollPosition > topPin + 50) {
        gsap.to("#top_pin", { position: 'fixed', top: 0, width: "100%", padding: "0 0 0 0", borderRadius: "0px", boxShadow:"", duration: 0.1, zIndex: 3 });
        $("#pin_top").css('display','block');
        $('.scroll-down').css('display','none');
    } else {
        gsap.to("#top_pin", { position: '', width: "90%", padding:"5px 8px 5px 8px", borderRadius: "1px solid #FFFFFF", boxShadow:"0 0 10px 10px #FFFFFF", duration: 0.1, zIndex: 3 });
        $("#pin_top").css('display','none');
        $('.scroll-down').css('display','block');
    }

    if(scrollPosition > middlePin) {
        gsap.to("#middle_pin", { position: 'fixed', top: 61, width: "100%", padding: "0 0 0 0", borderRadius: "0px", boxShadow:"", duration: 0.1, zIndex: 4 });
        $("#pin_middle").css('display','block');
    } else {
        gsap.to("#middle_pin", { position: '', width: "90%", padding:"5px 8px 5px 8px", borderRadius: "1px solid #FFFFFF", boxShadow:"0 0 10px 10px #FFFFFF", duration: 0.1, zIndex: 4 });
        $("#pin_middle").css('display','none');
    }
})

