import styles from "../Notice.module.css";
import route from "/src/Router/Router";

const renderNoticesList = (data) => {
  const tableBody = document.querySelector("[data-n-table-body]");
  const currentUserName = sessionStorage.getItem("userName") || "";

  tableBody.innerHTML = ""; //초기화

  if (data.length === 0) {
    // 테이블에 데이터가 없을 때
    const noticeTableRow = document.createElement("tr");
    const noticeTableCell = document.createElement("td");
    noticeTableCell.colSpan = 6;
    noticeTableCell.textContent = "공지사항이 없습니다.";
    noticeTableCell.style.textAlign = "center";
    noticeTableCell.style.padding = "20px";
    noticeTableRow.appendChild(noticeTableCell);
    tableBody.appendChild(noticeTableRow);
  } else {
    // 테이블에 데이터가 있을 때
    data.forEach((dataItem) => {
      const noticeRow = document.createElement("tr");
      const hasAttachments = dataItem.attachments !== null;
      const hasImportant = dataItem.isImportant === 1;
      const currentDate = new Date();
      const yyyy = currentDate.getFullYear();
      const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
      const dd = String(currentDate.getDate()).padStart(2, "0");
      const hh = String(currentDate.getHours()).padStart(2, "0");
      const min = String(currentDate.getMinutes()).padStart(2, "0");
      const createdAt = `${yyyy}-${mm}-${dd} ${hh}:${min}`;

      noticeRow.innerHTML = `
              <td >${
                hasImportant
                  ? `<span class="${styles.importantTag}">중요</span> `
                  : dataItem.id
              }</td>
              <td>${dataItem.title}</td>
              <td>${currentUserName}</td>
              <td>${createdAt}</td>
              <td>${
                hasAttachments
                  ? `<img src="/public/icons/textfile.svg" alt="file-icon" width="20" height="20" />`
                  : ""
              }</td>
              <td>${dataItem.views}</td>
        `;

      tableBody.appendChild(noticeRow);

      // 각 행에 데이터 속성 할당
      noticeRow.dataset.id = dataItem.id;
      noticeRow.dataset.title = dataItem.title;
      noticeRow.dataset.author = currentUserName;
      noticeRow.dataset.createdAt = createdAt;
      noticeRow.dataset.attachments = dataItem.attachments ? "true" : "false";
      noticeRow.dataset.views = dataItem.views;
      noticeRow.dataset.description = dataItem.description;

      // 행 클릭 이벤트 리스너 추가
      noticeRow.addEventListener("click", () => {
        // 클릭한 행의 데이터를 URL 쿼리 파라미터로 변환
        const noticeData = {
          id: noticeRow.dataset.id,
          title: noticeRow.dataset.title,
          author: noticeRow.dataset.author,
          createdAt: noticeRow.dataset.createdAt,
          attachments: noticeRow.dataset.attachments,
          views: noticeRow.dataset.views,
          description: noticeRow.dataset.description,
        };

        const queryString = new URLSearchParams(noticeData).toString();
        history.pushState(null, null, `/admin/notices/detail?${queryString}`);
        route();
      });
    });
  }
};

export default renderNoticesList;
