var basicTimeline=anime.timeline();basicTimeline.add({targets:".mac_animation .a-1",scaleY:{value:153,duration:1e3,easing:"easeOutExpo"}}).add({targets:".mac_animation .a-2",scaleX:{value:400,duration:750,easing:"easeOutExpo"},scaleY:{value:300,duration:750,easing:"easeOutExpo"},offset:"-=500"}).add({targets:".mac_animation .progress-bar",opacity:1,delay:500}),$(document).ready(function(){function e(){var e=document.getElementById("bar"),a=1,t=setInterval(function(){100<=a?clearInterval(t):(a++,e.style.width=a+"%")},10);typed()}setTimeout(function(){$(".progress-bar span").slideDown("slow",e)},1900),$(function(){var e={stringsElement:"#typed-strings",typeSpeed:50,loop:!1};$("#button").click(function(){new Typed("#typed",e)})})});