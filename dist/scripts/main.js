function fnAnimateSkills(){$(".skill-bar").each(function(){var t=$(this);if(t.isInViewport()&&!t.hasClass("bar-animation")){var e=t.siblings(".marker"),o=e.find(".marker-percentage"),n=parseInt(t.data("percentage")),i=n+"%",a=n/100*2e3;t.animate({width:i},{duration:a}),e.show(),e.animate({left:i},{duration:a,step:function(t,e){var n=Math.round(t);n>0&&o.text(n+"%")}}),t.addClass("bar-animation")}})}function fnUpButton(t){$(t).scrollTop()>windowHeight?(bUpAdded||($("body").append(sUpBlueprint),bUpAdded=!0),$("#up-button").fadeIn()):$("#up-button").fadeOut()}function fnManipulateScrollSpeed(t){var e=$("[data-scroll-speed]"),o=$(t),n=o.scrollTop();e.each(function(){var t=$(this),e=parseInt(t.data("scroll-speed")),o=-n/e;t.css("transform","translateY("+o+"px)")});$("[data-scroll]").each(function(){var t=$(this),e=parseInt(t.data("scroll")),o=-n/e;if(!bArrayFilled){var i=t.css("top"),a=i.replace("px",""),s=parseInt(a);aInitialTopVal.push(s),bArrayFilled=!0}var c=aInitialTopVal[0],r=c+o,l=r+"px";t.css("top",l)})}function fnAnimateArrow(t){var e=$(t),o=e.scrollTop(),n=$("#front-arrow");o>windowHeight/10?bArrowGone||(n.removeClass("animate-bounce"),setTimeout(function(){n.addClass("arrow-animation")},100),bArrowGone=!0):bArrowGone&&(n.removeClass("arrow-animation"),bArrowGone=!1)}function fnCloseMenu(){$("nav.main").removeClass("open"),$(".nav-bg").removeClass("open"),$("#btn-menu").removeClass("open")}function fnOpenMenu(){$("nav.main").addClass("open"),$("#btn-menu").addClass("open")}function fnOpenCloseMenu(){$(".nav-bg").toggleClass("open"),$("nav.main").toggleClass("open"),$("#btn-menu").toggleClass("open"),$("nav.main").hasClass("open")&&$("#up-button").hide()}function fnAnimateUpButton(){$("#up-button").animate({bottom:"110vh"},500),setTimeout(function(){$("html,body").stop().animate({scrollTop:0},500)},300),setTimeout(function(){$("#up-button").css("bottom","5px")},1e3)}function fnOpenWorkItem(t){$("body, html").addClass("no-scroll"),$("#"+t).fadeIn(),sMouseText.show(),setTimeout(function(){sMouseText.fadeOut()},2e3)}var isMobile=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(isMobile=!0),$.fn.isInViewport=function(){var t=$(this).offset().top,e=t+$(this).outerHeight(),o=$(window).scrollTop(),n=o+$(window).height();return e>o&&t<n};var windowHeight=$(window).height(),sUpBlueprint='<div id="up-button"><img src="dist/images/upretina.png"></div>',bUpAdded=!1,bArrayFilled=!1,aInitialTopVal=[],bArrowGone=!1;$(document).on("scroll",function(){fnUpButton(this),fnAnimateSkills(),fnAnimateArrow(this),isMobile||fnManipulateScrollSpeed(this)}).on("resize",function(){windowHeight=$(this).height()}),$(document).on("click","a",function(t){console.log("click");var e=$(this).attr("data-smooth-scroll");this.blur(),void 0!==e&&!1!==e&&(t.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-100},500))}),$("#send-btn").click(function(){$(this).addClass("clicked"),$("#send-txt").text("Sent!")}),$(document).on("click",".btn-home",function(){$(".wdw").removeClass("open"),$(".wdw-home").addClass("open")}),$(document).on("click","#btn-menu",function(){fnOpenCloseMenu()}),$(document).on("click",".menu-item",function(){fnCloseMenu()}),$(document).on("click","#up-button",function(){fnAnimateUpButton()});var sMouseText=$("#besideMouse");$(".work-wdw").mousemove(function(t){var e={top:t.pageY,left:t.pageX+40};$("#besideMouse").offset(e)}),$(document).on("click",".work-item",function(){fnOpenWorkItem("wdw-"+$(this).attr("id"))}),$(document).on("click",".btn-close",function(){$(this).parent().fadeOut(),$("body, html").removeClass("no-scroll")}),$(document).on("click","#wdw-1",function(){$(this).fadeOut(),$("body, html").removeClass("no-scroll")}),$(document).on("click","#wdw-2",function(){$(this).fadeOut(),$("body, html").removeClass("no-scroll")}),$(document).on("click","#wdw-3",function(){$(this).fadeOut(),$("body, html").removeClass("no-scroll")}),$(document).on("mouseover",".person-img",function(){$(this).css("opacity","1"),$(this).hasClass("active")||($(".testimonial-quote.active").css("opacity","0.3"),$(".person-img.active").css("opacity","0.3"),$(".testimonial-person.active").css("opacity","0.3"))}),$(document).on("mouseout",".person-img",function(){$(this).css("opacity","0.3"),$(".testimonial-quote.active").css("opacity","1"),$(".testimonial-person.active").css("opacity","1"),$(".person-img.active").css("opacity","1")}),$(document).on("click",".person-img",function(){var t=$(".person-img").index(this),e=$(".testimonial-quote.active"),o=$(".testimonial-quote")[t],n=$(".testimonial-person.active"),i=$(".testimonial-person")[t],a=$(".person-img.active"),s=$(this);$(this).hasClass("active")||(e.animate({opacity:0},5,function(){e.removeClass("active"),o.style.opacity="1",o.className+=" active"}),n.animate({opacity:0},5,function(){n.removeClass("active"),i.style.opacity="1",i.className+=" active"}),a.removeClass("active"),s.addClass("active"),s.css("opacity","1"))}),jQuery("img.svg").each(function(){var t=jQuery(this),e=t.attr("id"),o=t.attr("class"),n=t.attr("src");jQuery.get(n,function(n){var i=jQuery(n).find("svg");void 0!==e&&(i=i.attr("id",e)),void 0!==o&&(i=i.attr("class",o+" replaced-svg")),i=i.removeAttr("xmlns:a"),!i.attr("viewBox")&&i.attr("height")&&i.attr("width")&&i.attr("viewBox","0 0 "+i.attr("height")+" "+i.attr("width")),t.replaceWith(i)},"xml")});
//# sourceMappingURL=main.js.map
