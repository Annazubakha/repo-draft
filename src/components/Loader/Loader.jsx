import { CircleLoader } from 'react-spinners';

import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.loader_wrapper}>
      <CircleLoader color="#9736bb" size={150} />
    </div>
  );
};
