new Swiper('.image-slider' , {
   pagination: {
      el: '.swiper-pagination' ,
      clickable: true,
      dynamicBullets: true,
   },
});
$(document).ready(function () {
   $('.header__burger,.header__link').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock')
   });
   
});
$(document).ready(function () {
   $('.daily__menu-text').click(function(event){
      $('.block__element_1,.block__element_4').toggleClass('active');
   });
});
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelectorAll('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++){
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function(e){
         const popupName = popupLink.getAttribute('href').replace('#','');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0){
   for (let index = 0; index < popupCloseIcon.length; index++){
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e){
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock){
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e){
         if (!e.target.closest('.popup__content')){
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}
function popupClose(popupActive, doUnlock = true){
   if (unlock){
      popupActive.classList.remove('open');
      if (doUnlock){
         bodyUnLock();
      }
   }
}

function bodyUnLock() {
   setTimeout (function(){
      for (let index = 0; index < lockPadding.length; index++){
         const el = lockPadding[index];
         el.style.paddingRight = '0px';
      }  
   });
   unlock = false;
   setTimeout(function (){
      unlock = true;
   }, timeout);
}