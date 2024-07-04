import route from "/src/Router/Router";
import styles from "../Notice.module.css";

const renderNoticesList = (data) => {
  const tableBody = document.querySelector("table > tbody");

  tableBody.innerHTML = ""; //초기화

  //table 구조 생성
  data.forEach((dataItem) => {
    const row = document.createElement("tr");
    const hasAttachments = dataItem.attachments.length > 0;
    const hasImportant = dataItem.isImportant === "true";

    row.innerHTML = `
            <td >${
              hasImportant
                ? `<span class="${styles.importantTag}">중요</span> `
                : dataItem.index
            }</td>
            <td>${dataItem.title}</td>
            <td>${dataItem.author}</td>
            <td>${dataItem.date}</td>
            <td>${
              hasAttachments
                ? `<img src="/public/icons/textfile.svg" alt="file-icon" width="20" height="20" />`
                : ""
            }</td>
            <td>${dataItem.views}</td>
      `;

    // 각 행에 데이터 속성 할당
    row.dataset.index = dataItem.index;
    row.dataset.title = dataItem.title;
    row.dataset.author = dataItem.author;
    row.dataset.date = dataItem.date;
    row.dataset.attachments = hasAttachments;
    row.dataset.views = dataItem.views;
    row.dataset.description = dataItem.description;

    // 행 클릭 이벤트 리스너 추가
    row.addEventListener("click", () => {
      // 클릭한 행의 데이터를 URL 쿼리 파라미터로 변환
      const noticeData = {
        index: row.dataset.index,
        title: row.dataset.title,
        author: row.dataset.author,
        date: row.dataset.date,
        attachments: row.dataset.attachments,
        views: row.dataset.views,
        description: row.dataset.description,
      };

      const queryString = new URLSearchParams(noticeData).toString();
      history.pushState(null, null, `/user/notices/detail?${queryString}`);
      route();
    });

    tableBody.appendChild(row);
  });
};

export default renderNoticesList;
