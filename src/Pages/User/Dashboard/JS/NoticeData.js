import styles from "./../Dashboard.module.css";

//서버 데이터 요청 함수
const noticesData = async () => {
  const response = await fetch("/server/data/notices.json");
  const data = await response.json();

  filter(data);
};

export default noticesData;

const filter = (data) => {
  // 원본 데이터 복사 및 날짜 기준 내림차순 정렬
  const sortedData = data
    .slice()
    .sort((pre, sub) => new Date(sub.date) - new Date(pre.date));
  // 정렬된 데이터에서 상위 3개의 항목 추출
  const topThreeItems = sortedData.slice(0, 3);
  const tableBody = document.querySelector(`.${styles.noticeTable__tbody}`);
  // 테이블 본문 초기화
  tableBody.innerHTML = "";

  topThreeItems.forEach((item) => {
    const noticerow = document.createElement("tr");

    noticerow.innerHTML = `
        <td >${item.index}</td>
        <td>${item.title}</td>
        <td>${item.author}</td>
        <td>${item.date}</td>
        <td>${item.date}</td>
        <td>${item.views}</td>
  `;
    tableBody.appendChild(noticerow);
  });
};
