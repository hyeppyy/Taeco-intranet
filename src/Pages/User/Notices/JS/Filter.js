import renderNoticesList from "./RenderNoticesList.js";
import initPagination from "../Pagination/Pagination.js";
import styles from "../Notice.module.css";

const tabFilter = (data) => {
  const totalPostsNum = document.querySelector("#noticeTotalPostsNum");
  const tabsFilter = document.querySelector(`.${styles["notices__tabs"]}`);
  let filteredData = data.filter((item) => item.category === "event"); // category 속성이 "event"인 항목들만 필터링하여 filteredData 배열에 저장
  document.getElementById("event").classList.add(styles.active); // 초기 상태에서 심사중 탭 활성화
  filteredData = moveImportantDataToTop(filteredData); // 중요 항목을 상단으로 이동

  renderNoticesList(filteredData); // 초기 렌더링
  dataFilter(filteredData); // 초기 날짜 필터링
  searchFilter(filteredData); // 초기 검색 필터링
  initPagination(filteredData); // Pagination 렌더링

  //초기상태 총 게시글 수
  totalPostsNum.innerText = `총 게시글 수 ${filteredData.length}개`;
  totalPostsNum.style.color = `var(--gray-07)`;

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
    filteredData = moveImportantDataToTop(filteredData); // 중요 항목을 상단으로 이동

    renderNoticesList(filteredData);
    dataFilter(filteredData); // 탭 필터 후 날짜 필터 적용
    searchFilter(filteredData); // 탭 필터 후 검색 필터 적용
    initPagination(filteredData);
    totalPostsNum.innerText = `총 게시글 수 ${filteredData.length}개`; //필터 후 총 게시글 수
  });
};

//날짜별(최신순, 오래된순) 필터
const dataFilter = (filteredData) => {
  const selectFilter = document.querySelector("#noticeFilter");

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
const moveImportantDataToTop = (filteredData) => {
  const importantData = filteredData.filter(
    (item) => item.isImportant === "true"
  );
  console.log(importantData, "importantData");

  const normalData = filteredData.filter(
    (item) => item.isImportant === "false"
  );
  return [...importantData, ...normalData]; //배열합치기:중요한 데이터가 먼저 나오고 그 뒤에 일반 데이터가 나오게 됨
};

export default tabFilter;
