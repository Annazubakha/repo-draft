import {
  Hero,
  SharedLayout,
  Portfolio,
  AboutMe,
  Footer,
  GoUpBtn,
} from '../../components';

const Home = () => {
  return (
    <>
      <SharedLayout />
      <main className="container">
        <Hero />
        <Portfolio />
        <AboutMe />
        <GoUpBtn />
      </main>
      <Footer />
    </>
  );
};

export default Home;
