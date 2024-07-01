import detailInfo from "../JS/DetailInfo.js";
import styles from "../Detail/Detail.module.css";

const renderAdminNoticesDetail = (container) => {
  container.innerHTML = `
          <h1 class="title">공지사항>상세</h1>
        <div class="${styles.noticeDetail}">
        <h2>토스페이 결제 취소 / 환불이 필요해요. 결제토스페이환불</h2>
        <div class="${styles.noticeDetail__btnContainer}">
        <button data-color="neutral" data-shape="line" class="${styles.noticeDetail__backBtn}">뒤로가기</button>
        </div>
          <ul class="${styles.noticeDetail__info}"></ul>
          <h4>
            제품의 교환 및 반품, 환불은 모두 통신판매업자인 가맹점의 정책을
            따르기 때문에 가맹점으로 문의가 필요해요. [가맹점 문의 앱 경로]
            '토스페이' → '내 쇼핑' → '문의하기' → 원하는 결제 내역 선택 → '1:1
            문의' 혹은 '전화 문의' [바로가기 링크] ※ 주말 및 공휴일은 가맹점에서
            고객님의 문의 내용 확인이 어려울 수 있는 점 양해 부탁드려요. ※
            신선식품의 경우 상품의 가치가 신선도에 영향을 받기 때문에 단순변심에
            의한 교환 및 환불이 어려울 수 있어요
          </h4>
        </div>
  `;
  detailInfo();
  moveBack();
};

const moveBack = () => {
  const backBtn = document.querySelector(`.${styles.noticeDetail__backBtn}`);
  backBtn.addEventListener("click", () => {
    history.back();
  });
};

export default renderAdminNoticesDetail;
