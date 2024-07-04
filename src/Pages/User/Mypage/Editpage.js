import route from "/src/Router/Router";
import styles from "./Editpage.module.css";
import renderUserMypage from "./Mypage"; // renderUserMypage 함수 가져오기

const renderEditPage = (container) => {
  container.innerHTML = `
  <div class="${styles.page}">
  <!-- 페이지 타이틀 -->
<h1 class="${styles.page__title}">마이 페이지</h1>


<div class="${styles.page__header}">
  <h2>내정보</h2>
  <!-- 모바일 버전 토스트 -->
  <div>
  <button class="${styles.backButton}" data-color='warning' data-shape='block' id="save">뒤로가기</button>
  <button data-color='positive' data-shape='block' id="save">변경사항 저장</button>
  </div>
</div>

<!-- 내 정보 사진 수정 부분입니다. -->
<div class="${styles.page__body}">
  <div class="${styles.body__img}">
    <img src="/public/images/_Avatar_.png" 
    alt="profileimg" 
    class="${styles.profileimg}"
    >
    <div class="${styles.imgbtn}">
    <button data-color='neutral' data-shape='line'>이미지 변경</button>
    <button data-color='neutral' data-shape='line'>이미지 삭제</button>
    </div>
  </div>

  <!-- 내 정보 입력 부분입니다. -->
  <form action="/submit-user-info" method="post">
    <ul class="${styles.user__info}">
      <li class="${styles.info__name}">
        <label for="name"><span>이름</span></label>
        <input data-shape="line" type="name" id="name" placeholder="홍길동"/>
      </li>
      
      <li class="${styles.info__position}">
        <label for="positions"><span>직함</span></label>
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
        <label for="email"><span>이메일</span></label>
        <input data-shape="line" type="email" id="email" placeholder="eco@taeco.com"/>
      </li>
      
      <li class="${styles.info__number}">
        <label for="phone"><span>전화 번호</span></label>
        <input data-shape="line" type="number" id="phone" placeholder="010-0000-0000"/>
      </li>

      <li class="${styles.info__birthday}">
        <label for="birthday"><span>생일</span></label>
        <input data-shape="line" type="date" id="birthday" required/>
      </li>
      
      <li class="${styles.info__joinday}">
        <label for="joinday"><span>입사일</span></label>
        <input data-shape="line" type="date" id="joinday" required/>
      </li>
    </ul>
  </form>
</div>

<!-- 정보 수정 완료 토스트 부분입니다. -->
<div class="${styles.page__footer}">
    <div class="${styles.toast__message}">
      <img src="/public/icons/check.svg" alt="check">
      <div class="${styles.text}">
        <h4>정보 수정</h4>
        <h5>수정이 완료되었습니다.</h5>
      </div>
    </div>
    </div>

</div>

  `;

  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", () => {
      renderUserMypage(container); // 마이페이지로 돌아가기
    });
  }

  document
    .querySelector(`.${styles.backButton}`)
    .addEventListener("click", () => {
      history.pushState(null, null, "/user/mypage");
      route();
    });
};

export default renderEditPage;
