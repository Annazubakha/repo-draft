import Hero from 'components/Hero/Hero';
import SharedLayout from '../../components/SharedLaout/SharedLayout';

import Portfolio from 'components/Portfolio/Portfolio';
import AboutMe from 'components/AboutMe/AboutMe';
import Footer from 'components/Footer/Footer';
export const Home = () => {
  return (
    <>
      <SharedLayout />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
};
