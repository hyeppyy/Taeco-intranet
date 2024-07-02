import styles from "./Employee.module.css";
import renderAddEmployeePage from "./AddEmployee"; // 새로운 페이지 렌더링 함수 가져오기
import employeeData from "./Employee.json";

const renderAdminEmployee = (container) => {
  container.innerHTML = `
  <h1>직원 관리</h1>
  
  <div class="${styles.page__event}">
    <img src="/public/icons/cake.svg" alt="cake" />
    <span class="${styles.event__birthday}"><h3>금일의 생일자: 홍길동</h3></span>
    <img src="/public/icons/seedling.svg" alt="seedling" />
    <span class="${styles.event__joinday}"><h3>금일의 입사자: 홍길동</h3></span>
  </div>

  <div class="${styles.page__header}">
    <input type="search" id="search" name="search" placeholder="검색" />
    <button id="addEmployeeButton" data-color="neutral" data-shape="block">직원 추가</button>
  </div>

  <div>
  <table class="${styles.table__container}">
        <thead class="${styles.table__head}">
          <tr class="${styles.userlist}">
            <th class="${styles.profileimg}">사진</th>
            <th class="${styles.name}">이름</th>
            <th class="${styles.position}">직함</th>
            <th class="${styles.email}">이메일</th>
            <th class="${styles.birthday}">생일</th>
            <th class="${styles.joinday}">입사일</th>
            <th class="${styles.phonenumber}">핸드폰 번호</th>
            <th class="${styles.button}">관리</th>
          </tr>
        </thead>
        <tbody class="${styles.table__body} "id="employeeTableBody"></tbody>    
  </table>
  </div>

  `;

  // '직원 추가' 버튼 클릭 이벤트 핸들러 추가
  const addEmployeeButton = document.getElementById("addEmployeeButton");
  if (addEmployeeButton) {
    addEmployeeButton.addEventListener("click", () => {
      renderAddEmployeePage(container); // 직원 추가 페이지로 이동
    });
  }

  // JSON 데이터를 사용하여 테이블에 직원 데이터를 추가
  loadEmployees(employeeData);
};

// 테이블에 직원 데이터를 추가하는 함수
const loadEmployees = (employees) => {
  const tbody = document.getElementById("employeeTableBody");
  tbody.innerHTML = ""; // 기존 내용 초기화

  employees.forEach((employee) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <tr class="${styles.table__tr}">
      <td class="${styles.profileimg}"><img src="${employee.profileimg}" alt="profileimg" class="${styles.profileimg}"></td>
      <td class="${styles.name}">${employee.name}</td>
      <td class="${styles.position}">${employee.position}</td>
      <td class="${styles.email}">${employee.email}</td>
      <td class="${styles.birthday}">${employee.birthday}</td>
      <td class="${styles.joinday}">${employee.joinday}</td>
      <td class="${styles.phonenumber}">${employee.phone}</td>
      <td class="${styles.button}"><button data-color='neutral' data-shape='line'">수정</button></td>
      </tr>
    `;

    tbody.appendChild(row);

    // '수정' 버튼 클릭 이벤트 핸들러 추가
    const addEmployeeButton = document.getElementById("addEmployeeButton");
    if (addEmployeeButton) {
      addEmployeeButton.addEventListener("click", () => {
        renderAddEmployeePage(container); // 직원 수정 페이지로 이동
      });
    }
  });
};

export default renderAdminEmployee;
