'use strict';

let $itemsReviews = document.querySelector('.items-reviews');
let $linkReviews = document.querySelectorAll('.link-reviews');
let $imgReview = document.querySelector('.img-review');

function openFirstImg() {
    let attrHrefActive = document.querySelector('.active-link').getAttribute('href');
    let startNameReview = document.querySelector('.active-link').textContent;

    $imgReview.setAttribute('src', attrHrefActive);
    $imgReview.setAttribute('alt', startNameReview);
}

openFirstImg();

$itemsReviews.addEventListener('click', function(event){
    event.preventDefault();

    let target = event.target;

    if (target.classList.contains('link-reviews') && !(target.classList.contains('active-link'))) {
        let attrHrefTarget = target.getAttribute('href');
        let nameReview = target.textContent;

        $imgReview.setAttribute('src', attrHrefTarget);
        $imgReview.setAttribute('alt', nameReview);

        document.querySelector('.active-link').classList.remove('active-link');
        target.classList.add('active-link');
    }
});