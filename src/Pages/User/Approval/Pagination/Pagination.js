// Pagination.js
import styles from "../Approval.module.css";
import renderApprovalList from "../RenderApprovalList";

var currentPage = 1; // 현재 페이지 번호를 저장하는 변수
const itemsPerPage = 5; // 한 페이지에 표시할 항목 수
var totalPages = 0; // 총 페이지 수를 저장하는 변수
var pageCount = 5; // 페이지네이션 갯수를 보여줄 변수

// 현재 페이지를 설정하고 페이지네이션과 현재 페이지 데이터를 렌더링하는 함수
const setCurrentPage = (page, data) => {
  if (page < 1) {
    currentPage = 1; // 페이지가 1보다 작으면 1로 설정
  } else if (page > totalPages) {
    currentPage = totalPages; // 페이지가 총 페이지 수보다 크면 총 페이지 수로 설정
  } else {
    currentPage = page; // 유효한 페이지일 경우 해당 페이지로 설정
  }
  renderPagination(data); // 페이지네이션 버튼을 렌더링
  renderCurrentPageData(data); // 현재 페이지의 데이터를 렌더링
};

// 현재 페이지의 데이터를 계산하고 렌더링하는 함수
const renderCurrentPageData = (data) => {
  const start = (currentPage - 1) * itemsPerPage; // 시작 인덱스 계산
  const end = start + itemsPerPage; // 끝 인덱스 계산
  const currentPageData = data.slice(start, end); // 현재 페이지에 해당하는 데이터 추출
  renderApprovalList(currentPageData); // 데이터 렌더링 함수 호출
};

// 페이지네이션 버튼을 렌더링하는 함수
const renderPagination = (data) => {
  totalPages = Math.ceil(data.length / itemsPerPage); // 총 페이지 수 계산
  const paginationContainer = document.getElementById("pagination"); // 페이지네이션 컨테이너 요소 가져오기
  paginationContainer.innerHTML = ""; // 기존 버튼 초기화

  // 처음 페이지 버튼 생성
  const startButton = document.createElement("button");
  startButton.innerHTML = "&laquo"; // 처음 페이지 버튼의 텍스트 설정
  startButton.id = "startBtn"; // 처음 페이지 버튼의 ID 설정
  startButton.onclick = () => setCurrentPage(1, data); //클릭 시 현재 페이지를 처음 페이지로 설정
  paginationContainer.appendChild(startButton); // 페이지네이션 컨테이너에 버튼 추가

  // 이전 페이지 버튼 생성
  const prevButton = document.createElement("button");
  prevButton.innerHTML = "&lt;"; // 이전 버튼의 텍스트 설정 (HTML 엔티티)
  prevButton.id = "prevBtn"; // 이전 버튼의 ID 설정
  prevButton.onclick = () => setCurrentPage(currentPage - 1, data); // 클릭 시 현재 페이지를 이전 페이지로 설정
  paginationContainer.appendChild(prevButton); // 페이지네이션 컨테이너에 버튼 추가

  // 페이지 버튼 범위 계산
  var startPage, endPage;
  var pageGroup = Math.ceil(currentPage / pageCount);
  endPage = pageGroup * pageCount;
  if (endPage > totalPages) endPage = totalPages;
  startPage = endPage - (pageCount - 1) <= 0 ? 1 : endPage - (pageCount - 1);

  // 페이지 번호 버튼 생성
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i; // 페이지 번호 텍스트 설정
    pageButton.className = styles.pageNumber__btn; // 버튼 스타일 클래스 설정
    if (i === currentPage) {
      pageButton.classList.add(styles.active); // 현재 페이지 버튼 활성화 클래스 추가
    }
    pageButton.onclick = () => setCurrentPage(i, data); // 클릭 시 해당 페이지로 이동
    paginationContainer.appendChild(pageButton); // 페이지네이션 컨테이너에 버튼 추가
  }

  // 다음 페이지 버튼 생성
  const nextButton = document.createElement("button");
  nextButton.innerHTML = "&gt;"; // 다음 버튼의 텍스트 설정 (HTML 엔티티)
  nextButton.id = "nextBtn"; // 다음 버튼의 ID 설정
  nextButton.onclick = () => setCurrentPage(currentPage + 1, data); // 클릭 시 현재 페이지를 다음 페이지로 설정
  paginationContainer.appendChild(nextButton); // 페이지네이션 컨테이너에 버튼 추가

  // 마지막 페이지 버튼 생성
  const endButton = document.createElement("button");
  endButton.innerHTML = "&raquo;"; //마지막 버튼의 텍스트 설정(HTML 엔티티)
  endButton.id = "endBtn"; // 마지막 버튼의 ID 설정
  endButton.onclick = () => setCurrentPage(totalPages, data); // 클릭 시 현재 페이지를 다음 페이지로 설정
  paginationContainer.appendChild(endButton); // 페이지네이션 컨테이너에 버튼 추가
};

// 페이지네이션 초기화 함수
const initPagination = (data) => {
  setCurrentPage(1, data); // 처음에는 첫 번째 페이지로 설정
};

export default initPagination; // initPagination 함수 모듈로 내보내기
