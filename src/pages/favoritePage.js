import { breadcrumb } from '../components/breadcrumb';
import { goods } from '../components/goods';
import { main } from '../components/main';

export const favoritePage = () => {
  return (main(breadcrumb(), goods('Избранное')));
};
