import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Logo />
        <ul className={s.header_list}>
          <li className={s.header_list_item}>
            <Link to="">About me</Link>
          </li>
          <li className={s.header_list_item}>
            <Link to="">Skills</Link>
          </li>
          <li className={s.header_list_item}>
            <Link to="">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
