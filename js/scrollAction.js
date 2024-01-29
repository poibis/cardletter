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
/*tween.to(".start_comment6", {y:-10, opacity: 1, duration:600});
tween.to(".start_comment6", {opacity: 0, duration:600, delay: 1000} );*/
tween.to(".start_comment7", {y:-10, opacity: 1, duration:3000});
tween.to(".start_comment8", {opacity: 1, duration:3000, delay: 3000});
tween.to(".start_comment7", {opacity: 0, duration:3000, delay: 3000} );
tween.to(".info_box", {visibility: "hidden", duration:1, delay: 1} );
/*tween.to(".cover_img", {filter: "brightness(100%)", duration:3000});*/
tween.to(".cover_div", {width: '90%', filter: "brightness(100%)", duration:3000});
/*tween.to(".start_comment_final", {y:-20, opacity: 1, duration:1500, delay: 300} );*/

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger_1",
    duration: 6000,
    triggerHook: "0",
})

    .setPin(".pin_div", {pushFollowers:true})
    .setTween(tween)
    .addTo(controller)
    .addIndicators({name: "set_bg_trigger_1(duration:5000)"})

const topPin    = $('#top_pin').offset().top;
const middlePin    = $('#middle_pin').offset().top;

// define images
let images = [];
for(let i=0; i<51; i++) {
    i = i<10 ? '0'+i : i;
    images.push('https://plant-design-src.s3.ap-northeast-2.amazonaws.com/images/pc/snapshot/package/PACKAGE_000'+i+'.png');
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
    duration: 1000,
    triggerHook: "0.3",
})
    .setTween(packageObj)
    .addIndicators({name: "image sequence (duration:1000)"})
    .addTo(controller);

$(window).scroll(function(){
    let scrollPosition = $(this).scrollTop();

    if(scrollPosition > topPin) {
        gsap.to("#top_pin", { position: 'fixed', top: 0, width: "100%", padding: "0 0 0 0", borderRadius: "0px", boxShadow:"", duration: 0.1, zIndex: 3 });
    } else {
        gsap.to("#top_pin", { position: '', width: "90%", padding:"5px 8px 5px 8px", borderRadius: "1px solid #FFFFFF", boxShadow:"0 0 10px 10px #FFFFFF", duration: 0.1, zIndex: 3 });
    }

    if(scrollPosition + 120 > middlePin) {
        gsap.to("#middle_pin", { position: 'fixed', top: 61, width: "100%", padding: "0 0 0 0", borderRadius: "0px", boxShadow:"", duration: 0.1, zIndex: 4 });
    } else {
        gsap.to("#middle_pin", { position: '', width: "90%", padding:"5px 8px 5px 8px", borderRadius: "1px solid #FFFFFF", boxShadow:"0 0 10px 10px #FFFFFF", duration: 0.1, zIndex: 4 });
    }
})

