import styles from "./Approval.module.css";

const renderUserApproval = (container) => {
  container.innerHTML = `
  <div class="${styles.contents}">
        <!-- 페이지 타이틀 -->
        <h1>전자결재</h1>
        <div class="${styles.content__row}">
          <!-- tap형식 버튼 -->
          <div class="${styles.tabs}">
            <button class="${styles.tablink} ${styles.active}" onclick="openTab(event,'심사중')">
              심사중
            </button>
            <button class="${styles.tablink}" onclick="openTab(event,'승인')">
              승인
            </button>
            <button class="${styles.tablink}" onclick="openTab(event,'반려')">
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
        <div class="${styles.content}">
          <div class="${styles.filter}">
            <select>
              <option value="all">카테고리 전체</option>
              <option value="반차">반차</option>
              <option value="연차">연차</option>
              <option value="조퇴">조퇴</option>
              <option value="기타">기타</option>
            </select>
          </div>
        </div>

        <div class="${styles.content}">
          <div id="심사중" class="${styles.tab_content} ${styles.active}">
            <table>
              <thead>
                <tr class="${styles.title}">
                  <th class="${styles.menu__type}">종류</th>
                  <th class="${styles.menu__title}">제목</th>
                  <th class="${styles.menu__date}">신청일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>반차</td>
                    <td>반차 신청</td>
                    <td>2021-01-01</td>
                </tr>
                <tbody id="boardContent">
                </tbody>
              </tbody>
            </table>
          </div>
          <div id="승인" class="${styles.tab_content}">
            <table>
              <thead>
                <tr class="${styles.title}">
                  <th class="${styles.menu__type}">종류</th>
                  <th class="${styles.menu__title}">제목</th>
                  <th class="${styles.menu__date}">신청일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>연차</td>
                    <td>연차 신청</td>
                    <td>2021-01-01</td>
                </tr>
                <tr>
                    <td>조퇴</td>
                    <td>조퇴 신청</td>
                    <td>2021-01-01</td>
                </tr>
                <tr>
                    <td>기타</td>
                    <td>병가 신청</td>
                    <td>2021-01-01</td>
                </tr>
                <tr>
                    <td>기타</td>
                    <td>병가 신청</td>
                    <td>2021-01-01</td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div id="반려" class="${styles.tab_content}">
            <table>
              <thead>
                <tr class="${styles.title}">
                  <th class="${styles.menu__type}">종류</th>
                  <th class="${styles.menu__title}">제목</th>
                  <th class="${styles.menu__reason}">반려사유</th>
                  <th class="${styles.menu__date}">신청일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>기타</td>
                    <td>병가 신청</td>
                    <td> - </td>
                    <td>2021-01-01</td>
                </tr>
                <tr>
                    <td>기타</td>
                    <td>병가 신청</td>
                    <td> - </td>
                    <td>2021-01-01</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 페이지네이션 구현하기 -->
          <div id="pagination" class="${styles.pagination}">
            <button id="prevBtn">&laquo;</button>
            <button class = "${styles.pageNumber__btn} ${styles.active}">1</button>
            <button class = "${styles.pageNumber__btn}" >2</button>
            <button class = "${styles.pageNumber__btn}" >3</button>
            <button class = "${styles.pageNumber__btn}" >4</button>
            <button id="nextBtn">&raquo;</button>
          </div>
        </div>
      </div>
`;
};

export default renderUserApproval;
