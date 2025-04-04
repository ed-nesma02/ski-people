import { catalog } from '../components/catalog';
import { goods } from '../components/goods';
import { main } from '../components/main';

export const homePage = () => {
  return (main(catalog(), goods()));
};
