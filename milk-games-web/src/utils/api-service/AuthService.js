import { auth } from './config';

export default {
  logout() {
    return auth.get('/logout');
  },
};
