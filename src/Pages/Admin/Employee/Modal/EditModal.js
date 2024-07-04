export const showEmployeeEditCheck = () => {
  return {
    modal_id: `${employee_1}`,
    header: `직원 수정 확인`,
    content: `
    <div class="Employee-edit">
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
          <h5>홍길동님의 정보를 수정하시겠습니까 ?</h5>
          <button data-color='positive' data-shape='block'>수정</button>
        </div>
      </div>
    </div>
    `,
  };
};
