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
  TweenMax.to(proj.children[0], .5, {
    //width: '0%',
    //transform: 'rotateY(-90deg)'
  })
}

export const boxAnimRev = (proj) => {
  TweenMax.to(proj.children[0], .5, {
    //width: '100%',
    //transform: 'rotateY(0)'
  })
}