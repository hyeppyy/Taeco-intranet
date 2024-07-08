import styles from "./EditEmployee.module.css";

// 직원 테이블 랜더링
const loadEmployees = (employees) => {
  const employeesTbody = document.getElementById("employeeTableBody");

  employeesTbody.innerHTML = ""; // 기존 내용 초기화

  if (employees.length === 0) {
    // 테이블에 데이터가 없을 때
    const employeesRow = document.createElement("tr");
    const employeesCell = document.createElement("td");
    employeesCell.colSpan = 6;
    employeesCell.textContent = "직원목록이 없습니다. 직원을 추가해주세요.";
    employeesCell.style.textAlign = "center";
    employeesCell.style.padding = "20px";
    employeesRow.appendChild(employeesCell);
    employeesTbody.appendChild(employeesRow);
  } else {
    employees.forEach((employee) => {
      const employeesRow = document.createElement("tr");

      employeesRow.innerHTML = `
          <tr class="${styles.table__content}">
            <td class="${styles.profileimg}"><img src="${employee.profileImage}" alt="profileimg"></td>
            <td data-label="이름" class="${styles.name}">${employee.name}</td>
            <td data-label="직함" class="${styles.position}">${employee.position}</td>
            <td data-label="이메일" class="${styles.email}">${employee.email}</td>
            <td data-label="생일" class="${styles.birthday}">${employee.birthday}</td>
            <td data-label="입사일" class="${styles.joinday}">${employee.startDate}</td>
            <td data-label="핸드폰번호" class="${styles.contact}">${employee.phone}</td>
            <td data-label="관리" class="${styles.button}"><button class="${styles.editbtn}" data-color='neutral' data-shape='line'>수정</button></td>
          </tr>
        `;

      employeesTbody.appendChild(employeesRow);

      // '수정' 버튼 클릭 이벤트 핸들러 추가
      const editButton = employeesRow.querySelector(`button.${styles.editbtn}`);
      if (editButton) {
        editButton.addEventListener("click", () => {
          window.location = "/admin/employee/edit";
        });
      }
    });
  }
};

export default loadEmployees;
