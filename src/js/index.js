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

const modalsData = [
  {
    name: 'basic',
    checkmarkActivated: 'false',
  },
  {
    name: 'bamboo',
    checkmarkActivated: 'false',
    pieces: 101,
  },
  {
    name: 'black',
    checkmarkActivated: 'false',
    pieces: 64,
  },
  {
    name: 'mahogany',
    checkmarkActivated: 'false',
    pieces: 1,
  },
];

const backersData = {
  moneyBacked: 89914,
  totalBackers: 5007,
  daysLeft: 56,
};

document.addEventListener('DOMContentLoaded', () => {
  progress();
  display();
});

// Mobile menu
btnHamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  overlay.classList.toggle('open');
});

// Modal open
const modalOpen = () => {
  display();
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
  modalsData.forEach((element) => {
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
  modalsData[0].checkmarkActivated = 'true';
});

checkmarkBamboo.addEventListener('click', () => {
  checkIfItsActive();

  checkmarkActive(checkmarkBamboo);
  pledgeOpen(modalPledgeBamboo);
  modalsData[1].checkmarkActivated = 'true';
});

checkmarkBlack.addEventListener('click', () => {
  checkIfItsActive();

  checkmarkActive(checkmarkBlack);
  pledgeOpen(modalPledgeBlack);
  modalsData[2].checkmarkActivated = 'true';
});

checkmarkMahogany.addEventListener('click', () => {
  checkIfItsActive();

  checkmarkActive(checkmarkMahogany);
  pledgeOpen(modalPledgeMahogany);
  modalsData[3].checkmarkActivated = 'true';
});

selectRewardCta.addEventListener('click', () => {
  modalOpen();
});

bambooCta.addEventListener('click', () => {
  modalOpen();

  checkmarkActive(checkmarkBamboo);
  pledgeOpen(modalPledgeBamboo);
  modalsData[1].checkmarkActivated = 'true';
});

blackCta.addEventListener('click', () => {
  modalOpen();

  checkmarkActive(checkmarkBlack);
  pledgeOpen(modalPledgeBlack);
  modalsData[2].checkmarkActivated = 'true';
});

mahoganyCta.addEventListener('click', () => {
  modalOpen();

  checkmarkActive(checkmarkMahogany);
  pledgeOpen(modalPledgeMahogany);
  modalsData[3].checkmarkActivated = 'true';
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

const inputValue = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = data.get('amount');
  backersData.moneyBacked += Number(value);
  backersData.totalBackers++;
  display();
  progress();
};

const formBasic = document.getElementById('pledge-form-basic');
const formBamboo = document.getElementById('pledge-form-bamboo');
const formBlack = document.getElementById('pledge-form-black');
const formMahogany = document.getElementById('pledge-form-mahogany');

formBasic.addEventListener('submit', (event) => {
  inputValue(event);
  thankYouModalOpen();
});
formBamboo.addEventListener('submit', (event) => {
  modalsData[1].pieces--;
  inputValue(event);

  thankYouModalOpen();
});
formBlack.addEventListener('submit', (event) => {
  modalsData[2].pieces--;
  inputValue(event);
  thankYouModalOpen();
});
formMahogany.addEventListener('submit', (event) => {
  modalsData[3].pieces--;
  checkPiecesLeft(modalsData, mahogany);
  inputValue(event);

  thankYouModalOpen();
});

const thankYouModal = document.querySelector('.modal--thank-you');
const thankYouCta = document.getElementById('thank-you-cta');

const thankYouModalOpen = () => {
  checkIfItsActive();
  modal.classList.toggle('open');
  thankYouModal.classList.toggle('open');
};

thankYouCta.addEventListener('click', () => {
  thankYouModal.classList.toggle('open');
  overlay.classList.toggle('open');
});

// Progress bar animation
const progress = () => {
  progressBar.style.width = (backersData.moneyBacked / 100000) * 100 + '%';
};

const totalBackers = document.getElementById('totalBackers');
const piecesLeftBamboo = document.querySelectorAll('#pieces-left-bamboo');
const piecesLeftBlack = document.querySelectorAll('#pieces-left-black');
const piecesLeftMahogany = document.querySelectorAll('#pieces-left-mahogany');

const display = () => {
  backedValue.innerText = `$${backersData.moneyBacked}`;
  totalBackers.innerText = `${backersData.totalBackers}`;

  for (let i = 0; i < piecesLeftBamboo.length; i++) {
    piecesLeftBamboo[i].innerHTML = `${modalsData[1].pieces}<span>left</span>`;
  }

  for (let i = 0; i < piecesLeftBlack.length; i++) {
    piecesLeftBlack[i].innerHTML = `${modalsData[2].pieces}<span>left</span>`;
  }

  for (let i = 0; i < piecesLeftMahogany.length; i++) {
    piecesLeftMahogany[
      i
    ].innerHTML = `${modalsData[3].pieces}<span>left</span>`;
  }
};

const innerCard = document.querySelectorAll('.main__card--innerCard');

const checkPiecesLeft = (which) => {
  switch (
    which
    // case 'bamboo':
    //   bambooCta.classList.replace(
    //     'main__button--innerCard',
    //     'main__button--outOfStock'
    //   );

    //   innerCard[0].classList.toggle('out-of-stock');
    //   break;

    // case 'black':
    //   blackCta.classList.replace(
    //     'main__button--innerCard',
    //     'main__button--outOfStock'
    //   );

    //   innerCard[1].classList.toggle('out-of-stock');
    //   break;

    // case 'mahogany':
    //   if (modalsData[3].pieces <= 0) {
    //     mahoganyCta.classList.replace(
    //       'main__button--innerCard',
    //       'main__button--outOfStock'
    //     );

    //     innerCard[2].classList.toggle('out-of-stock');
    //   }
    //   break;
  ) {
  }
};
