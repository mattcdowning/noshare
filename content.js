const host = document.location.hostname;

// Bloomberg
if (host == 'www.bloomberg.com'){
  var bloomberg = setInterval(function(){
    if ( $('.bb-nav-social-container').length){
      $('.bb-nav-social-container').hide();
      $('.social-share').hide();
    }
  }, 1000);
}

// CNN
if (host == 'www.cnn.com'){
  var cnn = setInterval(function(){
    if ( $('.js-gigya-sharebar').length){
      $('.js-gigya-sharebar').hide();
    }
  }, 1000);
}

// Huffington Post
if (host == 'www.huffingtonpost.com'){
  var huffington = setInterval(function(){
    if ( $('.share-bar').length){
      $('.share-bar').hide();
    }
  }, 1000);
}

// Lifehacker
if (host == 'lifehacker.com'){
  var lifehacker = setInterval(function(){
    if ( $('.js_sharingfooter').length){
      $('.js_sharingfooter').hide();
    }
  }, 1000);
}

// Mashable
if (host == 'mashable.com'){
  var mashable = setInterval(function(){
    if ( $('.share-buttons').length){
      $('.share-buttons').hide();
      $('.shares').hide();
    }
  }, 1000);
}

//Medium

// Share bar
if (host.includes('medium.') || host.includes('medium.com') || host.includes('blog.medium.com')){
  var share = setInterval(function(){
    if ( $('.js-postShareWidget').length){
      $('.js-postShareWidget').hide();
    }
  }, 1000);
  // Recommend/Comment bar
  var postact = setInterval(function(){
    if ( $('.postActions').length){
      $('.postActions').hide();
    }
  }, 1000);
  //Follow Author card
  var promoCardWrapper = setInterval(function(){
    if ( $('.promoCardWrapper').length){
      $('.promoCardWrapper').hide();
    }
  }, 1000);
}

//The Washington Post
if (host == 'www.washingtonpost.com'){
  var share = setInterval(function(){
    if ( $('.social-tools-wrapper').length){
      $('.social-tools-wrapper').hide();
    }
  }, 1000);
}

//WSJ
if (host == 'www.wsj.com'){
  var share = setInterval(function(){
    if ( $('#article_tools').length){
      $('#article_tools').hide();
    }
  }, 1000);
}

// Verge
if (host == 'www.theverge.com'){
  var vergeVox = setInterval(function(){
    if ( $('.c-social-buttons').length){
      $('.c-social-buttons').hide();
    }
  }, 1000);
}

// VOX
if (host == 'www.vox.com'){
  var vergeVox = setInterval(function(){
    if ( $('.c-social-buttons').length){
      $('.c-social-buttons').hide();
    }
  }, 1000);
}
