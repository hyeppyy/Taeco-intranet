/*모달 두 개 이상일 때의 버전 사용 방법
 * 각 모달 실행 요소(data-modal-target)와 해당 모달(id)을 매핑
 * 요소 1에 data-modal-target="#modal-1" 추가
 * 모달 1에 id="modal-1 추가
 * 하단에 모달 HTML 요소 있습니다.
 */

import handleModal from './HandleModal';

/* 모달 랜더링 함수
*  input: 모달 고유 아이디(1부터 시작), 헤더 내용, 콘텐츠 내용
*/ 
const renderModal = (id, header, content) => {
  document.body.innerHTML += `
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

  handleModal(); // 모달 이벤트 전달 함수
};

export default renderModal;
