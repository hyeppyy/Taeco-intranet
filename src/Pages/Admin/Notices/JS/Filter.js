import renderNoticesList from "./RenderNoticesList.js";
import initPagination, {
  resetCurrentPage,
} from "/src/Components/Pagination/Pagination";
import styles from "../Notice.module.css";

let originalData = []; // 원본 데이터 저장
let currentCategory = "event"; // 현재 선택된 카테고리
let currentSortType = "latest"; // 현재 정렬 방식
let currentSearchQuery = ""; // 현재 검색어

const tabFilter = (data) => {
  originalData = data; // 원본 데이터 저장
  const tabsFilter = document.querySelector(`.${styles["notices__tabs"]}`);
  const selectFilter = document.querySelector("#noticeFilter");
  const searchInput = document.querySelector("#noticeSearchBox");

  // 초기 상태 설정
  document.getElementById("event").classList.add(styles.active);
  selectFilter.value = currentSortType;

  // 필터링 및 렌더링 함수
  const filterAndRender = () => {
    let filteredData = originalData.filter(
      (item) => item.category === currentCategory
    );

    // 검색 필터 적용
    if (currentSearchQuery) {
      filteredData = filteredData.filter(
        (item) =>
          item.title.toLowerCase().includes(currentSearchQuery) ||
          item.author.toLowerCase().includes(currentSearchQuery)
      );
    }

    // 날짜 정렬 적용 및 중요 데이터를 상단으로
    filteredData = sortDataWithImportantFirst(filteredData, currentSortType);

    updateTotalPostsNum(filteredData);
    resetCurrentPage();
    renderNoticesList(filteredData);
    initPagination(filteredData, renderNoticesList);
  };

  // 탭 필터 이벤트 리스너
  tabsFilter.addEventListener("click", (event) => {
    const targetId = event.target.id;
    if (targetId) {
      document.querySelectorAll(`.${styles["notices__tab"]}`).forEach((tab) => {
        tab.classList.remove(styles.active);
      });
      event.target.classList.add(styles.active);
      currentCategory = targetId;
      filterAndRender();
    }
  });

  // 정렬 옵션 변경 이벤트 리스너
  selectFilter.addEventListener("change", () => {
    currentSortType = selectFilter.value;
    filterAndRender();
  });

  // 검색 이벤트 리스너
  searchInput.addEventListener("input", () => {
    currentSearchQuery = searchInput.value.trim().toLowerCase();
    filterAndRender();
  });

  // 초기 렌더링
  filterAndRender();
};

// 총 게시글 수 업데이트 함수
const updateTotalPostsNum = (data) => {
  const totalPostsNum = document.querySelector("#noticeTotalPostsNum");
  totalPostsNum.innerText = `총 게시글 수 ${data.length}개`;
  totalPostsNum.style.color = `var(--gray-07)`;
};

// 중요 태그가 있는 데이터를 상단으로 올리고 날짜순 정렬을 적용하는 함수
const sortDataWithImportantFirst = (data, sortType) => {
  const importantData = data.filter((item) => item.isImportant === 1);
  const normalData = data.filter((item) => item.isImportant === 0);

  const sortFunction =
    sortType === "latest"
      ? (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      : (a, b) => new Date(a.createdAt) - new Date(b.createdAt);

  importantData.sort(sortFunction);
  normalData.sort(sortFunction);

  return [...importantData, ...normalData];
};

export default tabFilter;
