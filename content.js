// Bloomberg
if (document.location.hostname == 'www.bloomberg.com'){
  var bloomberg = setInterval(function(){
    if ( $('.bb-nav-social-container').length){
      $('.bb-nav-social-container').hide();
      $('.social-share').hide();
    }
  }, 1000);
}

// CNN
if (document.location.hostname == 'www.cnn.com'){
  var cnn = setInterval(function(){
    if ( $('.js-gigya-sharebar').length){
      $('.js-gigya-sharebar').hide();
    }
  }, 1000);
}

// Huffington Post
if (document.location.hostname == 'www.huffingtonpost.com'){
  var huffington = setInterval(function(){
    if ( $('.share-bar').length){
      $('.share-bar').hide();
    }
  }, 1000);
}

// Lifehacker
if (document.location.hostname == 'lifehacker.com'){
  var lifehacker = setInterval(function(){
    if ( $('.js_sharingfooter').length){
      $('.js_sharingfooter').hide();
    }
  }, 1000);
}

// Mashable
if (document.location.hostname == 'mashable.com'){
  var mashable = setInterval(function(){
    if ( $('.share-buttons').length){
      $('.share-buttons').hide();
      $('.shares').hide();
    }
  }, 1000);
}

//Medium

// Share bar
if (document.location.hostname == 'medium.com'){
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

}

//The Washington Post
if (document.location.hostname == 'www.washingtonpost.com'){
  var share = setInterval(function(){
    if ( $('.social-tools-wrapper').length){
      $('.social-tools-wrapper').hide();
    }
  }, 1000);
}

// Verge
if (document.location.hostname == 'www.theverge.com'){
  var vergeVox = setInterval(function(){
    if ( $('.c-social-buttons').length){
      $('.c-social-buttons').hide();
    }
  }, 1000);
}

// VOX
if (document.location.hostname == 'www.vox.com'){
  var vergeVox = setInterval(function(){
    if ( $('.c-social-buttons').length){
      $('.c-social-buttons').hide();
    }
  }, 1000);
}
