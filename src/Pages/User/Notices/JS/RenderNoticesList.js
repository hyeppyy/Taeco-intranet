import styles from "./../Notice.module.css";

const renderNoticesList = (data) => {
  const tableBody = document.querySelector("table > tbody");

  tableBody.innerHTML = ""; //초기화

  data.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td id=${data.index}>${data.index}</td>
        <td>${data.title}</td>
        <td>${data.author}</td>
        <td>${data.date}</td>
        <td>${data.attachments}</td>
        <td>${data.views}</td>
        `;
    tableBody.appendChild(row);
  });

  //테이블 row 클릭시 상세페이지로 이동
  const noticeTable = document.querySelector(`.${styles["userNoticeTable"]}`);
  noticeTable.addEventListener("click", (event) => {
    window.location.href = "/user/notices/detail";

    // const row = event.target.closest("tr");
    // console.log(row);
  });
};

export default renderNoticesList;
