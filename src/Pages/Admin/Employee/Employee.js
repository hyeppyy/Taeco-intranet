import styles from "./Employee.module.css";
import { fetchEmployeeData } from "./FetchEmployeeData"; // fetch 함수 가져오기

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
    <input type="search" id="search" name="search" placeholder="검색" />
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
          <th class="${styles.head__button}">관리</th>
        </tr>
      </thead>
      <tbody class="${styles.table__body}" id="employeeTableBody"></tbody>    
    </table>
  </div> 
  `;

  // 서버에서 JSON 데이터를 fetch하여 테이블에 직원 데이터를 추가
  initializeEmployeeData();
};

// fetch 함수 호출 및 데이터 초기화 함수
const initializeEmployeeData = async () => {
  try {
    const data = await fetchEmployeeData();
    loadEmployees(data);
  } catch (error) {
    console.error("initializeEmployeeData 함수에서 오류 발생:", error);
  }
};

// 테이블에 직원 데이터를 추가하는 함수
const loadEmployees = (employees) => {
  const tbody = document.getElementById("employeeTableBody");
  tbody.innerHTML = ""; // 기존 내용 초기화

  employees.forEach((employee) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <tr class="${styles.table__content}">
        <td class="${styles.profileimg}"><img src="${employee.img}" alt="profileimg"></td>
        <td data-label="이름" class="${styles.name}">${employee.name}</td>
        <td data-label="직함" class="${styles.position}">${employee.position}</td>
        <td data-label="이메일" class="${styles.email}">${employee.email}</td>
        <td data-label="생일" class="${styles.birthday}">${employee.birthday}</td>
        <td data-label="입사일" class="${styles.joinday}">${employee.joinday}</td>
        <td data-label="핸드폰번호" class="${styles.contact}">${employee.phone}</td>
        <td data-label="관리" class="${styles.button}"><button class="${styles.editbtn}" data-color='neutral' data-shape='line'>수정</button></td>
      </tr>
    `;

    tbody.appendChild(row);

    // '직원 추가' 버튼 클릭 이벤트 핸들러 추가
    const addEmployeeButton = document.getElementById("addEmployeeButton");
    if (addEmployeeButton) {
      addEmployeeButton.addEventListener("click", () => {
        window.location = "/admin/employee/add";
      });
    }

    // '수정' 버튼 클릭 이벤트 핸들러 추가
    const editButton = row.querySelector(`button.${styles.editbtn}`);
    if (editButton) {
      editButton.addEventListener("click", () => {
        window.location = "/admin/employee/edit";
      });
    }
  });
};

export default renderAdminEmployee;
