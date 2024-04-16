import { Suspense, lazy, useEffect } from 'react';
import { Loader } from 'components';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
const Home = lazy(() => import('../../pages/Home/Home'));
const Portfolio = lazy(() => import('../../pages/Portfolio/Portfolio'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      scroll.scrollToTop({ duration: 2500 });
    };

    scrollToTop();
  }, [pathname]);

  return null;
};
export const App = () => {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <ScrollToTop />
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<Loader />}>
              <Portfolio />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
