const desktopNav = document.querySelector('.header__desktopNav');
const mobileNav = document.querySelector('.header__mobileNav');

const minBreakpoint = '768px';
const toggleMobileNav = window.matchMedia(`(max-width: ${minBreakpoint})`);

// always Checking the media Query__
const checkingWidth = () => {
  setTimeout(() => {
    if (toggleMobileNav.matches) {
      desktopNav.style.display = 'none';
      mobileNav.style.display = 'flex';
      checkingWidth();
    } else {
      desktopNav.style.display = 'flex';
      mobileNav.style.display = 'none';
      checkingWidth();
    }
  }, 0);
};
checkingWidth();

// Menu & Dropdown
const menu = document.querySelector('.header__mobileNav__menu');
const dropdown = document.querySelector('.header__mobileNav__dropdown');
const dropdownLinks = document.querySelectorAll('.header__mobileNav__dropdown__links');

// Lines
const lines = document.querySelectorAll('.header__mobileNav__menu__line');
const lineOne = document.querySelector('.header__mobileNav__menu__line-1');
const lineTwo = document.querySelector('.header__mobileNav__menu__line-2');
const lineThree = document.querySelector('.header__mobileNav__menu__line-3');

// __________START FUNCTIONS__________

// For menu animations start__
const menuAnimationStart = () => {
  lineTwo.style.display = 'none';
  lineOne.style.top = '50%';
  lineThree.style.top = '50%';
  lineOne.style.transform = 'translate(-50%, -50%) rotate(45deg)';
  lineThree.style.transform = 'translate(-50%, -50%) rotate(-45deg)';
  setTimeout(() => {
    menu.style.background = 'hsla(0, 0%, 100%, 0.25)';
    menu.style.borderRadius = 1.25 + 'rem';
    lines.forEach(line => {
      line.style.background = 'hsl(0, 0%, 100%)';
    });
  }, 250);
};

// For menu animations end__
const menuAnimationEnd = () => {
  lineTwo.style.display = 'initial';
  lineOne.style.top = '25%';
  lineThree.style.top = '75%';
  lineOne.style.transform = 'translate(-50%, 0%)';
  lineThree.style.transform = 'translate(-50%, 0%)';
  setTimeout(() => {
    menu.style.background = 'hsla(0, 0%, 100%, 0.25)';
    menu.style.borderRadius = 0;
    lines.forEach(line => {
      line.style.background = 'hsl(0, 0%, 100%)';
    });
  }, 250);
};

// For opening menu__
const openMenu = () => {
  menuAnimationStart();
  // Making menu looks amazing!
  setTimeout(() => {
    menu.dataset.opened = 'true';
    dropdown.style.display = 'initial';
    setTimeout(() => {
      dropdown.style.transform = 'translate(0rem, -0rem) scale(1)';
    }, 100);
  }, 400);
};

// For closing menu__
const closeMenu = () => {
  menuAnimationEnd();
  // Making menu looks amazing!
  setTimeout(() => {
    menu.dataset.opened = 'false';
    dropdown.style.transform = 'translate(17.5rem, -10rem) scale(0) ';
    setTimeout(() => {
      dropdown.style.display = 'none';
    }, 300);
  }, 400);
};

// __________END FUNCTIONS__________

// Event listener__
menu.addEventListener('click', e => {
  if (e.target.dataset.opened == 'false') openMenu();
  else closeMenu();
});
