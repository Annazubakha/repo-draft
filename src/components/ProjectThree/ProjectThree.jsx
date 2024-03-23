import { Link } from 'react-router-dom';

import s from '../../components/ProjectOne/ProjectOne.module.css';

import project3Img1 from '../..//assets/images/tracker@1x.png';
import project3Img2 from '../..//assets/images/tracker@2x.png';

export const ProjectThree = () => {
  return (
    <li className={s.list_item}>
      <h3 className={s.project_name}>EXPENSETRACKER</h3>
      <picture className={s.picture}>
        <source
          srcSet={`${project3Img1} 1x, ${project3Img2} 2x`}
          type="image/png"
        />
        <img
          className={s.project_foto}
          src={project3Img1}
          alt="ExpenseTraker project"
        />
      </picture>
      <div>
        <div className={s.description_inside_wrapper}>
          <p>The site for tracking income and expense.</p>
          <p>
            <span className={s.span_text}>Used technologies:</span> HTML, CSS,
            React, Redux.
          </p>

          <p>
            <span className={s.span_text}>Done:</span> welcome page, login and
            register pages.
          </p>
        </div>
        <div className={s.links_wrapper}>
          <Link
            className={s.project_link_website}
            to="https://project-capybara-66-rust.vercel.app/"
          >
            Website
          </Link>
          <Link
            className={s.project_link_repo}
            to="https://github.com/ZhurbeyArtem/project-Capybara-66"
          >
            Github repository
          </Link>
        </div>
      </div>
    </li>
  );
};
