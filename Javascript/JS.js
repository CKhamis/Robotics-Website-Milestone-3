$(document).ready(function(){

  $("a").animate({marginLeft: '0px'}, 300);

  $(".FLI").animate({
        marginBottom: '20px',
        opacity: '1'
    }, 400);
    
    $("#SS").animate({
        opacity: '1'
    }, 600);

  $("#quickLinksContainer").animate({
        marginTop: '0px',
        opacity: '1'
    }, 900);
    
    
    
  var Style = 3;
  
  function getStyle(){
    window.prompt("Change Theme: 1 - Icon Circles 2- Gradient 3- Normal");
  }
  
  if(Style == 1){
    
    $("#Info").css({
      "background-image": "url('http://news.metro.ru/i11/MB_0011_info3.png')"
    });
    $("#Contact").css({
      "background-image": "url('https://cdn4.iconfinder.com/data/icons/social-icons-6/40/phone-512.png')"
    });
    $("#Sponsor").css({
      "background-image": "url('https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/441/aiga_cashier-512.png')"
    });
    $("#Donate").css({
      "background-image": "url('https://cdns.iconmonstr.com/wp-content/assets/preview/2015/240/iconmonstr-handshake-10.png')"
    });
    
  }else if(Style == 2){
    
    $("#Info").css({
      "background": "linear-gradient(to bottom right, #1050b7, #0f6afc)",
      "Border-radius":"3px",
      "color":"white"
    });
    
    $("#Contact").css({
      "background": "linear-gradient(to bottom right, #8c19ff, #5e01ba)",
      "Border-radius":"3px",
      "color":"white"
    });
    
    $("#Sponsor").css({
      "background": "linear-gradient(to bottom right, #ba0032, #f9094a)",
      "Border-radius":"3px",
      "color":"white"
    });
    
    $("#Donate").css({
      "background": "linear-gradient(to bottom right, #d88900, #a06500)",
      "Border-radius":"3px",
      "color":"white"
    });
  }else if(Style == 3){
    
  }
  
  
});
