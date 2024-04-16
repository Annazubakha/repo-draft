import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/GithubIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/LinkedinIcon.svg';
import { ReactComponent as Whatsapp } from '../../assets/icons/Whatsapp.svg';
import { ReactComponent as Burger } from '../../assets/icons/Burger.svg';

import s from './Header.module.css';
import { BurgerMenu } from 'components';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const handleBurgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
    closeMobileMenu();
  };
  // const redirectToHome = () => {
  //   window.location.href = '/';
  // };

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to="/" onClick={scrollToTop}>
          <Logo className={s.my_logo} />
        </Link>
        <Burger className={s.burger} onClick={handleBurgerClick} />
        {isMobileMenuOpen && <BurgerMenu />}
        <ul className={s.header_list}>
          <li className={s.header_list_item}>
            {location.pathname === '/portfolio' ? (
              <Link to="/" onClick={scrollToTop}>
                Home
              </Link>
            ) : (
              <ScrollLink
                to="about-me"
                spy={true}
                smooth={true}
                offset={-85}
                duration={1500}
              >
                About me
              </ScrollLink>
            )}
          </li>
          <li className={s.header_list_item}>
            {location.pathname === '/portfolio' ? (
              ''
            ) : (
              <Link to="portfolio" onClick={scrollToTop}>
                Portfolio
              </Link>
            )}
          </li>
          <li className={s.header_list_item_social_media}>
            <Link to="https://github.com/Annazubakha">
              <GithubIcon className={s.icon} />
            </Link>
          </li>
          <li className={s.header_list_item_social_media}>
            <Link to="https://www.linkedin.com/in/anna-zubakha/">
              <LinkedinIcon className={s.icon} />
            </Link>
          </li>
          <li className={s.header_list_item_social_media}>
            <Link to="https://wa.me/380982417614">
              <Whatsapp className={s.icon} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
