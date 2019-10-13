function animation() {
    // $(".loading-screen").css('display', "block");
    
      setTimeout(function(){
          imgOne.fadeOut(1200).css('z-index', 13)
      },5290)
      
      setTimeout(function(){
          imgOne.css('z-index', 12)
          imgTwo.fadeIn(900).css('z-index', 14)
      },5800)

      setTimeout(function(){
          imgOne.css('z-index', 11)
          imgTwo.fadeOut(1000).css('z-index', 14)
          imgThree.fadeIn(1000).css('z-index', 13)
      }, 9400)
      
      
      setTimeout(function(){
          imgOne.css('z-index', 11)
          imgTwo.css('z-index', 12)
          imgThree.fadeOut(800).css('z-index', 14)
          
          //imgFour.fadeIn(1700).css('z-index', 14)
      }, 13800)
      
 
      
      setTimeout(function(){
          $('.fourth').fadeOut(1500).css('z-index',130);
          $('.loading-screen').fadeOut(100).addClass('is-hidden')
          $('.main-wrapper').removeClass('main-wrapper')
          $('body').removeClass('is-locked')
          $('.flowers-section').addClass('not-shown')

      }, 14500)
        
      
  }
  
 animation(); 






function setCookie(name, value, hours)
{
    if (hours)
    {
        var date = new Date();
        date.setTime(date.getTime()+(hours*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else
    {
        var expires = "";
    }

    document.cookie = name+"="+value+expires+"; path=/";
}

//setCookie("theecookie", true, 1);
  
  
  
function createCookie(name,value,minutes) {
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime()+(minutes*60*1000));
        var expires = "; expires="+date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

  
 function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 


function checkCookie(name) {
    var user = getCookie("username")
    if (user != "" && user = null) {
        //do function
        setCookie("setAnimationCookie", true, 1);
        animation();
    }
    else {
        //do not execute function.

    }
}
