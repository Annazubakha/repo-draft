import s from './BurgerMenu.module.css';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/GithubIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/LinkedinIcon.svg';
import { ReactComponent as Whatsapp } from '../../assets/icons/Whatsapp.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/CloseIcon.svg';

export const BurgerMenu = () => {
  return (
    <div className={s.burger_wrapper}>
      <Logo className={s.my_logo} />

      <div className={s.inside_wrapper}>
        <button type="button" className={s.close_button}>
          <CloseIcon className={s.close_icon} />
        </button>
        <ul className={s.header_list}>
          <li>About me</li>
          <li>Portfolio</li>
        </ul>
        <ul className={s.header_list_social}>
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
      </div>
    </div>
  );
};
