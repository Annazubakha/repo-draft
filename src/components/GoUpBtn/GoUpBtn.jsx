import { animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from 'react';

import { ReactComponent as GoUp } from '../../assets/icons/GoUp.svg';

import s from './GoUpBtn.module.css';

export const GoUpBtn = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      const offset = 100;
      if (!showScroll && window.scrollY > offset) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= offset) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      {showScroll && (
        <button
          className={`${s.scroll_btn} ${showScroll ? s.show : ''}`}
          onClick={scrollToTop}
        >
          <GoUp className={s.icon} />
        </button>
      )}
    </>
  );
};
