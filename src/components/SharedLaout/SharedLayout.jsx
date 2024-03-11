import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

import Header from 'components/Header/Header';
import { Loader } from 'components';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
