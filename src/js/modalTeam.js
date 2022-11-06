const refs = {
  openModalBtn: document.querySelector('#open-team-modal'),
  modal: document.querySelector('[data-modals]'),
  body: document.querySelector('body'),
};
function toggleModal(event) {
  event.preventDefault();
  refs.modal.classList.remove('is-hiddens');
  document.body.classList.add('modal-open');
  function onKeyPress(event) {
    if (event.code === 'Escape') {
      refs.modal.classList.add('is-hiddens');
      document.body.classList.remove('modal-open');
      refs.body.removeEventListener('keyup', onKeyPress);
    }
  }
  function onGalleryClick(event) {
    if (event.target.closest('.modals')) return;
    refs.modal.classList.add('is-hiddens');
    document.body.classList.remove('modal-open');
    refs.modal.removeEventListener('click', onGalleryClick);
  }
  refs.body.addEventListener('keyup', onKeyPress);
  refs.modal.addEventListener('click', onGalleryClick);
}
refs.openModalBtn.addEventListener('click', toggleModal);
