export const showEmployeeAddCheck = () => {
  return {
    modal_id: `${employee_2}`,
    header: `직원 추가 확인`,
    content: `
    <div class="Employee-add">
      <div class="Employee-add__content">
        <div class="Employee-add__header"><h4>직원 추가</h4>
          <img
            src="/public/icons/close.svg"
            alt="close-icon"
            width="24"
            height="24"
          />
        </div>
        <div>
          <h5>홍길동님을 추가하시겠습니까 ?</h5>
          <button data-color='positive' data-shape='block'>추가</button>
        </div>
      </div>
    </div>
    `,
  };
};
