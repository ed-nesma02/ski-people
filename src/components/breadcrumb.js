import { layout } from './layout';

export const breadcrumb = (data = null, parent) => {
  if (!data) {
    return;
  }
  const el = document.createElement('div');
  el.classList.add('breadcrumb');

  const urlLeft = new URL(window.location.origin);
  urlLeft.searchParams.set('type', data.type);
  const href = urlLeft.pathname + urlLeft.search;

  const child = `
    <nav class="breadcrumb__navigation">
      <ul class="breadcrumb__list">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__link">Главная</a>
        </li>
        <li class="breadcrumb__item">
          <a href="${href}" class="breadcrumb__link">${data.type}</a>
        </li>
        <li class="breadcrumb__item">
          <p class="breadcrumb__link">${data.name}</p>
        </li>
      </ul>
    </nav>
  `;

  el.append(layout(child, 'breadcrumb__container'));
  return parent.append(el);
};
