// import ScrollMagic from 'scrollmagic';
import { projBox } from './variables';

const controller = new ScrollMagic.Controller();

const pinBrandText = new ScrollMagic.Scene({
  triggerElement: '#toggle-contact',
  triggerHook: .35,
  duration: '40%'
})
  .setPin('.brand-text')
  .addIndicators({ name: 'brandText' })
  .addTo(controller);

const pinBrandDesc = new ScrollMagic.Scene({
  triggerElement: '#toggle-contact',
  triggerHook: .45,
  duration: '40%'
})
  .setPin('.brand-description')
  .addIndicators({ name: 'brandDesc' })
  .addTo(controller);

const about = new ScrollMagic.Scene({
  triggerElement: '#about',
  triggerHook: .7
})
  .setClassToggle('#about', 'fade-in')
  .addTo(controller);

const showintro = new ScrollMagic.Scene({
  triggerElement: '#showintro',
  triggerHook: .8
})
  .setClassToggle('#showintro', 'fade-in')
  .addTo(controller);

projBox.forEach(proj => {
  const projScene = new ScrollMagic.Scene({
    triggerElement: proj,
    triggerHook: .75,
  })
    .setClassToggle(proj, 'fade-in')
    .addTo(controller);
});