import { projectsOvr, openProj } from './variables';
import { TimelineMax, TweenMax } from 'gsap';

export const toggleProjOvrAnim = new TimelineMax({ paused: true, reversed: true });
export const openProjBtnAnim = new TimelineMax({ paused: true });
export const closeProjBtnAnim = new TimelineMax({ paused: true });
const projBtnClickedAnim = new TimelineMax({ paused: true });

export const projBtnPageLoad = () => {
  TweenMax.from(openProj, .7, {
    right: '-110%',
    opacity: 0
  });
}

export const strikeThroughOn = (target) => {
  TweenMax.to('#' + target.id + ' .strike', .3, {
    width: '100%',
  })
}

export const strikeThroughOff = (target) => {
  TweenMax.to('#' + target.id + ' .strike', .2, {
    width: '0',
  })
}

projBtnClickedAnim
  .staggerTo('.menu-open span', .3, {
    left: '100%',
    width: '0%'
  }, .1)
  .to('.menu-open', .3, {
    autoAlpha: 0,
    display: 'none'
  })
  .set('.menu-close .one, .menu-close .two', {
    width: 0,
  })
  .set('.menu-close', {
    display: 'block',
    opacity: 1
  })
  .to('.menu-close .one', .3, {
    width: '100%',
  })
  .to('.menu-close .two', .3, {
    width: '100%',
  });


closeProjBtnAnim.to('.menu-close .one', .2, {
  width: 0,
}).to('.menu-close .two', .2, {
  width: 0,
}).to('.menu-close .one', .2, {
  width: '100%',
}).to('.menu-close .two', .2, {
  width: '100%',
})

openProjBtnAnim.staggerTo('.menu-open span', .2, {
  left: '100%',
  width: '0%'
}, .1).set('.menu-open .one, .menu-open .three', {
  left: 0,
  width: 0,
}).set('.menu-open .two', {
  left: '10%',
}).staggerTo('.menu-open span', .2, {
  width: '100%'
}, .1);

toggleProjOvrAnim
  .add(projBtnClickedAnim.play())
  .to(projectsOvr, .6, {
    left: 0,
    display: 'block',
  }, '-=1')
  .staggerTo('.projects-list-item', .2, { left: 0, opacity: 1 }, .1, '-=.5');
