import { localStorageLoad, localStorageSave } from './localStorage';

export const addFavorite = () => {
  const favoriteList = localStorageLoad('favorite');

  const list = document.querySelector('.goods__list');

  if (list) {
    list.addEventListener('click', (e) => {
      if (e.target.closest('.card__like-btn')) {
        const id = Number(e.target.parentNode.parentNode.dataset.id);
        const btn = e.target.parentNode.parentNode
        if (!id) return;

        if (!favoriteList.length) {
          favoriteList.push(id);
          localStorageSave('favorite', favoriteList);
          btn.classList.add('button__like_active')
        } else {
          let isExist = false;
          favoriteList.forEach((favoriteItem, index) => {
            if (favoriteItem === id) {
              favoriteList.splice(index, 1);
              isExist = true;
              localStorageSave('favorite', favoriteList);
              btn.classList.remove('button__like_active')
            }
          });

          if (!isExist) {
            favoriteList.push(id);
            localStorageSave('favorite', favoriteList);
            btn.classList.add('button__like_active')
          }
        }
      }
    });
  }
};
