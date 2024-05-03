import { Link } from 'react-router-dom';

import s from '../../components/ProjectOne/ProjectOne.module.css';

import project4Img1 from '../..//assets/images/taskpro@1x.png';
import project4Img2 from '../..//assets/images/taskpro@2x.png';

export const ProjectFour = () => {
  return (
    <li className={s.list_item}>
      <h3 className={s.project_name}>Task Pro</h3>
      <div className={s.additional_wrapper}>
        <picture className={s.picture}>
          <source
            srcSet={`${project4Img1} 1x, ${project4Img2} 2x`}
            type="image/png"
          />
          <img
            className={s.project_foto}
            src={project4Img1}
            alt="TaskPro project"
          />
        </picture>
        <div>
          <div className={s.description_inside_wrapper}>
            <p>An all-in-one scheduling app.</p>
            <p>
              <span className={s.span_text}>Used technologies:</span> React,
              ReduxToolkit, AJAX, RestApi, HTML, CSS.
            </p>

            <p>
              <span className={s.span_text}>Done:</span> welcome and auth pages,
              redux for auth, modal window for add card and filters.
            </p>
          </div>
          <div className={s.links_wrapper}>
            <Link
              className={s.project_link_website}
              to="https://dimkagrek.github.io/NodeAvengers/welcome"
            >
              Website
            </Link>
            <Link
              className={s.project_link_repo}
              to="https://github.com/DimkaGrek/NodeAvengers"
            >
              Github repository
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};
