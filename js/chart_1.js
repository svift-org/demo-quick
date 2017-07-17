// Little Tree
// var littleTree = anime({
//   targets: '#back',
//   borderRadius: 400,
//   easing: 'easeInOutQuad',
//   loop: false,
//   duration: 3000,
//   autoplay: true
// });


// Little Tree
var littleTree = anime({
  targets: '#accent',
  backgroundColor: '#FFBE00',
  height: '50px',
  width: '50px',
  // borderRadius: 40,
  easing: 'easeInOutQuad',
  loop: false,
  duration: 3000,
  autoplay: true
});


// var chartPlay = document.querySelector('#play');
// var chartPause = document.querySelector('#pause');
// chartPlay.onclick = littleTree.play;
// chartPause.onclick = littleTree.pause;



// // Little Tree Annotation
var littleTreeAnnotationLine  = anime({
  targets: '.legend_1',
  width: '100px',
  easing: 'easeInOutQuad',
  delay: 1500,
  loop: false,
  duration: 1000,
  autoplay: true
});

var littleTreeAnnotationText  = anime({
  targets: '#legend_1-text',
  left: "360px",
  color: "#FFBE00",
  easing: 'easeInOutQuad',
  delay: 1500,
  loop: false,
  duration: 1000,
  autoplay: true
});
