const btnHamburger = document.getElementById('btnHamburger');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.getElementById('mobileMenu');
const bookmark = document.getElementById('bookmark');
const bookmarkText = document.getElementById('bookmarkText');
const bookmarkIcon = document.getElementById('bookmarkIcon');
const bookmarkIconPath = document.getElementById('bookmarkIconPath');
const progressBar = document.getElementById('progressBar');
const backedValue = document.getElementById('backedValue');


// Mobile menu
btnHamburger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open') && overlay.classList.contains('open')) {
        mobileMenu.classList.replace('open', 'closed');
        overlay.classList.replace('open', 'closed');
    } else {
        mobileMenu.classList.replace('closed', 'open');
        overlay.classList.replace('closed', 'open');
    }
});


// Bookmark click animation
bookmark.addEventListener('click', () => {
    if (bookmarkText.innerText == 'Bookmark') {
        bookmarkText.innerText = 'Bookmarked';
        bookmarkText.style.color = 'hsl(176, 50%, 47%)';
        bookmarkText.style.backgroundColor = 'hsla(176, 50%, 47%, 0.1)';
        bookmarkIcon.style.backgroundColor = '#3cb4ac';
        bookmarkIconPath.style.fill = '#fff';
    } else {
        bookmarkText.innerText = 'Bookmark';
        bookmarkText.style.color = 'hsl(0, 0%, 48%)';
        bookmarkText.style.backgroundColor = 'hsla(0, 0%, 48%, 0.205)';
        bookmarkIcon.style.backgroundColor = '#2f2f2f';
        bookmarkIconPath.style.fill = 'hsl(0, 0%, 48%)';
    }
})

// Progress bar animation
const progress = () => { 
    let value = backedValue.innerText.replace('$', '').replace(',', '');
    return progressBar.style.width = (value / 100000) * 100 + '%'; 
}