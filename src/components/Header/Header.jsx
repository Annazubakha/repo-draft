import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/GithubIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/LinkedinIcon.svg';
const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to="/">
          <Logo />
        </Link>
        <ul className={s.header_list}>
          <li className={s.header_list_item}>
            <Link to="">About me</Link>
          </li>
          <li className={s.header_list_item}>
            <Link to="">Portfolio</Link>
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

export default Header;
