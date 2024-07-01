import renderNoticesList from "./RenderNoticesList.js";
import styles from "../Notice.module.css";

const tabFilter = (data) => {
  const tabsFilter = document.querySelector(`.${styles["notices__tabs"]}`);
  let filteredData = data.filter((item) => item.category === "event");
  document.getElementById("event").classList.add(styles.active); // 초기 상태에서 심사중 탭 활성화
  renderNoticesList(filteredData); // 초기 렌더링

  // 탭 클릭에 따른 조건 렌더링
  tabsFilter.addEventListener("click", (event) => {
    const targetId = event.target.id;

    // 모든 탭의 활성화 클래스 제거
    document.querySelectorAll(`.${styles["notices__tab"]}`).forEach((tab) => {
      tab.classList.remove(styles.active);
    });

    if (targetId === "event") {
      event.target.classList.add(styles.active);
    } else if (targetId === "mileage") {
      event.target.classList.add(styles.active);
    } else if (targetId === "approval") {
      event.target.classList.add(styles.active);
    } else if (targetId === "human-resource") {
      event.target.classList.add(styles.active);
    } else if (targetId === "education") {
      event.target.classList.add(styles.active);
    } else if (targetId === "etc") {
      event.target.classList.add(styles.active);
    }

    //카테고리별 데이터 필터링
    let filteredData = data.filter((item) => item.category === targetId);

    renderNoticesList(filteredData);
    dataFilter(filteredData); // 탭 필터 후 날짜 필터 적용
  });
};

//날짜별(최신순, 오래된순) 필터
const dataFilter = (filteredData) => {
  const selectFilter = document.querySelector("#filter");

  selectFilter.addEventListener("change", () => {
    //option을 선택했을때 실행됨
    // .slice()를 사용해 원본 데이터 변경하지 않고 복사본 사용
    let sortedData = filteredData.slice();

    if (selectFilter.value === "latest") {
      sortedData.sort((pre, sub) => new Date(sub.date) - new Date(pre.date));
    } else if (selectFilter.value === "old") {
      sortedData.sort((pre, sub) => new Date(pre.date) - new Date(sub.date));
    }

    renderNoticesList(sortedData);
  });
};

export default tabFilter;
