import { Link } from 'react-router-dom';

import s from '../../components/ProjectOne/ProjectOne.module.css';

import project2Img1 from '../..//assets/images/boutique@1x.png';
import project2Img2 from '../..//assets/images/boutique@2x.png';

const ProjectTwo = () => {
  return (
    <li className={s.list_item}>
      <h3 className={s.project_name}>Food Boutique</h3>
      <div className={s.description_wrapper}>
        <picture className={s.picture}>
          <source
            srcSet={`${project2Img1} 1x, ${project2Img2} 2x`}
            type="image/png"
          />
          <img
            className={s.project_foto}
            src={project2Img1}
            alt="Food boutique project"
          />
        </picture>
        <div>
          <div className={s.description_inside_wrapper}>
            <p className={s.description}>
              An online store for purchasing products with a convenient and
              intuitive interface.
            </p>
            <p className={s.text}>
              <span className={s.span_text}>Used technologies:</span> HTML, CSS,
              JS, Parcel.
            </p>

            <p className={s.text}>
              <span className={s.span_text}>Done:</span> header, filtering by
              alphabet, popularity and price.
            </p>
          </div>
          <div className={s.links_wrapper}>
            <Link
              className={s.project_link_website}
              to="https://dimkagrek.github.io/AsyncAvengers/"
            >
              Website
            </Link>
            <Link
              className={s.project_link_repo}
              to="https://github.com/DimkaGrek/AsyncAvengers"
            >
              Github repository
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectTwo;
