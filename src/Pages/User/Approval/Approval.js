import styles from "./Approval.module.css";

const renderUserApproval = (container) => {
  container.innerHTML = `
  <div class="contents">
        <!-- 페이지 타이틀 -->
        <h1 class="title">전자결재</h1>
        <div class="content__row">
          <!-- tap형식 버튼 -->
          <div class="tabs">
            <button class="tab-link active" onclick="openTab(event,'심사중')">
              심사중
            </button>
            <button class="tab-link" onclick="openTab(event,'승인')">
              승인
            </button>
            <button class="tab-link" onclick="openTab(event,'반려')">
              반려
            </button>
          </div>
          <!-- 결제신청 모달 버튼 -->
          <button class="paymentRequest modalOpenBtn" id="openModalBtn" >
            결제 신청
          </button>
        </div>

        <!-- 결제신청 모달 -->
        <div class="modal modalHidden" id="modal">
          <div class="modal__background"></div>
          <div class="modal__content">
            <span class="close__btn" id="closeModalBtn">&times;</span>
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
            <div class="data__container">
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
            <button class="submit__Btn" id="submitBtn">신청하기</button>
          </div>
        </div>
        
        <!-- 게시글 상세 모달 -->
        
        <div id="detailModal" class="modal modalHidden">
          <div class="modal__background"></div>
          <div class="modal__content">
            <span class="close__btn" id="closeDetailModalBtn">&times;</span>
            <h2 id="detailTitle"></h2>
            <label><h4>카테고리</h4></label>
            <div>
              <div class="detailmodal__content" id="detailCategory"></div>
            </div>
            <label><h4>날짜</h4></label>
            <div>
              <div class="detailmodal__content" id="detailDate"></div>
            </div>
            <label><h4>사유</h4></label>
            <div>
              <div class="detailmodal__content" id="detailDescription"></div>
            </div>
          </div>
        </div>
      
        <!-- 카테고리 selectbox -->
        <div class="content">
          <div class="filter">
            <select>
              <option value="all">카테고리 전체</option>
              <option value="반차">반차</option>
              <option value="연차">연차</option>
              <option value="조퇴">조퇴</option>
              <option value="기타">기타</option>
            </select>
          </div>
        </div>

        <div class="content">
          <div id="심사중" class="tab-content active">
            <table>
              <thead>
                <tr class="title">
                  <th class="menu__tpye">종류</th>
                  <th class="menu__title">제목</th>
                  <th class="menu__date">신청일</th>
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
          <div id="승인" class="tab-content">
            <table>
              <thead>
                <tr class="title">
                  <th class="menu__tpye">종류</th>
                  <th class="menu__title">제목</th>
                  <th class="menu__date">신청일</th>
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
          <div id="반려" class="tab-content">
            <table>
              <thead>
                <tr class="title">
                  <th class="menu__tpye">종류</th>
                  <th class="menu__title">제목</th>
                  <th class="menu__reason">반려사유</th>
                  <th class="menu__date">신청일</th>
                </tr>
              </thead>
              <tbody>
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
          <!-- 페이지네이션 구현하기 -->
          <div id="pagination" class="pagination">
            <button id="prevBtn">&laquo;</button>
            <button class = "pageNumger__btn active" id="pageNumber">1</button>
            <button class = "pageNumger__btn" >2</button>
            <button class = "pageNumger__btn" >3</button>
            <button class = "pageNumger__btn" >4</button>
            <button id="nextBtn">&raquo;</button>
          </div>
        </div>
      </div>
`;
};

export default renderUserApproval;
