import myPhoto from '../..//assets/images/myPhoto.jpg';

import s from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={s.section_hero}>
      <div className={s.wrapper}>
        <div>
          {' '}
          <h1 className={s.title}>front-end developer</h1>
          <p className={s.description}>
            I am a junior Front-end developer with knowledge of{' '}
            <span className={s.accent}>HTML, CSS, React and JavaScript.</span> I
            have the skills of <span className={s.accent}>teamwork</span> and
            working with GitHub. I have experience as a Scrum Master in
            projects. I take a responsible approach to{' '}
            <span className={s.accent}>time management </span>and understand the
            importance of deadlines. I always eager to learn and{' '}
            <span className={s.accent}>push the boundaries</span> of my
            thinking.
          </p>
        </div>
        <img className={s.my_foto} src={myPhoto} alt="Anna Zubakha" />
      </div>
    </section>
  );
};
