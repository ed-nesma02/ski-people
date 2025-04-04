import { layout } from "./layout.js"

export const goods = (title) => {
  const el = document.createElement('section')
  el.classList.add('goods')

  const child = `
    ${title ? `<h2 class="goods__title">${title}</h2>` : ""}
    <ul class="goods__list">
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button  class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a href="#" class="card__link">
            <img
              src="/img/ski.png"
              alt="Фото зимней экипировки"
              class="card__img"
            />
          </a>
          <button class="card__like-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные лыжи</h3>
            <p class="card__info-price">5&nbsp;000&nbsp;₽</p>
          </div>
          <button class="card__btn">В корзину</button>
        </article>
      </li>
    </ul>
    <div class="goods__pagination pagination">
      <div class="pagination__bar">
        <div class="pagination__bar-active" style="--bar-width: 60px;"></div>
      </div>
      <div class="pagination__menu">
        <button class="pagination__menu-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.86395 7.99999L8.52528 2.18199C8.5719 2.13511 8.60874 2.07944 8.6337 2.01822C8.65866 1.957 8.67122 1.89144 8.67068 1.82533C8.67013 1.75922 8.65647 1.69387 8.6305 1.63308C8.60453 1.57228 8.56676 1.51723 8.51938 1.47113C8.472 1.42502 8.41594 1.38877 8.35445 1.36448C8.29297 1.34018 8.22727 1.32832 8.16117 1.32957C8.09507 1.33083 8.02988 1.34519 7.96936 1.37181C7.90885 1.39843 7.85421 1.43679 7.80862 1.48466L1.80862 7.65133C1.7178 7.74467 1.66699 7.86976 1.66699 7.99999C1.66699 8.13023 1.7178 8.25532 1.80862 8.34866L7.80862 14.5153C7.85421 14.5632 7.90885 14.6016 7.96936 14.6282C8.02988 14.6548 8.09507 14.6692 8.16117 14.6704C8.22727 14.6717 8.29297 14.6598 8.35445 14.6355C8.41594 14.6112 8.472 14.575 8.51938 14.5289C8.56676 14.4828 8.60453 14.4277 8.6305 14.3669C8.65647 14.3061 8.67013 14.2408 8.67068 14.1747C8.67122 14.1086 8.65866 14.043 8.6337 13.9818C8.60874 13.9205 8.5719 13.8649 8.52528 13.818L2.86395 7.99999Z" fill="#1C1C1C"/>
            </svg>
            
        </button>
        <p class="pagination__menu-text">
          <span class="pagination__menu-active">12</span>
          из
          <span class="pagination__menu-all">31</span>
        </p>
        <button class="pagination__menu-next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.136 7.99999L7.47472 2.18199C7.4281 2.13511 7.39126 2.07944 7.3663 2.01822C7.34134 1.957 7.32878 1.89144 7.32932 1.82533C7.32987 1.75922 7.34353 1.69387 7.3695 1.63308C7.39547 1.57228 7.43324 1.51723 7.48062 1.47113C7.528 1.42502 7.58406 1.38877 7.64555 1.36448C7.70703 1.34018 7.77273 1.32832 7.83883 1.32957C7.90493 1.33083 7.97012 1.34519 8.03064 1.37181C8.09115 1.39843 8.14579 1.43679 8.19138 1.48466L14.1914 7.65133C14.2822 7.74467 14.333 7.86976 14.333 7.99999C14.333 8.13023 14.2822 8.25532 14.1914 8.34866L8.19138 14.5153C8.14579 14.5632 8.09115 14.6016 8.03064 14.6282C7.97012 14.6548 7.90493 14.6692 7.83883 14.6704C7.77273 14.6717 7.70703 14.6598 7.64555 14.6355C7.58406 14.6112 7.528 14.575 7.48062 14.5289C7.43324 14.4828 7.39547 14.4277 7.3695 14.3669C7.34353 14.3061 7.32987 14.2408 7.32932 14.1747C7.32878 14.1086 7.34134 14.043 7.3663 13.9818C7.39126 13.9205 7.4281 13.8649 7.47472 13.818L13.136 7.99999Z" fill="#1C1C1C"/>
            </svg>                  
        </button>
      </div>
    </div>
  `

  el.append(layout(child, 'goods__container'))
  return el;
}