import { Link } from 'react-router-dom';

import s from './ProjectOne.module.css';

import project1Img1 from '../../assets/images/vyshyvanka@1x.png';
import project1Img2 from '../..//assets/images/vyshyvanka@2x.png';

const ProjectOne = () => {
  return (
    <li className={s.list_item}>
      <h3 className={s.project_name}>Vyshyvanka Vibes</h3>
      <div className={s.description_wrapper}>
        <picture className={s.picture}>
          <source
            srcSet={`${project1Img1} 1x, ${project1Img2} 2x`}
            type="image/png"
          />
          <img
            className={s.project_foto}
            src={project1Img1}
            alt="Vysyvanka Vibes project"
          />
        </picture>
        <div>
          <div className={s.description_inside_wrapper}>
            <p className={s.description}>
              The store for sale Ukrainian national clothes.
            </p>
            <p className={s.text}>
              <span className={s.span_text}>Used technologies:</span> HTML, CSS.
            </p>

            <p className={s.text}>
              <span className={s.span_text}>Done:</span> section Testimonials.
            </p>
          </div>
          <div className={s.links_wrapper}>
            <Link
              className={s.project_link_website}
              to="https://dimkagrek.github.io/WhiteCode01-project/"
            >
              Website
            </Link>
            <Link
              className={s.project_link_repo}
              to="https://github.com/DimkaGrek/WhiteCode01-project"
            >
              Github repository
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectOne;
