import styles from "./Employee.module.css";
import route from "./../../../Router/Router";

// 직원 테이블 랜더링
const loadEmployees = (employees) => {
  const employeesTbody = document.getElementById("employeeTableBody");

  employeesTbody.innerHTML = ""; // 기존 내용 초기화

  if (employees.length === 0) {
    // 테이블에 데이터가 없을 때
    const employeesRow = document.createElement("tr");
    const employeesCell = document.createElement("td");
    employeesCell.colSpan = 7; // 컬럼 갯수에 맞추어야 함
    employeesCell.textContent = "직원목록이 없습니다. 직원을 추가해주세요.";
    employeesCell.style.textAlign = "center";
    employeesCell.style.padding = "20px";
    employeesRow.appendChild(employeesCell);
    employeesTbody.appendChild(employeesRow);
  } else {
    employees.forEach((employee) => {
      const employeesRow = document.createElement("tr");
      employeesRow.className = styles.table__content;

      const profileImgCell = document.createElement("td");
      profileImgCell.className = styles.profileimg;
      const profileImg = document.createElement("img");
      profileImg.src = employee.profileImage;
      profileImg.alt = "profileimg";
      profileImgCell.appendChild(profileImg);

      const nameCell = document.createElement("td");
      nameCell.className = styles.name;
      nameCell.dataset.label = "이름";
      nameCell.textContent = employee.name;

      const positionCell = document.createElement("td");
      positionCell.className = styles.position;
      positionCell.dataset.label = "직함";
      positionCell.textContent = employee.position;

      const emailCell = document.createElement("td");
      emailCell.className = styles.email;
      emailCell.dataset.label = "이메일";
      emailCell.textContent = employee.email;

      const birthdayCell = document.createElement("td");
      birthdayCell.className = styles.birthday;
      birthdayCell.dataset.label = "생일";
      birthdayCell.textContent = employee.birthday;

      const startDateCell = document.createElement("td");
      startDateCell.className = styles.joinday;
      startDateCell.dataset.label = "입사일";
      startDateCell.textContent = employee.startDate;

      const phoneCell = document.createElement("td");
      phoneCell.className = styles.contact;
      phoneCell.dataset.label = "핸드폰번호";
      phoneCell.textContent = employee.phone;

      employeesRow.appendChild(profileImgCell);
      employeesRow.appendChild(nameCell);
      employeesRow.appendChild(positionCell);
      employeesRow.appendChild(emailCell);
      employeesRow.appendChild(birthdayCell);
      employeesRow.appendChild(startDateCell);
      employeesRow.appendChild(phoneCell);

      employeesTbody.appendChild(employeesRow);

      // 각 행에 데이터 속성 할당
      employeesRow.dataset.id = employee.id;
      employeesRow.dataset.name = employee.name;
      employeesRow.dataset.position = employee.position;
      employeesRow.dataset.email = employee.email;
      employeesRow.dataset.birthday = employee.birthday;
      employeesRow.dataset.startDate = employee.startDate;
      employeesRow.dataset.phone = employee.phone;
      employeesRow.dataset.profileImage = employee.profileImage;

      // 행 클릭 이벤트 리스너 추가
      employeesRow.addEventListener("click", () => {
        // 클릭한 행의 데이터를 URL 쿼리 파라미터로 변환
        const employeeData = {
          id: employeesRow.dataset.id,
          name: employeesRow.dataset.name,
          position: employeesRow.dataset.position,
          email: employeesRow.dataset.email,
          birthday: employeesRow.dataset.birthday,
          startDate: employeesRow.dataset.startDate,
          phone: employeesRow.dataset.phone,
          profileImage: employeesRow.dataset.profileImage,
        };

        const queryString = new URLSearchParams(employeeData).toString();
        history.pushState(null, null, `/admin/employee/edit?${queryString}`);
        route();
      });

      // 커서 스타일 변경으로 클릭 가능함을 표시
      employeesRow.style.cursor = "pointer";
    });
  }
};

export default loadEmployees;
