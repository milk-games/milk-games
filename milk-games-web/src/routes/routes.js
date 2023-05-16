import Auth from '@components/auth/Auth';
import Tournament from '@components/tournament/Tournament';
import { createBrowserRouter } from 'react-router-dom';

export default createBrowserRouter([
  {
    path: '/',
    element: <Tournament />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
]);
