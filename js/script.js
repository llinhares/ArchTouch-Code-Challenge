$('.testimonials-navigation').click(function(){
  $('.testimonials-navigation').removeClass("active");
  var activeSlide = this.id;
  $(this).addClass("active");
  $(".content-slide-active").css("opacity", "0");
  setTimeout(function(){
    $(".content-slide").removeClass("content-slide-active");
    $("#content-"+activeSlide+"").addClass("content-slide-active");
  }, 500);
  setTimeout(function(){
    $("#content-"+activeSlide+"").css("opacity", "1");
  }, 600);
});

var actualSlide = 1;
function SlideAutoplay(){
  var numberOfSlides = 3;
  if(actualSlide >= numberOfSlides){
    actualSlide = 0;
  }
  actualSlide++;
  $(".content-slide-active").css("opacity", "0");
  setTimeout(function(){
    $(".content-slide").removeClass("content-slide-active");
    $('.testimonials-navigation').removeClass("active");
    $("#content-slide"+actualSlide+"").addClass("content-slide-active");
    $("#slide"+actualSlide+"").addClass("active");
  }, 500);
  setTimeout(function(){
    $("#content-slide"+actualSlide+"").css("opacity", "1");
  }, 600);
}

$(function() {
  var timer = null,
      interval = 5100,
      value = 0;
  timer = setInterval(function () {SlideAutoplay();}, interval);
  $("#testimonials").mouseenter(function(){
    clearInterval(timer);
    timer = null;
    console.log('mouse enter');
  });

  $("#testimonials").mouseleave(function(){
    if (timer !== null) return;
    timer = setInterval(function () {
        SlideAutoplay();
    }, interval);
    console.log('mouse leave');
  });
  console.log("start");
});
