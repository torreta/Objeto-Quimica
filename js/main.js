var dimScroll, sizefont = "16px";
jQuery(window).ready(function() {

  jQuery('#wsite-content').turn({
    display: 'single',
    acceleration: true,
    gradients: !jQuery.isTouch,
    elevation:50,
    when: {
      turned: function(e, page) {

      }
    }
  });
  dimScroll = getScrollBarDimensions();
  redimensionar($( window ).width() + dimScroll.vertical);
});


jQuery(window).bind('keydown', function(e){

  if (e.keyCode==37)
    jQuery('#magazine').turn('previous');
  else if (e.keyCode==39)
    jQuery('#magazine').turn('next');

});

function irPag(page){
  jQuery('#wsite-content').turn("page",page);
}

$( window ).resize(function() {
  s = $( window ).width();
  redimensionar(s + dimScroll.vertical);
});

function redimensionar(w){
  //falta complementar con lo del tamaño de letra
  wp = (sizefont === "12px")? +8 : (sizefont === "20px")? -8 : 0;
  hp=0;
  if (sizefont === "20px"){
    if (w < 768){
      hp=450;
    }else if (w < 992){
     hp=330;
    }else if (w < 1200){
      hp=330;
    }else{
      hp=250;
    }
  }
  
  if (w < 768){
    jQuery('#wsite-content').turn("size",600+wp,730+hp);
    $(".col-xs-0").addClass("olcultar");
  }else if (w < 992){
    jQuery('#wsite-content').turn("size",710+wp,650+hp);
    $(".col-xs-0").addClass("olcultar");
  }else if (w < 1200){
    $(".col-xs-0").removeClass("olcultar");
    jQuery('#wsite-content').turn("size",930+wp,650+hp);
  }else{
    $(".col-xs-0").removeClass("olcultar");
    jQuery('#wsite-content').turn("size",1130+wp,600+hp);
  }
}

function getScrollBarDimensions(){
  var elm = document.documentElement.offsetHeight ? document.documentElement : document.body,

  curX = elm.clientWidth,
  curY = elm.clientHeight,

  hasScrollX = elm.scrollWidth > curX,
  hasScrollY = elm.scrollHeight > curY,

  prev = elm.style.overflow,

  r = {
    vertical: 0,
    horizontal: 0
  };


  if( !hasScrollY && !hasScrollX ) {
    return r;
  }

  elm.style.overflow = "hidden";

  if( hasScrollY ) {
    r.vertical = elm.clientWidth - curX;
  }

  if( hasScrollX ) {
    r.horizontal = elm.clientHeight - curY;
  }
  elm.style.overflow = prev;


  return r;
}

function cambiarLetra(size){
  sizefont = size;
  //if (document.body.style.fontSize == "") {
    document.body.style.fontSize = size;
  //}
  //document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";*/
  redimensionar($( window ).width() + dimScroll.vertical);
}