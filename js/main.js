$(document).ready(function(){

  // Slider
  $('.offer__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed:2000,
    asNavFor: '.offer__slider_two'
  });
  $('.offer__slider_two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.offer__slider',
    focusOnSelect: true,
    arrows: false,
    dots: true,
    appendDots:$('.offer-dots__wrapper'),
  });

// прокрутка

$('.offer__arrow-down').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#collection').offset().top }, 1000);
  e.preventDefault();
});

// modal

var btnOpen = document.getElementById('menu__contact_modal');
var btnClose = document.getElementById('modal__close');
var modal = document.getElementById('modal__wrapper');
var overlay = document.getElementById('modal__overlay');

btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal(){
    modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);

// modal-success
var btnCall = document.getElementById('connection__btn_modal');
var modalTwo = document.getElementById('modal-success__wrapper');
var close = document.getElementById('gallery__btn_modal-success');
var overlayTwo = document.getElementById('modal__overlayTwo');

btnCall.addEventListener('click',function(){
    modalTwo.classList.add('active');
    modal.classList.remove('active');
});
function closeModalTwo() {
  modalTwo.classList.remove('active');
}
overlayTwo.addEventListener('click',closeModalTwo);
close.addEventListener('click',closeModalTwo);

/* HAMBURGER */

$('.mobile-menu').on('click',function(e){
  e.preventDefault();
  $('.menu__list').toggle();
});

// Липкое меню

let lastScroll = 0;
const defaultOffset = 0;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('fixed');

window.addEventListener('scroll', () => {
  if(scrollPosition() > lastScroll && !containHide()) {
    header.classList.add('fixed');
  } else if(scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('fixed');
  }
  lastScroll = scrollPosition();

})


});