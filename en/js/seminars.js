'use strict';

const screenWidth = window.screen.width;
let $seminarNavigationPoints = document.querySelectorAll('.seminar');
let $listSeminars = document.querySelectorAll('.list-seminars');
let $seminarContentBlocks = document.querySelectorAll('.description-seminar');
let $topics = document.querySelectorAll('.topic-text');
let $itemsServices = document.querySelector('.items-services');

pageInitState();

if (screenWidth <= 425) {
    $itemsServices.classList.add('hide-content');
    openActiveList();
}

function pageInitState() {
    hideLists(0);
    $seminarNavigationPoints[0].classList.add('active-link');
    openActiveList();
    for (let i = 1; i < $seminarContentBlocks.length; i++) {
        $seminarContentBlocks[i].classList.add('hide-content');
    }
}

function hideLists(index) {
    for (let i = index; i < $listSeminars.length; i++) {
        $listSeminars[i].classList.add('hide-content');
    }
}

function hideContentBlocks(a) {
    for (let i = a; i < $seminarContentBlocks.length; i++) {
        $seminarContentBlocks[i].classList.add('hide-content');
        $seminarNavigationPoints[i].classList.remove('active-link');
    }
}

function showContentBlocks(b) {
    hideContentBlocks(0);

    $seminarContentBlocks[b].classList.remove('hide-content');
    $seminarNavigationPoints[b].classList.add('active-link');
}

function openActiveList() {
    let $activelink = document.querySelector('.active-link');
    let $parentActiveLink = $activelink.parentNode;
    let $siblingParent = $parentActiveLink.previousElementSibling;
    let $chevroneRight = $siblingParent.lastChild;

    $parentActiveLink.classList.toggle('hide-content');
    $chevroneRight.classList.toggle('rotate');
}

for (const $topic of $topics) {
    $topic.addEventListener('click', function(){
        let $sibling = this.nextElementSibling;
        let $chevronRight = this.lastChild;

        $sibling.classList.toggle('hide-content');
        $chevronRight.classList.toggle('rotate');
    });
}

window.addEventListener('resize', function(){
    if (window.screen.width > 425) {
        $itemsServices.classList.remove('hide-content');
        openActiveList();
    } else {
        $itemsServices.classList.add('hide-content');
        openActiveList();
    }
});

document.querySelector('.nav-seminars').addEventListener('click', function(event){
    let $target = event.target;

    if ($target.classList.contains('seminar')) {
        for (let i = 0; i < $seminarNavigationPoints.length; i++) {
            if ($target == $seminarNavigationPoints[i]) {
                showContentBlocks(i);
                break;
            }
        }
    }
});

document.querySelector('.open-list-seminars').addEventListener('click', function(){
    openActiveList();
    $itemsServices.classList.remove('hide-content');
    document.body.classList.add('overflow-hidden');
});

document.querySelector('.close-mobile-nav-seminars').addEventListener('click', function(){
    let $chevrons = document.querySelectorAll('.fa-chevron-right');
    
    for (const elem of $chevrons) {
        if (elem.classList.contains('rotate')) {
            elem.classList.remove('rotate');
        }
    }

    $itemsServices.classList.add('hide-content');
    document.body.classList.remove('overflow-hidden');

    hideLists(0);
});