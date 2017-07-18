   var barAnimation = anime({
      targets: '#bars_wrapper .bar',
      delay: function(el, i) { 
        return i * 400; //delay to start next bars_wrapper animation
      },
      opacity: 0,
      backgroundColor: "#fff",
      height: {
        value:0,
        // direction: 'reverse'
      },
      duration: 5200, //total animation time
      easing: 'easeOutExpo',
      loop: true,
      direction: 'reverse' // Play the animation in reverse,
    });

    var textBarAnimation = anime({
      targets: '#text_wrapper span',
      delay: function(el, i) { 
        return i * 400; //delay to start next bars_wrapper animation
      },
      opacity: 0,
      height: {
        value:0,
        // direction: 'reverse'
      },
      duration: 5200, //total animation time
      easing: 'easeOutExpo',
      loop: true,
      direction: 'reverse' // Play the animation in reverse
    });