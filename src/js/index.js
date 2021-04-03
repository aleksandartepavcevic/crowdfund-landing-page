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
const checkmarkBasic = document.getElementById('modal-basic');
const modalPledgeBasic = document.getElementById('modal-pledge-basic');
const checkmarkBamboo = document.getElementById('modal-bamboo');
const modalPledgeBamboo = document.getElementById('modal-pledge-bamboo');
const checkmarkBlack = document.getElementById('modal-black');
const modalPledgeBlack = document.getElementById('modal-pledge-black');
const checkmarkMahogany = document.getElementById('modal-mahogany');
const modalPledgeMahogany = document.getElementById('modal-pledge-mahogany');
const bambooCta = document.getElementById('bamboo-pledge-cta');
const blackCta = document.getElementById('black-pledge-cta');
const mahoganyCta = document.getElementById('mahogany-pledge-cta');
const input = document.getElementById('input-box');

const modals = [
  {
    name: 'basic',
    checkmarkActivated: 'false',
  },
  {
    name: 'bamboo',
    checkmarkActivated: 'false',
  },
  {
    name: 'black',
    checkmarkActivated: 'false',
  },
  {
    name: 'mahogany',
    checkmarkActivated: 'false',
  },
];

// Mobile menu
btnHamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  overlay.classList.toggle('open');
});

// Modal open
const modalOpen = () => {
  checkIfItsActive();
  modal.classList.toggle('open');
  overlay.classList.toggle('open');
};

// Modal closed
modalExit.addEventListener('click', () => {
  checkIfItsActive();
  modal.classList.toggle('open');
  overlay.classList.toggle('open');
});

const checkmarkActive = (checkmark) => {
  checkmark.classList.toggle('active');
};

const pledgeOpen = (pledge) => {
  pledge.classList.toggle('pledge-open');
};

const checkIfItsActive = () => {
  modals.forEach((element) => {
    if (element.checkmarkActivated == 'true') {
      switch (element.name) {
        case 'basic':
          checkmarkActive(checkmarkBasic);
          pledgeOpen(modalPledgeBasic);
          break;

        case 'bamboo':
          checkmarkActive(checkmarkBamboo);
          pledgeOpen(modalPledgeBamboo);
          break;

        case 'black':
          checkmarkActive(checkmarkBlack);
          pledgeOpen(modalPledgeBlack);
          break;

        case 'mahogany':
          checkmarkActive(checkmarkMahogany);
          pledgeOpen(modalPledgeMahogany);
          break;
      }
      element.checkmarkActivated = 'false';
    }
  });
};

checkmarkBasic.addEventListener('click', () => {
  checkIfItsActive();

  checkmarkActive(checkmarkBasic);
  pledgeOpen(modalPledgeBasic);
  modals[0].checkmarkActivated = 'true';
});

checkmarkBamboo.addEventListener('click', () => {
  checkIfItsActive();

  checkmarkActive(checkmarkBamboo);
  pledgeOpen(modalPledgeBamboo);
  modals[1].checkmarkActivated = 'true';
});

checkmarkBlack.addEventListener('click', () => {
  checkIfItsActive();

  checkmarkActive(checkmarkBlack);
  pledgeOpen(modalPledgeBlack);
  modals[2].checkmarkActivated = 'true';
});

checkmarkMahogany.addEventListener('click', () => {
  checkIfItsActive();

  checkmarkActive(checkmarkMahogany);
  pledgeOpen(modalPledgeMahogany);
  modals[3].checkmarkActivated = 'true';
});

selectRewardCta.addEventListener('click', () => {
  modalOpen();
});

bambooCta.addEventListener('click', () => {
  modalOpen();

  checkmarkActive(checkmarkBamboo);
  pledgeOpen(modalPledgeBamboo);
  modals[1].checkmarkActivated = 'true';
});

blackCta.addEventListener('click', () => {
  modalOpen();

  checkmarkActive(checkmarkBlack);
  pledgeOpen(modalPledgeBlack);
  modals[2].checkmarkActivated = 'true';
});

mahoganyCta.addEventListener('click', () => {
  modalOpen();

  checkmarkActive(checkmarkMahogany);
  pledgeOpen(modalPledgeMahogany);
  modals[3].checkmarkActivated = 'true';
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
