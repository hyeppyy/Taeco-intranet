const renderNoticesList = (data) => {
  const tableBody = document.querySelector("table > tbody");

  tableBody.innerHTML = ""; //초기화

  data.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${data.index}</td>
        <td>${data.title}</td>
        <td>${data.author}</td>
        <td>${data.date}</td>
        <td>${data.attachments}</td>
        <td>${data.views}</td>
        `;
    tableBody.appendChild(row);
  });
};

export default renderNoticesList;
