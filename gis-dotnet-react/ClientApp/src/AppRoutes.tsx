import React from 'react';
import { Suspense, lazy } from 'react';
import {FetchData} from './pages/FetchData'

// Replace with True Loading Component
import Loading from './pages/Home';
//import {FetchData} from './components/FetchData'

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={ <Loading /> /* Replace With <LoadingScreen /> */ }>
      <Component {...props} />
    </Suspense>
  );

/**
 * @note Routes demo lazy loading with Suspense Fallback Loading indicator.
 */

// HOME PAGE
const Home = Loadable(lazy(() => import('./pages/Home')));

// COUNTER PAGE
const Counter = Loadable(lazy(() => import('./pages/Counter')));

// FETCH PAGE
//const FetchData = Loadable(lazy(() => import('./pages/FetchData')));

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/fetch-data',
    element: <FetchData />,
  }
];

export default AppRoutes;
