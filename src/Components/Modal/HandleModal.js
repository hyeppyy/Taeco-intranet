import setTimeout from './../../Pages/User/Approval/Modal/ModalContentDetail';
import renderTime from './../../Pages/User/Dashboard/JS/RenderTime';
import { stopTimeUpdate } from './../../Pages/User/Dashboard/Modal/TimerModalContent';

const handleModal = () => {
  const contents = document.querySelector('#contents');

  const modalBackground =
    document.querySelector('#modal__background') ||
    document.createElement('div');

  // 이벤트 위임을 사용한 모달 제어
  contents.addEventListener('click', (event) => {
    if (event.target.closest('.open-modal')) {
      const button = event.target.closest('.open-modal');
      const modalId = button.dataset.modalTarget;
      const modal = document.querySelector(modalId);
      if (modal && !modal.classList.contains('active')) {
        modal.classList.add('active');
        modalBackground.classList.add('active');
        // renderTime();
      }
    } else if (
      event.target.closest('.close-modal') ||
      event.target === modalBackground
    ) {
      const modal = document.querySelector('.modal-box.active');
      if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        modalBackground.classList.remove('active');
        // stopTimeUpdate();
      }
    }
  });
};

export default handleModal;

// import { initializeModalManager, setOpenCallback, setCloseCallback } from './ModalManager';

// const handleModal = (events = {}) => {
//   initializeModalManager();

//   if (events.renderTime) {
//     setOpenCallback(events.renderTime);
//   }

//   if (events.stopTimeUpdate) {
//     setCloseCallback(events.stopTimeUpdate);
//   }
// };

// export default handleModal;
