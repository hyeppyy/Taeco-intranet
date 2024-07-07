import setTimeout from "./../../Pages/User/Approval/Modal/ModalContentDetail";
import renderTime from "./../../Pages/User/Dashboard/JS/RenderTime";
import { stopTimeUpdate } from "./../../Pages/User/Dashboard/Modal/TimerModalContent";

const handleModal = () => {
  const openModalButtons = document.querySelectorAll(".open-modal");
  const closeModalButtons = document.querySelectorAll(".close-modal");
  const modalBackground = document.querySelector("#modal__background");

  // 모달 활성화/비활성화 토글 함수
  const toggleModal = (modal) => {
    if (!modal) return;
    modal.classList.toggle("active");
    modalBackground.classList.toggle("active");
  };

  //모달 활성화 버튼 클릭 시, toggle로 모달 활성화
  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      toggleModal(modal);
      setTimeout();
      renderTime(); // 출퇴근 기록 함수
    });
  });

  //모달 비활성화 버튼 클릭 시, toggle로 모달 비활성화
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(".modal-box.active");
      toggleModal(modal);
      stopTimeUpdate(); // 모달을 닫으면 현재시간 업데이트 함수를 멈춤
    });
  });

  //배경 클릭 시, toggle로 모달 비활성화
  modalBackground.addEventListener("click", () => {
    const modal = document.querySelector(".modal-box.active");
    toggleModal(modal);
  });
};

export default handleModal;
