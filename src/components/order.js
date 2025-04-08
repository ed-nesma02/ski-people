import { layout } from "./layout"

export const order = (parent) => {
  const el = document.createElement('section')
  el.classList.add('order')

  const child = `
    <div class="order__main">
      <div class="order__top">
        <h2 class="order__title">Заказ успешно размещен</h2>
        <p class="order__price">20&nbsp;000&nbsp;₽</p>
      </div>
      <p class="order__id">№43435</p>
      <div class="order__info">
        <h3 class="order__info-title">Данные доставки</h3>
        <table class="order__info-table order__table">
          <tr class="order__table-row">
            <td class="order__table-item">Получатель</td>
            <td class="order__table-item">Иванов Петр Александрович</td>
          </tr>
          <tr class="order__table-row">
            <td class="order__table-item">Телефон</td>
            <td class="order__table-item">+7 (737) 346 23 00</td>
          </tr>
          <tr class="order__table-row">
            <td class="order__table-item">E-mail</td>
            <td class="order__table-item">Ivanov84@gmail.com</td>
          </tr>
          <tr class="order__table-row">
            <td class="order__table-item">Адрес доставки</td>
            <td class="order__table-item">
              Москва, ул. Ленина, 21, кв. 33
            </td>
          </tr>
          <tr class="order__table-row">
            <td class="order__table-item">Способ оплаты</td>
            <td class="order__table-item">Картой при получении</td>
          </tr>
          <tr class="order__table-row">
            <td class="order__table-item">Способ получения</td>
            <td class="order__table-item">Доставка</td>
          </tr>
        </table>
      </div>

      <a href="/" class="order__btn">На главную</a>
    </div>
  `

  el.append(layout(child, 'order__container'))
  return parent.append(el);
}