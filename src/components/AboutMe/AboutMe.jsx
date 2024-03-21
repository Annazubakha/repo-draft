import s from './AboutMe.module.css';

export const AboutMe = () => {
  return (
    <section id="about-me" className={s.section_aboutme}>
      <h2 className={s.title}>About me</h2>
      <div className={s.wrapper_info}>
        <div>
          <h3 className={s.second_title}>EDUCATION</h3>
          <p> IT School GoIT 2023-2024 </p>
          <p>Front-end Developer</p>
        </div>
        <div>
          <h3 className={s.second_title}>HARD SKILLS</h3>
          <ul className={s.skills_list}>
            <li>HTML5/CSS3</li>
            <li>Responsive/Adaptive design</li>
            <li>JavaScript</li>
            <li>GIT</li>
            <li>API</li>
            <li>React/Redux</li>
          </ul>
        </div>
        <div>
          <h3 className={s.second_title}>SOFT SKILLS</h3>
          <ul className={s.skills_list}>
            <li>Time management skills </li>
            <li>Attentive</li>
            <li>Cooperative</li>
            <li>Flexible</li>
          </ul>
        </div>
        <div>
          <h3 className={s.second_title}>LANGUAGES</h3>
          <ul className={s.skills_list}>
            <li>English - Upper-Intermediate</li>
            <li>Spanish - Intermediate</li>
            <li>Ukrainian - Native</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
