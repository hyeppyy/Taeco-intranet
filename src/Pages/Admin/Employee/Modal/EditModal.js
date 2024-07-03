// 마일리기 기준 알아보기 모달: modal-1
export const showEmployeeEditCheck = () => {
  return {
    modal_id: 1,
    header: `직원 수정 확인`,
    content: `
    <div class="Employee-edit"></div>
      <div class="Employee-edit__content">
        <div class="Employee-edit__header"><h4>직원 수정</h4> 
          <img
            src="/public/icons/close.svg"
            alt="close-icon"
            width="24"
            height="24"
          />
        </div>
        <div>
          <h5>홍길동님을 수정하시겠습니까 ?</h5>
          <button data-color='warning' data-shape='block'>삭제</button>
        </div>
      </div>
    </div>
  `,
  };
};
