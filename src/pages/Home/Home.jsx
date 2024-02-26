import { Link } from 'react-router-dom';

import s from './Home.module.css';

export const Home = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Welcome to the <span className={s.title_span}>TWEETS</span> application
      </h1>
      <Link to="/tweets" className={s.link}>
        Get start
      </Link>
    </div>
  );
};
