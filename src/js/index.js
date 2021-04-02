const btnHamburger = document.getElementById('btnHamburger');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.getElementById('mobileMenu');
const bookmark = document.getElementById('bookmark');
const bookmarkText = document.getElementById('bookmarkText');
const bookmarkIcon = document.getElementById('bookmarkIcon');
const bookmarkIconPath = document.getElementById('bookmarkIconPath');
const progressBar = document.getElementById('progressBar');
const backedValue = document.getElementById('backedValue');
const modalExit = document.getElementById('modal-exit');
const modal = document.getElementById('modal');
const selectRewardCta = document.getElementById('select-reward-cta');
const checkmarkBasic = document.getElementById('checkmark-basic');
const modalPledgeBasic = document.getElementById('modal-pledge-basic');
const checkmarkBamboo = document.getElementById('checkmark-bamboo');
const modalPledgeBamboo = document.getElementById('modal-pledge-bamboo');
const checkmarkBlack = document.getElementById('checkmark-black');
const modalPledgeBlack = document.getElementById('modal-pledge-black');
const checkmarkMahogany = document.getElementById('checkmark-mahogany');
const modalPledgeMahogany = document.getElementById('modal-pledge-mahogany');

const modals = [
  modalPledgeBasic,
  modalPledgeBamboo,
  modalPledgeBlack,
  modalPledgeMahogany,
];

// Mobile menu
btnHamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  overlay.classList.toggle('open');
});
// Modal open
selectRewardCta.addEventListener('click', () => {
  modal.classList.toggle('open');
  overlay.classList.toggle('open');
});

// Modal closed
modalExit.addEventListener('click', () => {
  modal.classList.toggle('open');
  overlay.classList.toggle('open');
});

checkmarkBasic.addEventListener('click', () => {
  modals.forEach((element) => {
    if (element.classList.contains('checked')) {
      element.classList.toggle('pledge-open');
      element.classList.toggle('checked');
    }
  });
  modalPledgeBasic.classList.toggle('pledge-open');
  modals[0].classList.toggle('checked');
});

checkmarkBamboo.addEventListener('click', () => {
  modals.forEach((element) => {
    if (element.classList.contains('checked')) {
      element.classList.toggle('pledge-open');
      element.classList.toggle('checked');
    }
  });
  modalPledgeBamboo.classList.toggle('pledge-open');
  modals[1].classList.toggle('checked');
});

checkmarkBlack.addEventListener('click', () => {
  modals.forEach((element) => {
    if (element.classList.contains('checked')) {
      element.classList.toggle('pledge-open');
      element.classList.toggle('checked');
    }
  });
  modalPledgeBlack.classList.toggle('pledge-open');
  modals[2].classList.toggle('checked');
});

checkmarkMahogany.addEventListener('click', () => {
  modals.forEach((element) => {
    if (element.classList.contains('checked')) {
      element.classList.toggle('pledge-open');
      element.classList.toggle('checked');
    }
  });
  modalPledgeMahogany.classList.toggle('pledge-open');
  modals[3].classList.toggle('checked');
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
});

// Progress bar animation
const progress = () => {
  let value = backedValue.innerText.replace('$', '').replace(',', '');
  return (progressBar.style.width = (value / 100000) * 100 + '%');
};
