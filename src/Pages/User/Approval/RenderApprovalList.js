import styles from "./Approval.module.css";

// 필터링된 데이터 렌더링 [input: 필터링된 데이터]
const renderApprovalList = (data) => {
  const container = document.querySelector(`.${styles["approval-list"]}`);
  // 함수 호출마다, 기존 렌더링 초기화
  container.innerHTML = "";

  // 필터링된 데이터 렌더링
  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = styles["approval-list__item"];
    div.innerHTML = `<div class="${styles["approval-list__title"]}">
      <h3>${item.category}</h3>
      <h5>${item.date}</h5>
      </div>`;

    container.appendChild(div);
  });
};

export default renderApprovalList;
