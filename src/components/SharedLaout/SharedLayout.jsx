import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader, Header } from 'components';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
