export const showEmployeeAddCheck = () => {
  return {
    modal_id: `employee_2`,
    header: `직원 추가 확인`,
    content: `
    <div class="Employee-add">
      <div class="Employee-add__content">
          <h5>홍길동님을 추가하시겠습니까 ?</h5>
          <button data-e-addBtn data-color='positive' data-shape='block'>추가</button>
      </div>
    </div>
    `,
  };
};
