import styles from "./Approval.module.css";
import data from "../../../../server/data/approval.json"; // JSON 데이터를 불러옵니다.

export const populateTable = (tableId, filterCondition) => {
  //주어진 tableID를 사용하여 HTML문서에 해당 id를 가진 테이블 요소를 가져온다.
  const table = document.getElementById(tableId);
  //json데이터의 각 항목을 순회
  data.forEach((item) => {
    //조건에 맞는지를 확인하고 만족하면 테이블에 추가
    if (filterCondition(item)) {
      //새로운 tr요소를 생성
      const row = document.createElement("tr");
      //새로운 td요소를 생성
      const categoryCell = document.createElement("td");
      //스타일 클래스 적용
      categoryCell.className = styles.menu__type;
      //json데이터의 category값을 셀의 내용으로 설정
      categoryCell.textContent = item.category;
      //생성된 셀을 tr에 추가
      row.appendChild(categoryCell);
      //title 추가
      const titleCell = document.createElement("td");
      titleCell.className = styles.menu__title;
      titleCell.textContent = item.title;
      row.appendChild(titleCell);
      //submit 추가
      const submitDateCell = document.createElement("td");
      submitDateCell.className = styles.menu__date;
      submitDateCell.textContent = item.submitdate;
      row.appendChild(submitDateCell);
      //필터 조건을 만족하는 항목으로 구성된 행을 테이블에 추가
      table.appendChild(row);
    }
  });
};
