import handleModal from './HandleModal';

/* 모달 랜더링 함수
 *  [input] 모달 고유 아이디(1부터 시작), 헤더 내용, 콘텐츠 내용
 */
const renderModal = (
  id,
  header,
  content,
  container = '#contents',
  event = null
) => {
  console.log('modal!!');

  const contents = document.querySelector(container);

  contents.innerHTML += `
    <div id="modal-${id}" class="modal-box">
      <div class="modal-box__container">
        <div class="modal-box__header">
          <h2>${header}</h2>
          <img
            class="close-modal"
            src="/public/icons/close.svg"
            alt="close-modal"
            width="24"
            height="24"
          />
        </div>

        <div class="modal-box__content">${content}</div>
      </div>
    </div>

    <div id="modal__background"></div>
  `;

  handleModal(event); // 모달 이벤트 전달 함수
};

export default renderModal;
// import handleModal from './HandleModal';

// const renderModal = (id, header, content, events = {}) => {
//   const contents = document.querySelector('#contents');

//   // 기존 모달 제거 (중복 생성 방지)
//   const existingModal = document.getElementById(`modal-${id}`);
//   if (existingModal) {
//     existingModal.remove();
//   }

//   // 모달 요소 생성
//   const modal = document.createElement('div');
//   modal.id = `modal-${id}`;
//   modal.className = 'modal-box';

//   // 모달 내용 설정
//   modal.innerHTML = `
//     <div class="modal-box__container">
//       <div class="modal-box__header">
//         <h2>${header}</h2>
//         <img class="close-modal" src="/public/icons/close.svg" alt="close-modal" width="24" height="24" />
//       </div>
//       <div class="modal-box__content">${content}</div>
//     </div>
//   `;

//   // 모달 배경 생성 또는 재사용
//   let modalBackground = document.getElementById('modal__background');
//   if (!modalBackground) {
//     modalBackground = document.createElement('div');
//     modalBackground.id = 'modal__background';
//     contents.appendChild(modalBackground);
//   }

//   // 모달 및 배경 표시
//   contents.appendChild(modal);
//   modalBackground.style.display = 'block';
//   modal.style.display = 'block';

//   // 모달 이벤트 처리
//   handleModal(events);

//   return modal;
// };

// export default renderModal;
