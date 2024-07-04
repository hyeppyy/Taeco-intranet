/* 모달의 개수가 정해져있지 않고, 동적으로 호출된 데이터에 따른 모달 렌더링 함수입니다.
*  일반 모달 랜더링 함수와의 차이
    - 기존 모달 렌더링 위치: body태그 안 (document.body.innerHTML += ``)
    - 동적 모달 랜더링 위치: 데이터 리스트가 들어가는 컨테이너 안 (const container = document.querySelector(space))
*  매개변수를 추가로 데이터 리스트 컨테이너를 전달해야합니다. (space, id, header, content)
*/

import handleModal from './HandleModal';

const renderDynamicModal = (space, id, header, content) => {
  const container = document.querySelector(space);

  container.innerHTML += `
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

export default renderDynamicModal;
