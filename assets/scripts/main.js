/********************************************************************************

 TABLE OF CONTENTS

 WINDOW
 Open window
 Close window
 FLOATING LABEL
 CHECK VIEWPORT
 SCROLL FUNCTIONS
 ONCLICK
 TESTIMONIAL SLIDER

 ********************************************************************************/

/********************************************************************************

 Preloader

 ********************************************************************************/

/*! pace 1.0.0 */

/********************************************************************************
 Global Vars
 ********************************************************************************/

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

/********************************************************************************
 Open window
 ********************************************************************************/
$(document).on('click', '.btn-wdw', function(){
    //set all windows to close
    $('.wdw').removeClass('open');
    //open the target window
    var wdwClassToOpen = this.id; //get the id
    console.log(wdwClassToOpen);
    var wdwSelector = $('.'+wdwClassToOpen);
    //open matching window
    wdwSelector.addClass('open');

    //if there is a halfwidth image, animate it
    $('.'+wdwClassToOpen + ' .image-half-width').addClass('animated slideInLeft');
});

/********************************************************************************
 Close window
 ********************************************************************************/

$(document).on('click', '.btn-close', function(){
    // //get the parent class which is not wdw
    // var wdwClassList = this.parentNode.classList;
    // var wdwClassToClose ="";
    //
    // for(var i = 0; i < wdwClassList.length; i++){
    //     if (wdwClassList[i].match("^wdw-")) { // class begins with wdw-
    //         wdwClassToClose = wdwClassList[i]; //save this class
    //     }
    // }
    //
    // //close wdw with matching class
    // $('.'+wdwClassToClose).removeClass('open');

    // $(this).parent().removeClass('open');
    $(this).parent().fadeOut();
    $('body, html').removeClass('no-scroll');
    // $('html').removeClass('no-scroll');

});

/********************************************************************************

 FLOATING LABEL

 ********************************************************************************/
//add active class to label on focus of input
$(document).on('click', '.floating-label-input', function(){
    $( this ).siblings( "label" ).addClass('active');
});

$(document).on('click', '.floating-label', function(){
    $( this ).addClass('active');
    $( this ).siblings( ".floating-label-input" ).focus();
});



/* FORM LABELS FLOAT WHEN INPUT != EMPTY */
//check once immediately, then setInterval
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

function fnCheckInputEmpty() {
    var sAllLabels = $(".floating-label");
    //loop through every element with class .floating-label
    sAllLabels.each(function() {
        var hasValue = $(this).val().length > 0;//Normal
        if(!hasValue){
            if(is_chrome)
            {
                hasValue = $(":-webkit-autofill", this).length > 0;//Chrome
            }

        }
        if (hasValue) {
            $(this).siblings( "label" ).addClass('active');
        }
    });
}

fnCheckInputEmpty();
setInterval(fnCheckInputEmpty, 1000);

$('.floating-label-input').blur(function()
{
    if( !$(this).val() ) {
        $(this).siblings( "label" ).removeClass('active');
    }else{
        $(this).siblings( "label" ).addClass('active');
    }
});


/********************************************************************************

 CHECK VIEWPORT

 ********************************************************************************/

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

/********************************************************************************

 Skills bar animation

 ********************************************************************************/

function fnAnimateSkills(){
    $( ".skill-bar" ).each(function() {
        var singleElement = $(this);
        if(singleElement.isInViewport()){

            //only if class is not added yet
            if(!singleElement.hasClass('bar-animation')){
                var sMarker = singleElement.siblings('.marker');
                var sMarkerPercentageElement = sMarker.find('.marker-percentage');
                var iPercentage = parseInt(singleElement.data("percentage"));
                var sPercentage = iPercentage + '%';
                //100% duration = 2000ms
                var iDuration = (iPercentage / 100)*2000;

                //animate bar width
                singleElement.animate({
                        width: sPercentage
                },
                    {
                        duration: iDuration
                    });

                sMarker.show();
                sMarker.animate({
                        left: sPercentage
                    },
                    {
                        duration: iDuration,
                        step: function(now, fx){
                            var data = Math.round(now);
                            if(data>0){
                                sMarkerPercentageElement.text(data + '%');
                            }

                        }
                    });

                //add bar animation class to  element, so animation will run once
                singleElement.addClass('bar-animation');
            }

        }
    });
}

/********************************************************************************

 SCROLL FUNCTIONS

 ********************************************************************************/

var windowHeight = $(window).height();   // Get the window height.


var sUpBlueprint = '<div id="up-button"><img src="dist/images/upretina.png"></div>';
var bUpAdded = false;

function fnUpButton(that) {
    if ($(that).scrollTop() > (windowHeight) ) {
        if(!bUpAdded){
            // add blue print, only once
            $('body').append(sUpBlueprint);

            bUpAdded=true;
        }
        // fade in up
        $('#up-button').fadeIn();
    }else{
        // fade out up
        $('#up-button').fadeOut();
    }
}

function fnManipulateScrollSpeed(that) {
    //for the ones that aren't transformed to start with
    var elementToAnimate = $('[data-scroll-speed]'),
        sWindow = $(that);

    var scrollTop = sWindow.scrollTop();

    elementToAnimate.each(function() {
        var singleElement = $(this),
            scrollspeed = parseInt(singleElement.data("scroll-speed")),
            val = -scrollTop / scrollspeed;

        // var sOriginalTransformVal = singleElement.css('transform').split(",");
        // console.log(sOriginalTransformVal);

        singleElement.css("transform", "translateY(" + val + "px)");

    });



    //for elements that have transform
    var topElements = $('[data-scroll]');
    var i = 0;
    topElements.each(function(){

       var topElement = $(this),
           scrollVal = parseInt(topElement.data("scroll")),
           val = (-scrollTop / scrollVal);

        if (!bArrayFilled){
            var sInitialTopValPx = topElement.css('top');
            var sInitialTopVal = sInitialTopValPx.replace('px','');
            var iInitialTopVal = parseInt(sInitialTopVal);
            aInitialTopVal.push(iInitialTopVal);
            bArrayFilled = true;
        }

        var iOldTopVal = aInitialTopVal[i];
        var iNewTopVal = iOldTopVal + val;
        var sNewTopVal = iNewTopVal + 'px';
        topElement.css("top", sNewTopVal);

    });


}

var bArrayFilled = false;
var aInitialTopVal = [];

var bArrowGone = false;

function fnAnimateArrow(that) {
    var sWindow = $(that);

    var iScrollTop = sWindow.scrollTop();
    var sArrow = $('#front-arrow');

    if(iScrollTop > (windowHeight/10) ){

        if(!bArrowGone){
            sArrow.removeClass('animate-bounce');
            setTimeout(function(){
                sArrow.addClass('arrow-animation');
            },100);
            bArrowGone = true;
        }

    }else{

        if(bArrowGone){
            sArrow.removeClass('arrow-animation');
            bArrowGone = false;
        }
    }
}


$(document).on("scroll", function () { // Do this on scroll in .wdw
    fnUpButton(this);
    fnAnimateSkills();
    fnAnimateArrow(this);
    if(!isMobile){
        fnManipulateScrollSpeed(this);
    }
}).on("resize", function(){ // If the user resizes the window
    windowHeight = $(this).height(); // you'll need the new height value
});


/********************************************************************************
 Smooth scrolling
 ********************************************************************************/

$(document).on('click', 'a', function(event){
    console.log("click");
    var attr = $(this).attr('data-smooth-scroll');
    this.blur();

// For some browsers, `attr` is undefined; for others,
// `attr` is false.  Check for both.
    if (typeof attr !== typeof undefined && attr !== false) {
        event.preventDefault();

        $('body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top-100
        }, 500);

    }

});



/********************************************************************************

 ON CLICK

 ********************************************************************************/

function fnCloseMenu(){
    $('nav.main').removeClass('open');
    $('.nav-bg').removeClass('open');
    $('#btn-menu').removeClass('open');
}

function fnOpenMenu(){
    $('nav.main').addClass('open');
    $('#btn-menu').addClass('open');
}

function fnOpenCloseMenu(){
    $('.nav-bg').toggleClass('open');
    $('nav.main').toggleClass('open');
    $('#btn-menu').toggleClass('open');

    if($('nav.main').hasClass('open')){
        $('#up-button').hide();
    }
}

function fnAnimateUpButton(){
    var bottomValue = "110vh";
    $('#up-button').animate({
        bottom: bottomValue
    },500);

    setTimeout(function(){
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500);
    },300);

    //put it back in position
    setTimeout(function(){
        $('#up-button').css( "bottom","5px");
    },1000);
}


$('#send-btn').click(function() {
    $(this).addClass('clicked');
    $('#send-txt').text('Sent!');

});

$(document).on('click', '.btn-home', function(){
    //close all windows
    $('.wdw').removeClass('open');
    $('.wdw-home').addClass('open');
});

$(document).on('click', '#btn-menu', function(){
   fnOpenCloseMenu();

});

$(document).on('click', '.menu-item', function(){
    fnCloseMenu();
});

/* UP BUTTON */
$(document).on('click', '#up-button', function(){
    fnAnimateUpButton();
});


/********************************************************************************

 WORK ITEMS

 ********************************************************************************/

$(document).on('click', '.work-item', function(){
    var workId = $(this).attr('id');
    var wdwToOpen = 'wdw-' + workId;
    fnOpenWorkItem(wdwToOpen);
});

function fnOpenWorkItem(wdwToOpen){
    console.log(wdwToOpen);
    // $('.wdw').removeClass('open');
    $('body, html').addClass('no-scroll');
    // $('html').addClass('no-scroll');
    // $('#'+wdwToOpen).addClass('open');
    $('#'+wdwToOpen).fadeIn();
}
/********************************************************************************

 TESTIMONIAL SLIDER

 ********************************************************************************/

 $(document).on('mouseover', '.person-img', function(){
     $(this).css('opacity', '1');
    if (!$(this).hasClass('active')){
        $('.testimonial-quote.active').css('opacity', '0.3');
        $('.person-img.active').css('opacity', '0.3');
        $('.testimonial-person.active').css('opacity', '0.3');
    }
 });

$(document).on('mouseout', '.person-img', function(){
    $(this).css('opacity', '0.3');

        $('.testimonial-quote.active').css('opacity', '1');
        $('.testimonial-person.active').css('opacity', '1');
        $('.person-img.active').css('opacity', '1');
});

$(document).on('click', '.person-img', function(){

    var i = $('.person-img').index(this);

    var sQuoteActive =  $('.testimonial-quote.active');
    var sQuote = $('.testimonial-quote')[i];

    var sPersonActive =  $('.testimonial-person.active');
    var sPerson = $('.testimonial-person')[i];

    var sImgActive =  $('.person-img.active');
    var sImg =  $(this);

    if (!$(this).hasClass('active')){

        //change quote
        sQuoteActive.animate({
            opacity: 0
        },5, function(){
            sQuoteActive.removeClass('active');
            sQuote.style.opacity = "1";
            sQuote.className += ' active';

        });

        //change person + title
        sPersonActive.animate({
            opacity: 0
        },5, function(){
            sPersonActive.removeClass('active');
            sPerson.style.opacity = "1";
            sPerson.className += ' active';

        });

        //set image on active

        sImgActive.removeClass('active');
        sImg.addClass('active');
        sImg.css('opacity','1');
    }
});




/********************************************************************************

REMOVE SVG IMAGE WITH INLINE SVG

 ********************************************************************************/

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});



//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               Buddha bless the code
//

