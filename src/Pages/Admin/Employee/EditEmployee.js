import styles from "./EditEmployee.module.css";
import route from "/src/Router/Router";

// URL 쿼리 파라미터를 읽는 함수
const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get("id"),
    name: params.get("name"),
    position: params.get("position"),
    email: params.get("email"),
    birthday: params.get("birthday"),
    startDate: params.get("startDate"),
    phone: params.get("phone"),
    profileImage: params.get("profileImage"),
  };
};

// 폼을 채우는 함수
const fillEditForm = () => {
  const employeeData = getQueryParams();

  if (employeeData.id) {
    document.getElementById("name").value = employeeData.name;
    document.getElementById("positions").value = employeeData.position;
    document.getElementById("email").value = employeeData.email;
    document.getElementById("phone").value = employeeData.phone;
    // 날짜 형식 설정
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const dd = String(date.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    };

    document.getElementById("birthday").value = formatDate(
      employeeData.birthday
    );
    document.getElementById("joinday").value = formatDate(
      employeeData.startDate
    );
    document.querySelector('img[alt="profileimg"]').src =
      employeeData.profileImage;
  }
};

const renderEditEmployeePage = (container) => {
  container.innerHTML = `
  <div class="${styles.page}">
  <h1 class="${styles.page__title}">직원 관리 > 직원 상세</h1>

  <!-- 상단 추가 버튼 부분입니다. -->
  <div class="${styles.page__content}">
    <div class="${styles.page__button}">
    <button id="backButton" data-color='neutral' data-shape='block'>뒤로가기</button>
  </div>

  <!-- 직원 프로필 이미지 업로드 부분입니다. -->
  <div class="${styles.page__edit}">
    <img src="/public/images/_Avatar_.png" alt="profileimg">
  </div>

  <form class="infoform"action="#" method="post">
            <ul class="${styles.user__info}">
              <li class="${styles.info__name}">
                <label for="name"><h5>이름</h5></label>
                <input data-shape="line" type="name" id="name" placeholder="홍길동" required/>
              </li>

              <li class="${styles.info__position}">
                <label for="positions"><h5>직함</h5></label>
                <select name="positions" id="positions" required>
                  <option value="사장">사장</option>
                  <option value="부장">부장</option>
                  <option value="차장">차장</option>
                  <option value="과장">과장</option>
                  <option value="대리">대리</option>
                  <option value="사원">사원</option>
                </select>
              </li>

              <li class="${styles.info__email}">
                <label for="email"><h5>이메일</h5></label>
                <input data-shape="line" type="email" id="email" placeholder="eco@taeco.com" required/>
              </li>

              <li class="${styles.info__phonenumber}">
                <label for="phone"><h5>전화번호</h5></label>
                <input data-shape="line" type="number" id="phone" placeholder="010-0000-0000" required/>
              </li>

              <li class="${styles.info__birthday}">
                <label for="birthday"><h5>생일</h5></label>
                <input data-shape="line" type="date" id="birthday" required/>
              </li>
              
              <li class="${styles.info__joinday}">
                <label for="joinday"><h5>입사일</h5></label>
                <input data-shape="line" type="date" id="joinday" required/>
              </li>
            </ul>
          </form>
  `;

  document.getElementById("backButton").addEventListener("click", () => {
    history.pushState(null, null, "/admin/employee");
    route();
  });

  // 페이지 로드 시 폼 채우기
  fillEditForm();
};

export default renderEditEmployeePage;
