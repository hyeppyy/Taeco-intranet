import styles from "./Approval.module.css";

const renderApprovalList = (data) => {
  const container = document.querySelector(`.${styles["approval-list"]}`);
console.log(data);
  // Clear existing content
  container.innerHTML = "";

  // Create a table element
  const table = document.createElement("table");
  table.className = styles["approval-list__table"];

  // Create table body
  const tbody = document.createElement("tbody");
  tbody.className = styles["approval-list__tbody"];

  // Append table body to table
  table.appendChild(tbody);

  // Render each item in the data array
  data.forEach((item) => {
    const tr = document.createElement("tr");
    tr.className = styles["approval-list__row"];
    tr.innerHTML = `
      <td class="${styles["approval-list__category"]}">${item.category}</td>
      <td class="${styles["approval-list__title"]}">${item.title}</td>
      <td class="${styles["approval-list__submitdate"]}">${item.submitdate}</td>
    `;
    // Add click event listener to show detail modal
    //tr.addEventListener("click", () => showDetailModal(item));
    tbody.appendChild(tr);
  });

  // Append table to container
  container.appendChild(table);
};

export default renderApprovalList;
