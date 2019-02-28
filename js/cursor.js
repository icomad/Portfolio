import { cursor } from './variables';
import { TweenMax } from 'gsap';

export const customCursorFollow = ({ pageX, pageY }) => {
  TweenMax.to(cursor, .3, {
    top: pageY,
    left: pageX
  });
};
export const customCursorOpen = () => {
  TweenMax.to(cursor, .3, {
    background: 'transparent',
    border: '1px solid #000',
    width: '40px',
    height: '40px',
  });
};
export const customCursorClose = () => {
  TweenMax.to(cursor, .3, {
    background: '#000',
    width: '8px',
    height: '8px',
    border: 'none'
  })
};