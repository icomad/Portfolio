import { brandText, brandDesc, scrollArrow } from './variables';
import { TweenMax, TimelineMax } from 'gsap';

export const brandTextPageLoad = () => {
  TweenMax.from(brandText, .7, {
    opacity: 0,
    top: '-210%'
  });
}

export const brandDescPageLoad = () => {
  TweenMax.from(brandDesc, .7, {
    opacity: 0,
    top: '-210%'
  });
}

export const scrollDownArrowAnim = new TimelineMax({ repeat: -1, repeatDelay: 1 });

scrollDownArrowAnim.from('.scroller', .5, {
  opacity: 0,
  bottom: '5%'
})

export const boxAnim = (proj) => {
  const cube = proj.children[0];
  const front = cube.children[0];
  const right = cube.children[1];
  const translation = proj.offsetWidth / 2;
  TweenMax.set(front, {
    transform: `translateZ(${translation}px)`
  })
  TweenMax.set(right, {
    transform: `rotateY(90deg)translateZ(${translation}px)`
  })
}

export const boxAnimRev = (proj) => {
  const cube = proj.children[0];
  const front = cube.children[0];
  const right = cube.children[1];
}