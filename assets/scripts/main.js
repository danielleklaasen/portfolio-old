/********************************************************************************

 TABLE OF CONTENTS

 WINDOW
 Open window
 Close window
 FLOATING LABEL
 SCROLL FUNCTIONS
 ONCLICK

 ********************************************************************************/



/********************************************************************************

 WINDOW

 ********************************************************************************/


/********************************************************************************
 Global Vars
 ********************************************************************************/



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
    //get the parent class which is not wdw
    var wdwClassList = this.parentNode.classList;
    var wdwClassToClose ="";

    for(var i = 0; i < wdwClassList.length; i++){
        if (wdwClassList[i].match("^wdw-")) { // class begins with wdw-
            wdwClassToClose = wdwClassList[i]; //save this class
        }
    }

    //close wdw with matching class
    $('.'+wdwClassToClose).removeClass('open');

});

/********************************************************************************

 FLOATING LABEL

 ********************************************************************************/
//add active class to label on focus of input
$(document).on('click', '.floating-label', function(){
    $( this ).siblings( "label" ).addClass('active');
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

$('.floating-label').blur(function()
{
    if( !$(this).val() ) {
        $(this).siblings( "label" ).removeClass('active');
    }else{
        $(this).siblings( "label" ).addClass('active');
    }
});

/********************************************************************************

 SCROLL FUNCTIONS

 ********************************************************************************/

var windowHeight = $(window).height();   // Get the window height.

$(document).on("scroll", function () { // Do this on scroll in .wdw
    fnMenuEffectScroll(this);

}).on("resize", function(){ // If the user resizes the window
    windowHeight = $(this).height(); // you'll need the new height value
});

$('.wdw').on("scroll", function () { // Do this on scroll in .wdw
    fnMenuEffectScroll(this);
});


var sUpBlueprint = '<div id="up-button"><img src="dist/images/upretina.png"></div>';
var bUpAdded = false;

function fnMenuEffectScroll(that) {
    if ($(that).scrollTop() > (windowHeight/10) ) {
        $('header.main').addClass("header-small");
    } else {
        $('header.main').removeClass("header-small");
    }

    if ($(that).scrollTop() > (windowHeight) ) {
        if(!bUpAdded){
            // console.log("blue print added");
            // add blue print, only once
            $('body').append(sUpBlueprint);

            bUpAdded=true;
        }
        // fade in up
        $('#up-button').fadeIn();
        // console.log("up");
    }else{
        // fade out up
        $('#up-button').fadeOut();
        // console.log("no up");

    }




}


/********************************************************************************
 Smooth scrolling
 ********************************************************************************/

$(document).on('click', 'a', function(event){
    var attr = $(this).attr('data-smooth-scroll');
    this.blur();

// For some browsers, `attr` is undefined; for others,
// `attr` is false.  Check for both.
    if (typeof attr !== typeof undefined && attr !== false) {
        event.preventDefault();

        $('.wdw.open').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top-100
        }, 500);
        console.log("animating window");

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
}

function fnAnimateUpButton(){

    var bottomValue = "100vh";
    $('#up-button').animate({
        bottom: bottomValue
    },500);

    setTimeout(function(){
        $('.wdw').stop().animate({
            scrollTop: 0
        }, 500);
    },300);

    //put it back in position
    setTimeout(function(){
        $('#up-button').css( "bottom","5px");
        console.log('back');
    },1000);
}

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



/********************************************************************************

 BUTTONS

 ********************************************************************************/
/*

var iNumberOfBtns = $('.btn-hover-1').length;

for(i = 0; i < iNumberOfBtns; i++){
    i++;
    console.log(i);
    var sBtnSelector = $( ".btn-hover-1:nth-child("+ i +")" );
    console.log(sBtnSelector);
    sBtnSelector.wrapInner('<div class=btn-hover-1-text></div>');
    //$(".btn-hover-1-text:nth-child("+ i +")").clone().appendTo( $(".btn-hover-1:nth-child("+ i +")") );

    i--;
    console.log(i);
}

$(".btn-hover-1").wrapInner('<div class=btn-hover-1-text></div>');

$(".btn-hover-1-text").clone().appendTo( $(".btn-hover-1") );

$(".btn-hover-1").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');

$(".twist").css("width", "25%").css("width", "+=3px");*/
