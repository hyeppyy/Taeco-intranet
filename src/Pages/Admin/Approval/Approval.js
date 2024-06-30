import styles from "./Approval.module.css";
const renderAdminApproval = (container) => {
  container.innerHTML = `
  <div class="${styles.contents}">
        <!-- 페이지 타이틀 -->
        <h1>전자결재 관리</h1>
        <div class="${styles.content__row}">
          <!-- tap형식 버튼 -->
          <div class="${styles.tabs}">
            <button class="${styles.tab_link} ${styles.active}" onclick="openTab(event,'심사중')">
              심사중
            </button>
            <button class="${styles.tab_link}" onclick="openTab(event,'승인')">
              승인
            </button>
            <button class="${styles.tab_link}" onclick="openTab(event,'반려')">
              반려
            </button>
          </div>
        </div>

        <!-- 카테고리 selectbox -->
        <div class="${styles.content__row}">
          <div class="${styles.filter}">
            <select>
              <option value="all">카테고리 전체</option>
              <option value="반차">반차</option>
              <option value="연차">연차</option>
              <option value="조퇴">조퇴</option>
              <option value="기타">기타</option>
            </select>
          </div>
          <div class="${styles.filter}">
            <select>
              <option value="최신순">최신순</option>
              <option value="오래된순">오래된순</option>
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
                  <th class="${styles.menu__user}">요청자</th>
                  <th class="${styles.menu__reason}">반려사유</th>
                  <th class="${styles.menu__date}">신청일</th>
                </tr>
              </thead>
              <tbody id="boardContent">
                <!--json데이터 추가-->
              </tbody>
            </table>
          </div>
          <div id="승인" class="${styles.tab_content}">
            <table>
              <thead>
                <tr class="${styles.title}">
                  <th class="${styles.menu__type}">종류</th>
                  <th class="${styles.menu__title}">제목</th>
                  <th class="${styles.menu__user}">요청자</th>
                  <th class="${styles.menu__reason}">반려사유</th>
                  <th class="${styles.menu__date}">신청일</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <div id="반려" class="${styles.tab_content}">
            <table>
              <thead>
                <tr class="${styles.title}">
                  <th class="${styles.menu__type}">종류</th>
                  <th class="${styles.menu__title}">제목</th>
                  <th class="${styles.menu__user}">요청자</th>
                  <th class="${styles.menu__reason}">반려사유</th>
                  <th class="${styles.menu__date}">신청일</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <!-- 페이지네이션 구현하기 -->
          <div id="pagination" class="${styles.pagination}">
            <button id="prevBtn">&laquo;</button>
            <button class="${styles.pageNumber__btn} ${styles.active}" id="pageNumber">1</button>
            <button class="${styles.pageNumber__btn}">2</button>
            <button class="${styles.pageNumber__btn}">3</button>
            <button class="${styles.pageNumber__btn}">4</button>
            <button id="nextBtn">&raquo;</button>
          </div>
        </div>
        <!-- 결제신청 모달 -->
        <div class="${styles.modal} ${styles.modalHidden}" id="modal">
          <div class="${styles.modal__background}"></div>
          <div class="${styles.modal__content}">
            <span class="${styles.close__btn}" id="closeModalBtn">&times;</span>
            <h2>결제</h2>
            <label for="category"><h4>카테고리</h4></label>
            <div class="${styles.category}"><h5>연차</h5></div>
            <label for="startDate"><h4>날짜</h4></label>
            <div class="${styles.data__container}">
              <input type="date" id="startDate" />
              <span> - </span>
              <input type="date" id="endDate" />
            </div>
            <label for="title"><h4>제목</h4></label>
            <div class="${styles.title}"><h5>반차신청합니다.</h5></div>
            <label for="user"><h4>요청자</h4></label>
            <div class="${styles.user}"><h5>반차신청합니다.</h5></div>
            <label for="description"><h4>반려사유</h4></label>
            <textarea
              id="description"
              placeholder="내용을 입력해 주세요"
              maxlength="100"
            ></textarea>
            <div class="${styles.content__row}">
              <button class="${styles.refuse__Btn}" id="refuseBtn">거절</button>
              <button class="${styles.submit__Btn}" id="submitBtn">승인</button>
            </div>
          </div>
        </div>
      </div>
      `;
};

export default renderAdminApproval;
