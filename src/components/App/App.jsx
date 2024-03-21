import { Suspense, lazy } from 'react';
import { Loader } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../pages/Home/Home'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
