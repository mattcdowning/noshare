var share = setInterval(function(){
  if ( $('.js-postShareWidget').length){
    $('.js-postShareWidget').hide();
  }
}, 100);

var postact = setInterval(function(){
  if ( $('.postActions').length){
    $('.postActions').hide();
  }
}, 100);

var promoCard = setInterval(function(){
  if ( $('.promoCardWrapper').length){
    $('.promoCardWrapper').hide();
  }
}, 100);
