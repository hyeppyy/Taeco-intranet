import route from "/src/Router/Router";
import styles from "./Editpage.module.css";
import { loadFile, resetToDefaultImage } from "./ProfileEdit";
import { toastPopUp } from "/src/Components/Toast/Toast"; // 토스트 함수 불러오기

const renderUserEditPage = (container) => {
  container.innerHTML = `
  <div class="${styles.page}">
  <!-- 페이지 타이틀 -->
<h1 class=${styles.page__title}">마이 페이지</h1>


<div class="${styles.page__header}">
  <h2>내정보</h2>
  <div>
  <button class="${styles.backButton}" data-color='warning' data-shape='block' id="backButton">뒤로가기</button>
  <button class="${styles.saveButton}" data-color='positive' data-shape='block' id="saveButton">변경사항 저장</button>
  </div>
</div>

<!-- 내 정보 사진 수정 부분입니다. -->
<div class="${styles.page__body}">
  <div class="${styles.body__img}">
  <img class="${styles.profileImg}"src="/public/images/_Avatar_.png" alt="Image preview" id="previewImage" style="max-width: 300px; height: auto;">

    <div class="${styles.imgbtn}">
    <!--이미지 업로드 버튼 -->
    <form method="post" enctype="multipart/form-data">
      <div class="button">
          <button type="button" id="chooseFileButton" data-color="neutral" data-shape="line" >이미지 변경</button>
      </div>
      <input type="file" id="chooseFile" name="chooseFile" accept="image/*" style="display: none;" onchange="loadFile(this)">
    </form>

    <!--이미지 삭제 버튼 -->
    <button data-color='neutral' id="resetImageButton" data-shape='line'>이미지 삭제</button>
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
<div class="${styles.pageFooter}">
    <div class="${styles.toastMessage}" id="toastMessage">
      <img src="/public/icons/check.svg" alt="check">
      <div class="${styles.toastText}" id="toastText">
        <h4>정보 수정</h4>
        <h5>수정이 완료되었습니다.</h5>
      </div>
    </div>
    </div>
</div>
  `;

  // 마이페이지로 돌아가기 라우팅 방식

  document
    .querySelector(`.${styles.backButton}`)
    .addEventListener("click", () => {
      history.pushState(null, null, "/user/mypage");
      route();
    });

  // 이미지 파일 업로드 부분
  document.getElementById("chooseFileButton").addEventListener("click", () => {
    document.getElementById("chooseFile").click();
  });

  document.getElementById("chooseFile").addEventListener("change", function () {
    loadFile(this);
  });

  document.getElementById("resetImageButton").addEventListener("click", () => {
    resetToDefaultImage();
  });

  // 토스트 기능 구현
  const saveButton = document.getElementById("saveButton");
  if (saveButton) {
    saveButton.addEventListener("click", () => {
      toastPopUp();
    });
  } else {
    console.error("save 버튼을 찾을 수 없습니다.");
  }
};

export default renderUserEditPage;
