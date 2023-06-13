'use strict';

let $wrapper = document.querySelector('.wrapper');
let $header = document.querySelector('.header');
let $openMobileNav = document.querySelector('.fa-bars');
let $closeMobileNav = document.querySelector('.close-mobile-nav');
let $nav = document.querySelector('.navigation-mobile');
let $lang = document.querySelector('.language');
let $blockLang = document.querySelector('.change-language');
let $layerClose = document.querySelector('.layer-close');
let $submenu = document.querySelector('.submenu');
let $openMobileSubmenu = document.querySelector('.fa-caret-down-mobile-nav');
let $mobileSubmenu = document.querySelector('.mobile-submenu');
let $arrItemsSubmenu = document.querySelectorAll('.item-submenu');

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
    // for (const item in $arrItemsSubmenu) {
    //     if (item.classList.contains('active-item-submenu')) {
    //         $mobileSubmenu.classList.add('show-mobile-submenu');
    //         break;
    //     }
    // }

    $nav.classList.add('show');
});

$closeMobileNav.addEventListener('click', function(){
    $nav.classList.remove('show');
});

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

        if ($mobileSubmenu.classList.contains('show-mobile-submenu')) {
            $mobileSubmenu.classList.remove('show-mobile-submenu');
        }
        
        if ($submenu.classList.contains('show-submenu')) {
            $header.classList.add('transform-header-fixed-submenu');
        } else {
            $header.classList.add('transform-header');
        }
    } else if (!scrollDifference(window.pageYOffset) && window.pageYOffset < 60) {
        if ($submenu.classList.contains('show-submenu')) {
            $header.classList.remove('transform-header-fixed-submenu');
        } else {
            $header.classList.remove('transform-header');
        }
    } else if (!scrollDifference(window.pageYOffset)) {
        if ($submenu.classList.contains('show-submenu')) {
            $header.classList.remove('transform-header-fixed-submenu');
        } else {
            $header.classList.remove('transform-header');
        }
    }
 });

$openMobileSubmenu.addEventListener('click', function(){
 if ($mobileSubmenu.classList.contains('show-mobile-submenu')) {
  $mobileSubmenu.classList.remove('show-mobile-submenu');
 } else {
  $mobileSubmenu.classList.add('show-mobile-submenu');
 }
});