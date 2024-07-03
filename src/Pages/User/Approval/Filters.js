//import renderApprovalList from "./RenderApprovalList";
import styles from "./Approval.module.css";
import initPagination from "./Pagination/Pagination";

// 탭(심사중, 승인, 반려) 필터 [input: 서버로부터 불러온 데이터]
const filterByTabs = (data) => {
  const tabsFilter = document.querySelector(
    `.${styles["approval-approve__tabs"]}`
  );
  const selectFilter = document.querySelector("#filter");

  let state = null; // 초기 상태는 심사중
  let category = "all"; // 초기 상태는 전체 카테고리

  let filteredData = data.filter((item) => item.isApprove === state);
  document.getElementById("undetermined").classList.add(styles.active); // 초기 상태에서 심사중 탭 활성화
  //renderApprovalList(filteredData); // 초기 렌더링
  initPagination(filteredData); // Pagination 렌더링

  // 탭 필터링
  tabsFilter.addEventListener("click", (event) => {
    const targetId = event.target.id;

    // 모든 탭의 활성화 클래스 제거
    document
      .querySelectorAll(`.${styles["approval-approve__tab"]}`)
      .forEach((tab) => {
        tab.classList.remove(styles.active);
      });

    // 탭 클릭에 따른 조건 렌더링
    if (targetId === "undetermined") {
      event.target.classList.add(styles.active);
      state = null;
    } else if (targetId === "approved") {
      event.target.classList.add(styles.active);
      state = true;
    } else if (targetId === "rejected") {
      event.target.classList.add(styles.active);
      state = false;
    } else return;

    applyFilters(data, state, category);
});

  // 카테고리 필터링
  selectFilter.addEventListener("change", (event) => {
    category = event.target.value;
    applyFilters(data, state, category);
  });
};

// 필터링 로직
const applyFilters = (data, state, category) => {
  let filteredData = data.filter((item) => item.isApprove === state);

  if (category !== "all") {
    filteredData = filteredData.filter((item) => item.category === category);
  }

  initPagination(filteredData);
  //renderApprovalList(filteredData);
};

export default filterByTabs;
