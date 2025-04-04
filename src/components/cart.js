import { layout } from "./layout"

export const cart = () => {
  const el = document.createElement('section')
  el.classList.add('cart')

  const child = `
    <h2 class="cart__title">Корзина</h2>
    <ul class="cart__list">
      <li class="cart__item">
        <img src="/img/ski-mini.png" alt="Лыжи" class="cart__item-img" />
        <div class="cart__item-info">
          <div class="cart__item-main">
            <h3 class="cart__item-title">Горные лыжи</h3>
            <p class="cart__item-id">арт.&nbsp;84348945757</p>
          </div>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
          <div class="cart__item-counter counter">
            <button class="counter__minus" type="button">-</button>
            <p class="counter__number">1</p>
            <button class="counter__plus" type="button">+</button>
          </div>
        </div>
      </li>
      <li class="cart__item">
        <img src="/img/ski-mini.png" alt="Лыжи" class="cart__item-img" />
        <div class="cart__item-info">
          <div class="cart__item-main">
            <h3 class="cart__item-title">Горные лыжи</h3>
            <p class="cart__item-id">арт.&nbsp;84348945757</p>
          </div>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
          <div class="cart__item-counter counter">
            <button class="counter__minus" type="button">-</button>
            <p class="counter__number">1</p>
            <button class="counter__plus" type="button">+</button>
          </div>
        </div>
      </li>
      <li class="cart__item">
        <img src="/img/ski-mini.png" alt="Лыжи" class="cart__item-img" />
        <div class="cart__item-info">
          <div class="cart__item-main">
            <h3 class="cart__item-title">Горные лыжи</h3>
            <p class="cart__item-id">арт.&nbsp;84348945757</p>
          </div>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
          <div class="cart__item-counter counter">
            <button class="counter__minus" type="button">-</button>
            <p class="counter__number">1</p>
            <button class="counter__plus" type="button">+</button>
          </div>
        </div>
      </li>
    </ul>

    <div class="cart__order">
      <h3 class="cart__order-title">Оформление</h3>
      <div class="cart__order-info">
        <p class="cart__order-count">
          <span class="cart__order-count">4</span>
          товара на сумму:
        </p>
        <p class="cart__order-price">5&nbsp;000&nbsp;₽</p>
      </div>
      <p class="cart__order-delivery">Доставка&nbsp;0&nbsp;₽</p>
      <button class="cart__order-btn" type="submit" form="cartForm">
        Оформить заказ
      </button>
    </div>

    <div class="cart__line"></div>

    <form id="cartForm" action="#" class="cart__form" method="post">
      <h3 class="cart__form-title">Данные для доставки</h3>
      <fieldset class="cart__form-inputs">
        <input placeholder="Фамилия Имя Отчество" name="name" type="text" class="cart__form-input" />
        <input placeholder="Телефон" name="tel" type="tel" class="cart__form-input" />
        <input placeholder="E-mail" name="email" type="email" class="cart__form-input" />
        <input placeholder="Адрес доставки" name="eddress" type="text" class="cart__form-input" />
        <textarea
          placeholder="Комментарий к заказу"
          name="comment"
          id="comment"
          class="cart__form-area"
        ></textarea>
      </fieldset>
      <div class="cart__form-options">
        <fieldset class="cart__form-fieldset">
          <legend class="cart__form-legend">Доставка</legend>
          <label class="cart__form-label">
            <input
              class="cart__form-radio"
              type="radio"
              value="delivery"
              name="delivery"
            />Доставка
          </label>
          <label class="cart__form-label">
            <input
              class="cart__form-radio"
              type="radio"
              value="pickup"
              name="delivery"
            />Самовывоз
          </label>
        </fieldset>
        <fieldset class="cart__form-fieldset">
          <legend class="cart__form-legend">Оплата</legend>
          <label class="cart__form-label">
            <input
              class="cart__form-radio"
              type="radio"
              value="card"
              name="payment"
            />Картой при получении
          </label>
          <label class="cart__form-label">
            <input
              class="cart__form-radio"
              type="radio"
              value="cash"
              name="payment"
            />Наличными при получении
          </label>
        </fieldset>
      </div>
    </form>
`

  el.append(layout(child, 'cart__container'))
  return el;
}