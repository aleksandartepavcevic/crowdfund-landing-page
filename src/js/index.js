import variables from '../scss/_variables.scss';

console.log(variables.$moderateCyan);

const btnHamburger = document.getElementById('btnHamburger');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.getElementById('mobileMenu');
const bookmark = document.getElementById('bookmark');
const bookmarkText = document.getElementById('bookmarkText');

btnHamburger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open') && overlay.classList.contains('open')) {
        mobileMenu.classList.replace('open', 'closed');
        overlay.classList.replace('open', 'closed');
    } else {
        mobileMenu.classList.replace('closed', 'open');
        overlay.classList.replace('closed', 'open');
    }
});

bookmark.addEventListener('click', () => {
    if (bookmarkText.innerText == 'Bookmark') {
        bookmarkText.innerText = 'Bookmarked';
        bookmarkText.style.color = 'cyan';
    } else {
        bookmarkText.innerText = 'Bookmark';
        bookmarkText.style.color = '$gray';
    }
})