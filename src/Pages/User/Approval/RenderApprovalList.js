import styles from "./Approval.module.css";
import { showApprovalDetailContent } from "./Modal/ModalContent";
import renderDynamicModal from "../../../Components/Modal/RenderDynamicModal";

const renderApprovalList = (data) => {
  const container = document.querySelector(`.${styles["approval-list"]}`);

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
    tr.classList.add(`open-modal`);
    tr.setAttribute("data-modal-target", `#modal-approvalu_${item.id}`);
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

  data.forEach((item) => {
    const modalContent = showApprovalDetailContent(item);
    renderDynamicModal(
      `.${styles["approval-list"]}`,
      modalContent.modal_id,
      modalContent.header,
      modalContent.content
    );
  });
};

export default renderApprovalList;
