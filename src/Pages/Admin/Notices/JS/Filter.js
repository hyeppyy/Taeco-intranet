import renderNoticesList from "./RenderNoticesList.js";
import initPagination from "/src/Components/Pagination/Pagination";
import styles from "../Notice.module.css";

const tabFilter = (data) => {
  const tabsFilter = document.querySelector(`.${styles["notices__tabs"]}`);
  const selectFilter = document.querySelector("#noticeFilter");

  // 초기 상태 설정 (event 카테고리)
  let filteredData = data.filter((item) => item.category === "event");
  document.getElementById("event").classList.add(styles.active);

  // 초기 정렬 (기본값: 최신순)
  const initialSortType = selectFilter.value || "latest";
  dateFilter(filteredData, initialSortType);
  updateTotalPostsNum(filteredData);
  searchFilter(filteredData);
  initPagination(filteredData, renderNoticesList);

  // 정렬 옵션 변경 이벤트 리스너
  selectFilter.addEventListener("change", () => {
    dateFilter(filteredData, selectFilter.value);
  });

  // filteredData = moveImportantDataToTop(filteredData); // 중요 항목을 상단으로 이동

  tabsFilter.addEventListener("click", (event) => {
    const targetId = event.target.id; // 탭 클릭에 따른 조건 렌더링

    document.querySelectorAll(`.${styles["notices__tab"]}`).forEach((tab) => {
      tab.classList.remove(styles.active);
    }); // 모든 탭의 활성화 클래스 제거

    // 클릭된 탭에 활성화 클래스 추가
    if (targetId) {
      event.target.classList.add(styles.active);
    }

    // 카테고리별 데이터 필터링
    filteredData = data.filter((item) => item.category === targetId);

    renderNoticesList(filteredData);
    updateTotalPostsNum(filteredData);
    dateFilter(filteredData, selectFilter.value);
    searchFilter(filteredData);
    initPagination(filteredData, renderNoticesList);

    // filteredData = moveImportantDataToTop(filteredData); // 중요 항목을 상단으로 이동
  });
};

// 총 게시글 수 업데이트 함수
const updateTotalPostsNum = (data) => {
  const totalPostsNum = document.querySelector("#noticeTotalPostsNum");
  totalPostsNum.innerText = `총 게시글 수 ${data.length}개`;
  totalPostsNum.style.color = `var(--gray-07)`;
};

// 날짜별(최신순, 오래된순) 필터
const dateFilter = (data, sortType) => {
  let sortedData = [...data]; // 원본 데이터 변경하지 않고 복사본 사용

  if (sortType === "latest") {
    sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sortType === "old") {
    sortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  renderNoticesList(sortedData);
};

// 검색 필터
const searchFilter = (filteredData) => {
  const searchInput = document.querySelector("#noticeSearchBox");

  searchInput.addEventListener("input", () => {
    // 입력된 검색어를 소문자로 변환하여 공백 제거
    const searchQuery = searchInput.value.trim().toLowerCase();
    // .slice()를 사용해 원본 데이터 변경하지 않고 복사본 사용
    let filteredList = filteredData.slice();

    // 검색어가 포함된 데이터만 필터링
    if (searchQuery) {
      filteredList = filteredList.filter((item) => {
        // 검색어와 일치하는 열(여기서는 제목만 가정)을 찾음
        return (
          item.title.toLowerCase().includes(searchQuery) ||
          item.author.toLowerCase().includes(searchQuery)
        );
      });
    }

    renderNoticesList(filteredList); // 필터링된 데이터를 테이블에 렌더링
  });
};

// 중요 태그가 있는 데이터를 상단으로 올리기
// const moveImportantDataToTop = (filteredData) => {
//   const importantData = filteredData.filter(
//     (item) => item.isImportant === "true"
//   );

//   const normalData = filteredData.filter(
//     (item) => item.isImportant === "false"
//   );
//   return [...importantData, ...normalData]; //배열합치기:중요한 데이터가 먼저 나오고 그 뒤에 일반 데이터가 나오게 됨
// };

export default tabFilter;
