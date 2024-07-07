const handleModal = (event) => {
  const renderTime = event?.renderTime; // 출퇴근 기록 함수
  const stopTimeUpdate = event?.stopTimeUpdate; // 모달을 닫으면 현재시간 업데이트 함수를 멈춤

  const openModalButtons = document.querySelectorAll('.open-modal');
  const closeModalButtons = document.querySelectorAll('.close-modal');
  const modalBackground = document.querySelector('#modal__background');

  // 모달 활성화/비활성화 토글 함수
  const toggleModal = (modal) => {
    if (!modal) return;
    modal.classList.toggle('active');
    modalBackground.classList.toggle('active');
  };

  //모달 활성화 버튼 클릭 시, toggle로 모달 활성화
  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      toggleModal(modal);
      if (event) renderTime();
    });
  });

  //모달 비활성화 버튼 클릭 시, toggle로 모달 비활성화
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector('.modal-box.active');
      toggleModal(modal);
      if (event) stopTimeUpdate();
    });
  });

  //배경 클릭 시, toggle로 모달 비활성화
  modalBackground.addEventListener('click', () => {
    const modal = document.querySelector('.modal-box.active');
    toggleModal(modal);
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