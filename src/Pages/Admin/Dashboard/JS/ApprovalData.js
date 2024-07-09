import styles from "./../Dashboard.module.css";

// 서버 데이터 요청 함수
const approvalData = async () => {
  try {
    const response = await fetch("/api/approval");
    const data = await response.json();

    if (data.status === "OK") {
      ApprovalDashBoardFilter(data.data);
    } else {
      console.error("Error in Approval DashBoard data:", data.error);
    }
  } catch (error) {
    console.error("Failed to fetch Approval DashBoard data:", error);
  }
};

export default approvalData;

const ApprovalDashBoardFilter = (data) => {
  // `isApprove` 값이 `null`인 데이터 필터링
  const filteredData = data.filter(
    (item) => item.isApprove !== 0 && item.isApprove !== 1
  );
  // 상위 3개의 항목 추출
  const topThreeItems = filteredData.slice(0, 3);
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
          <p>${item.user}</p><br>
          <p>${item.submitdate}</p>
        </td>
    `;
    tableBody.appendChild(approvalRow);
  });
};
