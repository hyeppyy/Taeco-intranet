import styles from "./../Dashboard.module.css";

// 서버 데이터 요청 함수
const approvalData = async () => {
  const response = await fetch("/server/data/approval.json");
  const data = await response.json();

  filter(data);
};

export default approvalData;

const filter = (data) => {
  // `isApprove` 값이 `null`인 데이터 필터링
  const filteredData = data.filter((item) => item.isApprove === null);

  // 필터링된 데이터를 최신순으로 정렬
  const sortedData = filteredData.sort(
    (pre, sub) => new Date(sub.submitdate) - new Date(pre.submitdate)
  );

  // 상위 3개의 항목 추출
  const topThreeItems = sortedData.slice(0, 3);
  const tableBody = document.querySelector(`.${styles.approvalTable__tbody}`);

  // 테이블 본문 초기화
  tableBody.innerHTML = "";

  topThreeItems.forEach((item) => {
    const approvalRow = document.createElement("tr");

    approvalRow.innerHTML = `
        <td>${item.category}</td>
        <td>${item.title}</td>
        <td>${item.submitdate}</td>
        <td>
          <p>${item.title}</p><br>
          <p>거절사유 : ${item.refusereason}</p><br>
          <p>${item.submitdate}</p>
        </td>
    `;
    tableBody.appendChild(approvalRow);
  });
};
