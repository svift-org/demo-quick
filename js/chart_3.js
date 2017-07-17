   var barAnimation = anime({
      targets: '#wrapper div',
      // delay: function(el, i) { 
      //   return i * 100; //delay to start next bars_wrapper animation
      // },
      duration: 1000, //total animation time
      delay:400,
      easing: 'easeOutExpo',
      loop: true,
      width: 75,
      translateX: function(target, index) {
        var targetClass = target.getAttribute('class');
        var moveRight = 0;
        if(targetClass == "red"){
          moveRight = 80;
        }
        else if(targetClass == "blue"){
          moveRight = 160;
        }
        return  moveRight
      },
      translateY: {
        value: function(target, index) {
          var moveY = target.getAttribute('data-position');
          return  moveY
        },
        delay:800,
        duration: 2000,
      }
    });
