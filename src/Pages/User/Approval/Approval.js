import styles from "./Approval.module.css";
import fetchApprovalData from "./FetchApprovalData";

import renderModal from "../../../Components/Modal/RenderModal";
import { showApprovalContent } from "./Modal/ModalContent";

const renderUserApproval = (container) => {
  container.innerHTML = `
  <div class="${styles.contents}">
        <!-- 페이지 타이틀 -->
        <h1>전자결재</h1>
        <div class="${styles.content__row}">
          <!-- tap형식 버튼 -->
          <div class="${styles["approval-approve__tabs"]}">
            <button
              id="undetermined"
              class="${styles["approval-approve__tab"]} ${styles["approval-approve__tab--undetermined"]}"
            >
              심사중
            </button>
            <button 
              id="approved"
              class="${styles["approval-approve__tab"]} ${styles["approval-approve__tab--approved"]}">
              승인
            </button>
            <button 
              id="rejected"
              class="${styles["approval-approve__tab"]} ${styles["approval-approve__tab--rejected"]}">
              반려
            </button>
          </div>
          <!-- 결제신청 모달 버튼 -->
          <button class="${styles.paymentRequest} open-modal" data-modal-target="#modal-1" >
            결제 신청
          </button>
        </div>        

        <!-- 카테고리 selectbox -->
        <div class="${styles["approval__filter"]}">
          <select id="filter">
            <option value="all">카테고리 전체</option>
            <option value="반차">반차</option>
            <option value="연차">연차</option>
            <option value="조퇴">조퇴</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <table class="${styles["approval-table"]}">
          <thead class="${styles["approval-table__thead"]}">
            <tr class="${styles["approval-table__tr"]}">
              <th class="${styles["approval-th__category"]}">종류</th>
              <th class="${styles["approval-th__title"]}">제목</th>
              <th class="${styles["approval-th__submitdate"]}">신청일</th>
            </tr>
          </thead>
        </table>
        
        <div class="${styles["approval-list"]}"></div>
        
        <!-- 페이지네이션 구현하기 -->
        <div id="pagination" class="${styles.pagination}"></div>
  </div>`;
  fetchApprovalData();

  // 마일리기 기준 알아보기 모달: modal-1
  renderModal(
    showApprovalContent().modal_id, // 모달 번호
    showApprovalContent().header, // 모달 헤더
    showApprovalContent().content //모달 내용
  );
};

export default renderUserApproval;
