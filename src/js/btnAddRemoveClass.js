const refs = {
  allBtn: document.querySelector('.filter__btn-all'),
  watchedBtn: document.querySelector('.filter__btn-watched'),
  queuedBtn: document.querySelector('.filter__btn-queued'),
};

const classAccent = 'my-library__filter-btn--active';

export function addClassBtn(activeAddEl) {
  if (activeAddEl.classList.contains(classAccent)) {
    return;
  }
  activeAddEl.classList.add(classAccent);
}

export function removeClassBtn(activeRemoveEl) {
  if (!activeRemoveEl.classList.contains(classAccent)) {
    return;
  }
  activeRemoveEl.classList.remove(classAccent);
}

refs.allBtn.addEventListener('click', onClickAll);
function onClickAll() {
  addClassBtn(refs.allBtn);
  removeClassBtn(refs.watchedBtn);
  removeClassBtn(refs.queuedBtn);
}

refs.watchedBtn.addEventListener('click', onClickWatched);
function onClickWatched() {
  removeClassBtn(refs.allBtn);
  addClassBtn(refs.watchedBtn);
  removeClassBtn(refs.queuedBtn);
}

refs.queuedBtn.addEventListener('click', onClickQueued);
function onClickQueued() {
  removeClassBtn(refs.allBtn);
  removeClassBtn(refs.watchedBtn);
  addClassBtn(refs.queuedBtn);
}
