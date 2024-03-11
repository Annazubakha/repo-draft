import Hero from 'components/Hero/Hero';
// import s from './Home.module.css';
import SharedLayout from '../../components/SharedLaout/SharedLayout';
import Skills from 'components/Skills/Skills';
import AboutMe from 'components/AboutMe/AboutMe';
import Portfolio from 'components/Portfolio/Portfolio';
export const Home = () => {
  return (
    <>
      <SharedLayout />
      <div className="container">
        <Hero />
        <Skills />
        <AboutMe />
        <Portfolio />
      </div>
    </>
  );
};
