import ProjectOne from 'components/ProjectOne/ProjectOne';
import ProjectThree from 'components/ProjectThree/ProjectThree';
import ProjectTwo from 'components/ProjectTwo/ProjectTwo';

import s from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section className={s.section_portfolio}>
      <h2 className={s.title}>Portfolio</h2>
      <ul className={s.list}>
        <ProjectThree />
        <ProjectTwo />
        <ProjectOne />
      </ul>
    </section>
  );
};

export default Portfolio;
