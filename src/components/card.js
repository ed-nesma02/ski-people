import { API_URL } from "../js/const";
import { localStorageLoad } from "../js/localStorage";

export const card = (data) => {
  let child = ""
  const favoriteItems = localStorageLoad('favorite');

  for (const item of data) {
    child = child + `
    <li class="goods__item">
        <article class="goods__card card">
          <a href="/product/${item.id}" class="card__link">
            <img
              src="${API_URL}/img${item.img}"
              alt="${item.name}"
              class="card__img"
            />
          </a>
          <button data-id="${item.id}" class="card__like-btn button__like ${favoriteItems.includes(item.id) ? 'button__like_active' : ''}">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
              class="card__like-svg"
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">${item.name}</h3>
            <p class="card__info-price">${item.price.toLocaleString()}&nbsp;₽</p>
          </div>
          <button data-id='${item.id}' class="card__btn">В корзину</button>
        </article>
      </li>
  `
  }

  return child;
}