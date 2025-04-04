export const main = (...childs) => {

  const el = document.createElement('main');
  el.classList.add('main');

  for (const child of childs) {
    el.append(child)
  }

  return el;
};
