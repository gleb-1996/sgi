'use strict';

let $mainPointsMobile = document.querySelector('.main-points');
let $logosPartners = document.querySelectorAll('.wrap-img');
let $childs = $mainPointsMobile.childNodes;

window.onload = heightLogosCalculation($logosPartners);

for (const $child of $childs) {
    $child.addEventListener('click', function(event){
        let className = event.currentTarget.classList[1];

        switch (className) {
            case 'item-about':
                document.location.href = 'about.html';
            break;

            case 'item-seminars':
                document.location.href = 'services.html';
            break;

            case 'item-projects':
                document.location.href = 'projects.html';
            break;

            case 'item-customers':
                document.location.href = 'customers.html';
            break;

            case 'item-reviews':
                document.location.href = 'reviews.html';
            break;

            case 'item-contacts':
                document.location.href = 'contacts.html';
            break;
        }
    });
}

function heightLogosCalculation(arrLogos) {
    let maxHeight = 0;

    for (let i = 0; i < arrLogos.length; i++) {
        if (arrLogos[i].clientHeight > maxHeight) {
            maxHeight = arrLogos[i].clientHeight;
        }
    }

    for (let j = 0; j < arrLogos.length; j++) {
        arrLogos[j].setAttribute('style', 'height: ' + maxHeight + 'px');
    }
}