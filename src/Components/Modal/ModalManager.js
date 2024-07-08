let openModalButtons;
let closeModalButtons;
let modalBackground;
let onOpenCallback;
let onCloseCallback;

const setupEventListeners = () => {
  openModalButtons.forEach((button) => {
    button.addEventListener('click', () =>
      openModal(button.dataset.modalTarget)
    );
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => closeModal());
  });

  modalBackground.addEventListener('click', () => closeModal());
};

const openModal = (modalSelector) => {
  const modal = document.querySelector(modalSelector);
  if (!modal) return;
  modal.classList.add('active');
  modalBackground.classList.add('active');
  if (onOpenCallback) onOpenCallback();
};

const closeModal = () => {
  const modal = document.querySelector('.modal-box.active');
  if (!modal) return;
  modal.classList.remove('active');
  modalBackground.classList.remove('active');
  if (onCloseCallback) onCloseCallback();
};

export const initializeModalManager = () => {
  openModalButtons = document.querySelectorAll('.open-modal');
  closeModalButtons = document.querySelectorAll('.close-modal');
  modalBackground = document.querySelector('#modal__background');
  setupEventListeners();
};

export const setOpenCallback = (callback) => {
  onOpenCallback = callback;
};

export const setCloseCallback = (callback) => {
  onCloseCallback = callback;
};
