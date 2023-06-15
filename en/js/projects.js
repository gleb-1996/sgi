'use strict';

const screenWidth = window.screen.width;
let $projectNavigationPoints = document.querySelectorAll('.link-projects');
let $projectContentBlocks = document.querySelectorAll('.description-project');
let $itemsProjects = document.querySelector('.items-projects');

if (screenWidth <= 425) {
    $itemsProjects.classList.add('hide-content');
}

function hideContentBlocks(a) {
    for (let i = a; i < $projectContentBlocks.length; i++) {
        $projectContentBlocks[i].classList.add('hide-content');
        $projectNavigationPoints[i].classList.remove('active-link');
    }
}

function showContentBlocks(b) {
    hideContentBlocks(0);

    $projectContentBlocks[b].classList.remove('hide-content');
    $projectNavigationPoints[b].classList.add('active-link');
}

window.addEventListener('resize', function(){
    if (window.screen.width > 425) {
        $itemsProjects.classList.remove('hide-content');
    } else {
        $itemsProjects.classList.add('hide-content');
    }
});

document.querySelector('.items-projects').addEventListener('click', function(event){
    let $target = event.target;

    if ($target.classList.contains('link-projects')) {
        event.preventDefault();

        for (let i = 0; i < $projectNavigationPoints.length; i++) {
            if ($target == $projectNavigationPoints[i]) {
                showContentBlocks(i);
                break;
            }
        }
    }
});

document.querySelector('.open-list-projects').addEventListener('click', function(){
    $itemsProjects.classList.remove('hide-content');
    document.body.classList.add('overflow-hidden');
});

document.querySelector('.close-mobile-nav-projects').addEventListener('click', function(){
    $itemsProjects.classList.add('hide-content');
    document.body.classList.remove('overflow-hidden');
});