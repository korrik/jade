//custom
$(document).ready(function(){

// anime.js
var basicTimeline = anime.timeline({
  complete: function(anim) {
    // typed();
  },
});

basicTimeline
  .add({
    targets: '.mac_animation .a-1',
    scaleY: { value: 153, duration: 1000, easing: 'easeOutExpo' },
  })
  
  .add({
    targets: '.mac_animation .a-2',
    scaleX: { value: 400, duration: 750, easing: 'easeOutExpo' },
    scaleY: { value: 300, duration: 750, easing: 'easeOutExpo' },
    offset: '-=500',
  })

  .add({
    targets: '.mac_animation .progress-bar',
    opacity: 1,
    complete: function(anim) {
      loadProgressBar()
      // $('.progress-bar').hide();
    }
  })

  .add({
    targets: '.mac_animation .progress-bar',
    opacity: 0,
    delay: 1500,
  })


  function move() {
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
       if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  };

  function loadProgressBar() {
    $('.progress-bar span').slideDown("slow", move);
  };

  // setTimeout(loadProgressBar, 1900);


  //typed.js
  function typed() {

    var options = {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      loop: false,
    }

    var typed = new Typed("#typed", options);

  };

  // setTimeout(typed, 2900);
});
