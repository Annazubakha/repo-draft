import { Link } from 'react-router-dom';

import s from '../../components/ProjectOne/ProjectOne.module.css';

import project5Img1 from '../..//assets/images/Screenshot_1.png';

export const ProjectFive = () => {
  return (
    <li className={s.list_item}>
      <h3 className={s.project_name}>Task Pro</h3>
      <div className={s.additional_wrapper}>
        <picture className={s.picture}>
          <source
            srcSet={`${project5Img1} 1x, ${project5Img1} 2x`}
            type="image/png"
          />
          <img
            className={s.project_foto}
            src={project5Img1}
            alt="TaskPro project"
          />
        </picture>
        <div>
          <div className={s.description_inside_wrapper}>
            <p>An application where you can search and book nanny.</p>
            <p>
              <span className={s.span_text}>Used technologies:</span> React,
              HTML, CSS, Firebase, JavaScript.
            </p>

            <p>
              <span className={s.span_text}>In progress</span>
            </p>
          </div>
          <div className={s.links_wrapper}>
            <Link
              className={s.project_link_website}
              to="https://annazubakha.github.io/nanny-services/"
            >
              Website
            </Link>
            <Link
              className={s.project_link_repo}
              to="https://github.com/Annazubakha/nanny-services"
            >
              Github repository
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};
