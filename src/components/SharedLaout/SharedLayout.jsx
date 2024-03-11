import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

import Header from 'components/Header/Header';
import { Loader } from 'components';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
