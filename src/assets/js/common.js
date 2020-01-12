
// function headerbg(){
// 	var scroll = $(window).scrollTop();  
//     if (scroll >= 50) {
//         $("header").addClass("header-bg");
//     } else {
//     	$("header").removeClass("header-bg");
//     }
// }

// $(window).scroll(function() {    
//     headerbg();
// });


$(window).scroll(function() {
  var header = $(document).scrollTop();
  var headerHeight = $(".header").outerHeight();
  var firstSection = $(".main-content section:nth-of-type(1)").outerHeight();
  if (header > headerHeight) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
  if (header > firstSection) {
    $(".header").addClass("in-view");
  } else {
    $(".header").removeClass("in-view");
  }
});

$("#menuShow").on('click', function(e){
    $('#menubox').toggleClass('menu-slide');
});
$("#menuClose").on('click', function(e){
    $('#menubox').toggleClass('menu-slide');
});


$(window).resize(function(){
	if($(window).width()<=1024){
		$(".top-dropdown .dropdown-toggle").removeAttr("data-toggle");
	} else {
		$(".top-dropdown .dropdown-toggle").attr("data-toggle", "dropdown");
	}
});

if($(window).width()<=1024){
	$(".top-dropdown .dropdown-toggle").removeAttr("data-toggle");
} 
else {
	$(".top-dropdown .dropdown-toggle").attr("data-toggle", "dropdown");
}

$("#showUser").on('click', function(e){
    $('.chat-user-box').toggle();
    $(this).children('i.fas').toggleClass('fa-users fa-times')
});

$("#showSearch").on('click', function(e){
    $('.header-search').toggle();
});

$(".security-input").keyup(function () {
    console.log(this.value.length);
    if (this.value.length == this.maxLength) {
      $(this).next('.security-input').focus();
    } else{
      $(this).prev('.security-input').focus();
    }
});

$(document).ready(function(){
	
  $('[data-toggle="tooltip"]').tooltip(); 
    /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    
    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);
    
  });  
});

/* =====Increase Descrese========== */
  $(".inc-btn").click(function(){
    var get_val = parseInt($(this).parent().prev("input.form-control").val());
    get_val = get_val+1;
    $(this).parent().prev("input.form-control").val(get_val)
  });
   
  $(".dec-btn").click(function(){
    var dec_val = parseInt($(this).parent().next("input.form-control").val());
    if(dec_val<=0){
      return false;
    }
    else{
    dec_val=dec_val-1;
       $(this).parent().next("input.form-control").val(dec_val) 
    }
  });
/* =====Increase Descrese End========== */


$(document).ready(function(){
	
	$('.coinScrollList').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:991,
      settings: {
        slidesToShow:4,
        slidesToScroll:1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	

/* =========Marqee Animate======== */
$('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration:15000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction : 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
}); 
  
  /* Toggle Header User info Drop Down */
    $(document).on("click", ".user_top_box ", function() {
     $(".user_top_box .dropdown-menu").toggleClass("show");
    });

     $(document).click(function(e) { 
      if(!$(e.target).is(".head-drop-down, .head-drop-down *, .user_top_box, .user_top_box *")) { 
        $(".user_top_box .dropdown-menu").removeClass('show'); 
      } 
    }); 

       /* ============Nice Scroll============= */
    var nice = $("html").niceScroll();
    $(".scroll-section, .sidebar").niceScroll({
        cursorborder: "",
        cursorcolor: "#f1592a",
        boxzoom: false
  
    });
}); 