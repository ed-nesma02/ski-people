import { router } from './router';

export const search = () => {
  const searchForm = document.querySelector('.header__search');
  const searchInput = document.querySelector('.header__search-input');

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      router.navigate(`/search?search=${searchInput.value}`);
      searchInput.value = null;
    });
  }
};
