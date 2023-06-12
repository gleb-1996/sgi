'use strict';

let $wrapper = document.querySelector('.wrapper');
let $header = document.querySelector('.header');
let $openMobileNav = document.querySelector('.fa-bars');
let $closeMobileNav = document.querySelector('.close-mobile-nav');
let $nav = document.querySelector('.navigation');
let $lang = document.querySelector('.language');
let $blockLang = document.querySelector('.change-language');
let $layerClose = document.querySelector('.layer-close');

$openMobileNav.addEventListener('click', function(){
    $nav.classList.add('show');
});

$closeMobileNav.addEventListener('click', function(){
    $nav.classList.remove('show');
});

// $wrapper.addEventListener('click', function(event) {
//     let $elemTarget = event.target;
    
//     if ($blockLang.classList.contains('show')) {
//         if (!$elemTarget.classList.contains('language') && !$elemTarget.classList.contains('change-language')) {
//             $blockLang.classList.remove('show');
//         }    
//     }
//  });

$lang.addEventListener('click', function() {
    if ($blockLang.classList.contains('show')) {
        $layerClose.classList.remove('show');
        $blockLang.classList.remove('show');
    } else {
        $layerClose.classList.add('show');
        $blockLang.classList.add('show'); 
    }  
 });

 window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 60) {
        $header.classList.add('transform-header');
    } else {
        $header.classList.remove('transform-header');
    }
 });