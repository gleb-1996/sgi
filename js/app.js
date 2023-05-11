'use strict';

let $openMobileNav = document.querySelector('.fa-bars');
let $closeMobileNav = document.querySelector('.close-mobile-nav');
let $nav = document.querySelector('.navigation');

$openMobileNav.addEventListener('click', function(){
    $nav.classList.add('show');
});

$closeMobileNav.addEventListener('click', function(){
    $nav.classList.remove('show');
});