import styles from "./Approval.module.css";
import fetchApprovalData from "./FetchApprovalData";

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
          <button class="${styles.paymentRequest} ${styles.modalOpenBtn}" id="openModalBtn" >
            결제 신청
          </button>
        </div>

        <!-- 결제신청 모달 -->
        <div class="${styles.modal} ${styles.modalHidden}" id="modal">
          <div class="${styles.modal__background}"></div>
          <div class="${styles.modal__content}">
            <span class="${styles.close__btn}" id="closeModalBtn">&times;</span>
            <h2>결제 신청</h2>
            <label for="category"><h4>카테고리</h4></label>
            <select id="category">
              <option value="반차">반차</option>
              <option value="연차">연차</option>
              <option value="조퇴">조퇴</option>
              <option value="기타">기타</option>
            </select>
            <label for="title"><h4>제목</h4></label>
            <input type="text" id="title" placeholder="내용을 입력해 주세요" />
            <label for="startDate"><h4>날짜</h4></label>
            <div class="${styles.data__container}">
              <input type="date" id="startDate"/> 
              <span> - </span>
              <input type="date" id="endDate"/>
            </div>
            <label for="description"><h4>사유작성</h4></label>
            <textarea
              id="description"
              placeholder="내용을 입력해 주세요"
              maxlength="100"
            ></textarea>
            <button class="${styles.submit__Btn}" id="submitBtn">신청하기</button>
          </div>
        </div>
        
        <!-- 게시글 상세 모달 -->
        <div id="detailModal" class="${styles.modal} ${styles.modalHidden}">
          <div class="${styles.modal__background}"></div>
          <div class="${styles.modal__content}">
            <span class="${styles.close__btn}" id="closeDetailModalBtn">&times;</span>
            <h2 id="detailTitle"></h2>
            <label><h4>카테고리</h4></label>
            <div>
              <div class="${styles.detailmodal__content}" id="detailCategory"></div>
            </div>
            <label><h4>날짜</h4></label>
            <div>
              <div class="${styles.detailmodal__content}" id="detailDate"></div>
            </div>
            <label><h4>사유</h4></label>
            <div>
              <div class="${styles.detailmodal__content}" id="detailDescription"></div>
            </div>
          </div>
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
      </div>
  `;
  fetchApprovalData();
};

export default renderUserApproval;
