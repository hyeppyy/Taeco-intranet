// 마일리기 기준 알아보기 모달: modal-1
export const showEmployeeAddCheck = () => {
  return {
    modal_id: 1,
    header: `직원 추가 확인`,
    content: `
    <div class="Employee-add">
      <div class="Employee-add__content">
        <div class="Employee-add__header"><h4>직원 삭제</h4> 
          <img
                src="/public/icons/close.svg"
                alt="close-icon"
                width="24"
                height="24"
          />
        </div>
        <div>
          <h5>홍길동님을 삭제하시겠습니까 ?</h5>
        </div>
      </div>
    </div>`,
  };
};
