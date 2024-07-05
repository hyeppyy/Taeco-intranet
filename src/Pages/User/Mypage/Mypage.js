import styles from "./Mypage.module.css";
import renderUserEditPage from "./Editpage"; // 새로운 파일에서 함수 가져오기

const renderUserMypage = (container) => {
  container.innerHTML = `
  <h1>마이 페이지</h1>
  <div class="${styles.page__header}">
    <h2>내정보</h2>
    <button id="editButton" data-color="positive" data-shape="block">정보 수정</button>
  </div>
  <div class="${styles.page__body}">
    <div class="page__body-img">
      <img src="/public/images/_Avatar_.png" alt="profileimg">
    </div>
    <div class="${styles.info}">
      <div class="${styles.info__first}">
        <h2 class="${styles.info__name}">홍길동</h2> 
        <h4 class="${styles.info__position}">차장</h4>
      </div>
      <div class="${styles.info__second}">
        <div class="${styles.section1}">
          <img src="/public/icons/email.svg" alt="email">
          <h4 class="${styles.email}">honggildong@google.com</h4>
        </div>
        <div class="${styles.section2}">
          <img src="/public/icons/call.svg" alt="call">
          <h4 class="${styles.call}">010-1234-5678</h4>
        </div>
      </div>
  </div>
  `;

  // document
  //   .querySelector(`.${styles.editButton}`)
  //   .addEventListener("click", () => {
  //     history.pushState(null, null, "/user/editpage");
  //     route();
  //   });

  const editButton = document.getElementById("editButton");
  if (editButton) {
    editButton.addEventListener("click", () => {
      renderUserEditPage(container); // 정보 수정 페이지로 이동
    });
  }
};

export default renderUserMypage;
