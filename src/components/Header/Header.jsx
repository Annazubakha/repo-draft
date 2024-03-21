import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/GithubIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/LinkedinIcon.svg';

import s from './Header.module.css';

export const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to="/" onClick={scrollToTop}>
          <Logo />
        </Link>
        <ul className={s.header_list}>
          <li className={s.header_list_item}>
            <ScrollLink
              to="about-me"
              spy={true}
              smooth={true}
              offset={-85}
              duration={1500}
            >
              About me
            </ScrollLink>
          </li>
          <li className={s.header_list_item}>
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-85}
              duration={1500}
            >
              Portfolio
            </ScrollLink>
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
        </ul>
      </nav>
    </header>
  );
};
