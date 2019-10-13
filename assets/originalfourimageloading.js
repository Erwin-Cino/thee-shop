setTimeout(function(){
          imgOne.fadeOut(1500).css('z-index', 13) //13
          imgTwo.fadeIn(1700).css('z-index', 14) //14
      }, 1000)

      setTimeout(function(){
          imgOne.css('z-index', 12)
          imgTwo.fadeOut(3600).css('z-index', 13) //13
          imgThree.fadeIn(1700).css('z-index', 14) //14
      }, 3400)

      setTimeout(function(){
          imgOne.css('z-index', 11)
          imgTwo.css('z-index', 12)
          imgThree.fadeOut(5600).css('z-index', 13) //13
          imgFour.fadeIn(5800).css('z-index', 14) //14
      }, 5300)

      setTimeout(function(){
          $('.loading-screen').fadeOut(1000).addClass('is-hidden')
          $('.main-wrapper').removeClass('main-wrapper')
          $('body').removeClass('is-locked')
      }, 6500)