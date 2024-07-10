import styles from "./Employee.module.css";
import fetchEmployeeData from "./FetchEmployeeData";
import route from "/src/Router/Router";

const renderAdminEmployee = (container) => {
  container.innerHTML = `
  <h1>직원 관리</h1>
  
  <div class="${styles.page__event}">
    <div class="${styles.birthdayinfo}">
    <img src="/public/icons/cake.svg" alt="cake" />
    <h3><span class="${styles.event__birthday}" id="todayBirthday">금일의 생일자: 로딩 중 ...</span></h3>
    </div>
    <div class="${styles.joindayinfo}">
    <img src="/public/icons/seedling.svg" alt="seedling" />
    <h3><span class="${styles.event__joinday}" id="todayJoinDay">금일의 입사자: 로딩 중 ...</span></h3>
    </div>
  </div>

  <div class="${styles.page__header}">
    <input type="search" id="employeeSearchBox" name="search" placeholder="검색" />
    <button id="addEmployeeButton" data-color="positive" data-shape="block">직원 추가</button>
  </div>

  <h4 class="${styles.total__info}" id="totalEmployeeCount">총 인원: 로딩 중 ...</h4>

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
    
    <!-- 모바일 버전 -->
    <div class="${styles.employeeList}"></div>

  </div> 
  `;
  addEmployee();
  fetchAndDisplayEmployeeData();
};

// 총인원 기능 구현
const fetchAndDisplayEmployeeData = async () => {
  const data = await fetchEmployeeData();
  if (data && data.length) {
    document.getElementById(
      "totalEmployeeCount"
    ).innerText = `총 인원: ${data.length}명`;
    displayTodayEvents(data);
  }
};

// 오늘의 입사자/생일자 기능 구현
const displayTodayEvents = (data) => {
  const today = new Date();
  const todayMonth = (today.getMonth() + 1).toString().padStart(2, "0");
  const todayDate = today.getDate().toString().padStart(2, "0");

  // console.log(`Today: ${todayMonth}.${todayDate}`); // 디버깅용

  const birthdayPeople = data.filter((employee) => {
    const [year, month, day] = employee.birthday.split(/[-.]/);
    const isBirthday = month === todayMonth && day === todayDate;
    // console.log(
    //   `Checking birthday for ${employee.name}: ${employee.birthday} -> ${isBirthday}`
    // ); // 디버깅용
    return isBirthday;
  });

  const joinDayPeople = data.filter((employee) => {
    const [year, month, day] = employee.startDate.split(/[-.]/);
    const isJoinDay = month === todayMonth && day === todayDate;
    // console.log(
    //   `Checking join day for ${employee.name}: ${employee.startDate} -> ${isJoinDay}`
    // ); // 디버깅용
    return isJoinDay;
  });

  const birthdayNames = birthdayPeople.map((person) => person.name).join(", ");
  const joinDayNames = joinDayPeople.map((person) => person.name).join(", ");

  document.getElementById("todayBirthday").innerText = `금일의 생일자: ${
    birthdayNames || "없음"
  }`;
  document.getElementById("todayJoinDay").innerText = `금일의 입사자: ${
    joinDayNames || "없음"
  }`;
};

// '직원 추가' 버튼 클릭 이벤트 핸들러 추가
const addEmployee = () => {
  const addEmployeeButton = document.getElementById("addEmployeeButton");
  if (addEmployeeButton) {
    addEmployeeButton.addEventListener("click", () => {
      history.pushState(null, null, "/admin/employee/add");
      route();
    });
  }
};

export default renderAdminEmployee;
