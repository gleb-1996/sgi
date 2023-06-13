'use strict';

let $wrapper = document.querySelector('.wrapper');
let $header = document.querySelector('.header');
let $openMobileNav = document.querySelector('.fa-bars');
let $closeMobileNav = document.querySelector('.close-mobile-nav');
let $nav = document.querySelector('.navigation-mobile');
let $lang = document.querySelector('.language');
let $blockLang = document.querySelector('.change-language');
let $layerClose = document.querySelector('.layer-close');

let newPageY = 0;
let oldPageY = 0;

function scrollDifference(a) {
    newPageY = a

    if (newPageY > oldPageY) {
        oldPageY = newPageY;
        return true;
    } else {
        oldPageY = newPageY;
        return false;
    }
}

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
    if (scrollDifference(window.pageYOffset) && window.pageYOffset >= 60) {
        if ($blockLang.classList.contains('show')) {
            $layerClose.classList.remove('show');
            $blockLang.classList.remove('show');
        }

        if ($nav.classList.contains('show')) {
            $nav.classList.remove('show');
        }

        $header.classList.add('transform-header');
    } else if (!scrollDifference(window.pageYOffset) && window.pageYOffset < 60) {
        $header.classList.remove('transform-header');
    } else if (!scrollDifference(window.pageYOffset)) {
        $header.classList.remove('transform-header');
    }
 });