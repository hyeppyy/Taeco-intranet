import styles from "./Employee.module.css";
import fetchEmployeeData from "./FetchEmployeeData";
import route from "/src/Router/Router";

const renderAdminEmployee = (container) => {
  container.innerHTML = `
  <h1>직원 관리</h1>
  
  <div class="${styles.page__event}">
    <div class="${styles.birthdayinfo}">
    <img src="/public/icons/cake.svg" alt="cake" />
    <span class="${styles.event__birthday}"><h3>금일의 생일자: 홍길동</h3></span>
    </div>
    <div class="${styles.joindayinfo}">
    <img src="/public/icons/seedling.svg" alt="seedling" />
    <span class="${styles.event__joinday}"><h3>금일의 입사자: 홍길동</h3></span>
    </div>
  </div>

  <div class="${styles.page__header}">
    <input type="search" id="employeeSearchBox" name="search" placeholder="검색" />
    <button id="addEmployeeButton" data-color="positive" data-shape="block">직원 추가</button>
  </div>

  <h4 class="${styles.total__info}">총 인원: 12명</h4>

  <div class="${styles.table}">
    <table class="${styles.table__container}">
      <thead class="${styles.table__head}">
        <tr class="${styles.head__userlist}">
          <th class="${styles.head__profileimg}">사진</th>
          <th class="${styles.head__name}">이름</th>
          <th class="${styles.head__position}">직함</th>
          <th class="${styles.head__email}">이메일</th>
          <th class="${styles.head__birthday}">생일</th>
          <th class="${styles.head__joinday}">입사일</th>
          <th class="${styles.head__contact}">핸드폰 번호</th>
        </tr>
      </thead>
      <tbody class="${styles.employeeTable__body}" id="employeeTableBody"></tbody>    
    </table>
  </div> 
  `;
  addEmployee();
  fetchEmployeeData();
};

const addEmployee = () => {
  // '직원 추가' 버튼 클릭 이벤트 핸들러 추가
  const addEmployeeButton = document.getElementById("addEmployeeButton");
  if (addEmployeeButton) {
    addEmployeeButton.addEventListener("click", () => {
      history.pushState(null, null, "/admin/employee/add");
      route();
    });
  }
};

export default renderAdminEmployee;
