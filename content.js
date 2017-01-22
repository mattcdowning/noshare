const host = document.location.hostname;
//select element via class
function select(selector) {
     return document.querySelector(selector);
}
//hide element
function hide(el){
  el.style.display = 'none';
}
// Bloomberg
const bloombergShare = select('.bb-nav-social-container')
if (host == 'www.bloomberg.com'){
  const bloomberg = setInterval(() => {
    if (bloombergShare){
      hide(bloombergShare);
    }
  }, 1000);
}
// CNN
const cnnShare = select('.js-gigya-sharebar');
if (host == 'www.cnn.com'){
  const cnn = setInterval(() => {
    if (cnnShare){
      hide(cnnShare);
    }
  }, 1000);
}
// Huffington Post
const huffingtonShare = select('.share-bar');
if (host == 'www.huffingtonpost.com'){
  const huffington = setInterval(() => {
    if (huffingtonShare){
      hide(huffingtonShare);
    }
  }, 1000);
}
// Lifehacker
const lifehackerShare = select('.js_sharingfooter');
if (host == 'lifehacker.com'){
  const lifehacker = setInterval(() => {
    if (lifehackerShare){
      hide(lifehackerShare);
    }
  }, 1000);
}
// Mashable
const mashShareBtn = select('.share-buttons');
const mashShares = select('.shares');
if (host == 'mashable.com'){
  const mashable = setInterval(() => {
    if (mashShareBtn){
      hide(mashShareBtn);
      hide(mashShares);
      // $('.share-buttons').hide();
      // $('.shares').hide();
    }
  }, 1000);
}
//Medium
  // Share bar
const medPostShareWidget = select('.js-postShareWidget');
const medRecBar = select('.postActionsBar');
const medAuthorCard = select('.promoCardWrapper');
if (host.includes('medium.') || host.includes('medium.com') || host.includes('blog.medium.com')){
  const medShare = setInterval(() => {
    if (medPostShareWidget){
      hide(medPostShareWidget);
    }
  }, 1000);
  // Recommend/Comment bar
  const postact = setInterval(() => {
    if(medRecBar){
      hide(medRecBar);
    }
  }, 1000);
  //Follow Author card
  const promoCardWrapper = setInterval(() => {
    if(medAuthorCard){
      hide(medAuthorCard);
    }
  }, 1000);
}
//The Washington Post
const washingtonSocial = select('.social-tools-wrapper');
if (host == 'www.washingtonpost.com'){
  const washingtonShare = setInterval(() => {
    if (washingtonSocial){
      hide(washingtonSocial);
    }
  }, 1000);
}
//WSJ
const wsjArticleTools = document.getElementById('article_tools');
if (host == 'www.wsj.com'){
  const wsjShare = setInterval(() => {
    if (wsjArticleTools){
      hide(wsjArticleTools)
    }
  }, 1000);
}
// Verge
const vergeSocialBtns = select('.c-social-buttons');
const vergeTabBar = select('.c-tab-bar');
if (host == 'www.theverge.com'){
  const verge = setInterval(() => {
    if(vergeSocialBtns){
      hide(vergeSocialBtns);
      hide(vergeTabBar);
    }
  }, 1000);
}
// VOX
const voxSocialBtns = select('.c-social-buttons');
const voxTabBar = select('.c-tab-bar');
if (host == 'www.vox.com'){
  const vox = setInterval(() => {
    if(voxSocialBtns){
      hide(voxSocialBtns);
      hide(voxTabBar);
    }
  }, 1000);
}
