
var playPause = anime({
  targets: '#accent',
  backgroundColor: '#FFBE00',
  height: '100px',
  width: '100px',
  //borderRadius: 40,
  easing: 'easeInOutQuad',
  loop: false,
  duration: 5000,
  autoplay: false
});


var chartPlay = document.querySelector('#play');
var chartPause = document.querySelector('#pause');
chartPlay.onclick = playPause.play;
chartPause.onclick = playPause.pause;
