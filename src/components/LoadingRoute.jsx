import React, { Suspense } from 'react';
import Spinner from './Spinner';

const LoadingRoute = ({ component: Component, ...rest }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Component {...rest} />
    </Suspense>
  );
};

export default LoadingRoute; 