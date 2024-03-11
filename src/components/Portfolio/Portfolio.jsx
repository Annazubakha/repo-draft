import s from './Portfolio.module.css';
const Portfolio = () => {
  return (
    <section className={s.section_portfolio}>
      <h2 className={s.title}>Portfolio</h2>
      <ul className={s.list}>
        <li className={s.list_item}>
          <h3>Vyshyvanka Vibes</h3>
          <button type="button">Read more</button>
        </li>
        <li className={s.list_item}>
          <h3> Food Boutique</h3>
          <button type="button">Read more</button>
        </li>
        <li className={s.list_item}>
          <h3>EXPENSETRACKER</h3>
          <button type="button">Read more</button>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
