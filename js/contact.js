import { body, html, contactOvr, contactCnt, mailContact, socialContact, toggleContact } from './variables';
import { TweenMax } from 'gsap';

export const contactBtnPageLoad = () => {
  TweenMax.from(toggleContact, .7, {
    left: '-110%',
    opacity: 0
  });
}

export const toggleContactOvr = (e) => {
  e.stopPropagation();
  body.classList.contains('noscroll') ? body.classList.remove('noscroll') : body.classList.add('noscroll');
  html.classList.contains('noscroll') ? html.classList.remove('noscroll') : html.classList.add('noscroll');
  if (contactOvr.getAttribute('isOpen')) {
    closeContactOvr();
  } else {
    openContactOvr();
  }
}

const openContactOvr = () => {
  body.classList.add('noscroll');
  contactOvr.setAttribute('isOpen', true);
  TweenMax.fromTo(contactCnt, .8, {
    display: 'none',
    height: '0%',
  }, {
      display: 'block',
      height: '100vh',
    });
  TweenMax.fromTo(contactOvr, .3, {
    display: 'none',
    height: '0%',
  }, {
      display: 'block',
      height: '95%',
    });
  TweenMax.set(mailContact, {
    top: '0',
    opacity: 1
  });
  TweenMax.from(mailContact, .3, {
    top: '50%',
    opacity: 0,
    delay: .5,
  });
  TweenMax.set(socialContact, {
    opacity: 1
  });
  TweenMax.from(socialContact, .3, {
    opacity: 0,
    delay: .9,
  });
}

const closeContactOvr = () => {
  body.classList.remove('noscroll');
  contactOvr.removeAttribute('isOpen');
  TweenMax.to(mailContact, .2, {
    top: '-50%',
    opacity: 0
  })
  TweenMax.to(socialContact, .3, {
    opacity: 0
  })
  TweenMax.to(contactOvr, .3, {
    display: 'none',
    height: '0%',
    delay: .3
  });
  TweenMax.to(contactCnt, .3, {
    display: 'none',
    height: '0%',
    delay: .3
  });
}

