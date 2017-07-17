var data = [20, 30, 40]

var animatedDots = anime({
  targets: '.el',
  loop: false,
  autostart: true,
  duration: 3000,
  autoplay: true,
  backgroundColor: function(){
    // var r = anime.random(0, 255);
    // var g = anime.random(0, 255);
    // var b = anime.random(0, 255);
    // return "rgb(" + r + g + b +")";
    return "#FFBE00";
  },
  translateX: function(target, index) {
    return 10 + (index * 250);
  },
  translateY: function(target, index) {
    return  (-10 * index);
  },
  width: function(target, index){
    return 30 + (30 * index);
  },
  height: function(target, index){
    return 30 + (30 * index);
  }
});


var animatedLegend = anime({
  targets: '.legend',
  loop: false,
  autostart: true,
  duration: 3000,
  autoplay: true,
  color: "#A1A1A1",
  translateX: function(target, index) {
    return (index * 250);
  }
});