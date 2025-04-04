import { breadcrumb } from '../components/breadcrumb';
import { main } from '../components/main';
import { product } from '../components/product';

export const productPage = () => {
  return (main(breadcrumb(), product('Горные лыжи')));
};
