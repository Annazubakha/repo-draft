import { Hero, SharedLayout, AboutMe, Footer, GoUpBtn } from '../../components';

const Home = () => {
  return (
    <>
      <SharedLayout />
      <main className="container">
        <Hero />
        <AboutMe />
        <GoUpBtn />
      </main>
      <Footer />
    </>
  );
};

export default Home;
