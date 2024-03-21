import { ProjectOne, ProjectThree, ProjectTwo } from 'components';
import s from './Portfolio.module.css';

export const Portfolio = () => {
  return (
    <section className={s.section_portfolio} id="portfolio">
      <h2 className={s.title}>Portfolio</h2>
      <ul className={s.list}>
        <ProjectThree />
        <ProjectTwo />
        <ProjectOne />
      </ul>
    </section>
  );
};
