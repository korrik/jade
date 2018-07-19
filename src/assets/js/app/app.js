// anime.js
var basicTimeline = anime.timeline();

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
    delay: 500,
  })

  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625*2*i;
      return offset + "em";
    }
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



//custom
$(document).ready(function(){
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
    typed()
  };

  function loadProgressBar() {
    $('.progress-bar span').slideDown("slow", move)
  };

  setTimeout(loadProgressBar, 1900);


  //typed.js
  $(function typed() {

    var options = {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      loop: false,
    }

    $("#button").click(function () {
      var typed = new Typed("#typed", options);
    });

  });


});
