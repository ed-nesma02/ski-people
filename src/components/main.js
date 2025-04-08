let isRender = false;

export const main = () => {
  if (isRender) {
    return document.querySelector('main');
  }

  const el = document.createElement('main');
  el.classList.add('main');

  document.body.append(el);

  isRender = true;

  return el;
};
