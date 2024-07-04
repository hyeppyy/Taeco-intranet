import styles from "./Approval.module.css";
import { showApprovalDetailAdminContent } from "./Modal/ModalContent";
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
    tr.setAttribute("data-modal-target", `#modal-approvala_${item.id}`);
    tr.innerHTML = `
      <td class="${styles["approval-list__category"]}">${item.category}</td>
      <td class="${styles["approval-list__title"]}">${item.title}</td>
      <td class="${styles["approval-list__user"]}">${item.user}</td>
      <td class="${styles["approval-list__refusereason"]}">${item.refusereason}</td>
      <td class="${styles["approval-list__submitdate"]}">${item.submitdate}</td>
      <td class="${styles["approval-list__meida"]}">
        <p>[${item.startdate} ~ ${item.enddate}] ${item.title}</p><br>
        <p>반려사유:${item.refusereason}</p><br>
        <p class="${styles["approval-tr__date"]}">${item.submitdate}</p>
      </td>
    `;

    tbody.appendChild(tr);
  });

  // Append table to container
  container.appendChild(table);

  data.forEach((item) => {
    const modalContent = showApprovalDetailAdminContent(item);
    renderDynamicModal(
      `.${styles["approval-list"]}`,
      modalContent.modal_id,
      modalContent.header,
      modalContent.content
    );
  });
};

export default renderApprovalList;
