import {
  GoUpBtn,
  Header,
  ProjectOne,
  ProjectThree,
  ProjectTwo,
} from 'components';
import s from './Portfolio.module.css';
const Portfolio = () => {
  return (
    <>
      <Header />
      <section className={s.section_portfolio} id="portfolio">
        <h2 className={s.title}>Portfolio</h2>
        <ul className={s.list}>
          <ProjectThree />
          <ProjectTwo />
          <ProjectOne />
          <GoUpBtn />
        </ul>
      </section>
    </>
  );
};
export default Portfolio;
