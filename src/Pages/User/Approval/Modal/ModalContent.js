// 마일리기 기준 알아보기 모달: modal-1
export const showApprovalContent = () => {
  return {
    modal_id: `approval_1`,
    header: `결제 신청`,
    content: `
    <div class="approval-modalbox__form">
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
      <div class="approval-data__container">
        <input type="date" id="startDate"/>
        <select id="ampm">
          <option value="am">am</option>
          <option value="pm">pm</option>
        </select>
        <select id="detailtime">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>          
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>          
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <label for="description"><h4>사유작성</h4></label>
        <textarea
          id="description"
          placeholder="내용을 입력해 주세요"
          maxlength="100"
        ></textarea>
      <button class="modal-submit__btn" id="submitBtn">신청하기</button>
    </div>`,
  };
};

// 마일리지 신청 모달: modal-2
export const showApprovalDetailContent = (item) => {
  return {
    modal_id: `approvaluser_${item.id}`,
    header: `${item.title}`,
    content: `
    <div class="modal-box__form">
      <div class="form-group">
        <h5>카테고리</h5>
        <input data-shape="line" type="text" value='${item.category}' readonly />
      </div>

      <div class="form-group">
        <h5>신청날짜</h5>
        <input data-shape="line" type="text" value='${item.startdate} - ${item.enddate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청자</h5>
        <input data-shape="line" type="text" value='${item.user}' readonly />
      </div>

      <div class="form-group">
        <h5>신청일자</h5>
        <input data-shape="line" type="text" value='${item.submitdate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청사유</h5>
        <input data-shape="line" type="text" value='${item.submitreason}' readonly />
      </div>
            
      <div class="form-group">
        <h5>거절사유</h5>
        <input data-shape="line" type="text" value='${item.refusereason}' readonly />
      </div>
    </div>`,
  };
};

export const showApprovalDetailContentFalse = (item) => {
  return {
    modal_id: `approvaluserfalse_${item.id}`,
    header: `${item.title}`,
    content: `
    <div class="modal-box__form">
      <div class="form-group">
        <h5>카테고리</h5>
        <input data-shape="line" type="text" value='${item.category}' readonly />
      </div>

      <div class="form-group">
        <h5>신청날짜</h5>
        <input data-shape="line" type="text" value='${item.startdate} - ${item.enddate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청자</h5>
        <input data-shape="line" type="text" value='${item.user}' readonly />
      </div>

      <div class="form-group">
        <h5>신청일자</h5>
        <input data-shape="line" type="text" value='${item.submitdate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청사유</h5>
        <input data-shape="line" type="text" value='${item.submitreason}' readonly />
      </div>
    </div>`,
  };
};
