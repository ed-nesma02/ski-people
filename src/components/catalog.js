import { layout } from './layout';

export const catalog = (data, parent) => {
  const el = document.createElement('div');
  el.classList.add('catalog');

  const params = new URLSearchParams(window.location.search);
  let type = params.get('type');

  let catalogItem = `
      <li class="catalog__item">
        <a href="/" class="catalog__link ${
          type ? '' : 'catalog__link_active'
        }">Все</a>
      </li>`;

  for (const item of data) {
    const urlLeft = new URL(window.location.href);
    urlLeft.searchParams.set('type', item);

    const href = urlLeft.pathname + urlLeft.search;
    catalogItem =
      catalogItem +
      `
      <li class="catalog__item">
        <a href="${href}" class="catalog__link ${
        type === item ? 'catalog__link_active' : ''
      }">${item}</a>
      </li>
    `;
  }

  const child = `
    <ul class="catalog__list">
     ${catalogItem}
    </ul>
  `;

  const existCatalog = document.querySelector('.catalog');

  if (existCatalog) {
    const removeLink = document.querySelector('.catalog__link_active')
    removeLink.classList.remove('catalog__link_active')

    const links = document.querySelectorAll('.catalog__link')
    
    if(!type){
      links[0].classList.add('catalog__link_active')
    }

    for (const link of links) {
      if(link.textContent === type){
        link.classList.add('catalog__link_active')
      }
    }

    return;
  }

  el.append(layout(child, 'catalog__container'));
  parent.append(el);
};
