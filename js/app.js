import { customCursorFollow, customCursorClose, customCursorOpen } from './cursor';
import { toggleContactOvr, contactBtnPageLoad } from './contact';
import { projBtnPageLoad, toggleProjOvrAnim, closeProjBtnAnim, openProjBtnAnim, strikeThroughOn } from './projects';
import { html, body, links, toggleContact, contactOvr, contactCnt, openProj, closeProj, projectsOvr, projBox } from './variables';
import { brandTextPageLoad, brandDescPageLoad, boxAnim, boxAnimRev } from './home';
import './scroller';

const on = (source, event, callback) => source.addEventListener(event, callback);


on(document, 'DOMContentLoaded', () => {
  brandTextPageLoad();
  brandDescPageLoad();
  projBtnPageLoad();
  contactBtnPageLoad();
});

on(document, 'mousemove', e => customCursorFollow(e));
on(toggleContact, 'mouseenter', customCursorOpen);
on(toggleContact, 'mouseleave', customCursorClose);
on(toggleContact, 'click', toggleContactOvr);
on(contactCnt, 'click', toggleContactOvr);
on(contactOvr, 'click', e => toggleContactOvr(e));
on(openProj, 'click', () => {
  body.classList.add('noscroll');
  html.classList.add('noscroll');
  toggleProjOvrAnim.reversed() ? toggleProjOvrAnim.play().timeScale(1) : toggleProjOvrAnim.reverse().timeScale(2);
});
on(openProj, 'mouseenter', () => {
  customCursorOpen();
  //openProjBtnAnim.restart();
});
on(openProj, 'mouseleave', customCursorClose);
on(closeProj, 'mouseenter', () => {
  customCursorOpen();
  //closeProjBtnAnim.restart();
});
on(closeProj, 'mouseleave', customCursorClose);
on(closeProj, 'click', () => {
  body.classList.remove('noscroll');
  html.classList.remove('noscroll');
  toggleProjOvrAnim.reversed() ? toggleProjOvrAnim.play().timeScale(1) : toggleProjOvrAnim.reverse().timeScale(2);
});
on(projectsOvr, 'click', () => {
  body.classList.remove('noscroll');
  html.classList.remove('noscroll');
  toggleProjOvrAnim.reversed() ? toggleProjOvrAnim.play().timeScale(1) : toggleProjOvrAnim.reverse().timeScale(2);
});

links.forEach(element => {
  on(element, 'mouseenter', customCursorOpen);
  on(element, 'mouseleave', customCursorClose);
  on(element, 'click', e => {
    e.stopPropagation();
  });
});

projBox.forEach(proj => {
  on(proj, 'mouseenter', () => {
    boxAnim(proj);
  });

  on(proj, 'mouseleave', () => {
    boxAnimRev(proj);
  });
})
