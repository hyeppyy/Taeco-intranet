// 마일리기 기준 알아보기 모달: modal-1
export const showApprovalContent = () => {
  return {
    modal_id: 1,
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
        <span> - </span>
        <input type="date" id="endDate"/>        
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
export const showApprovalDetailContent = () => {
  return {
    modal_id: 2,
    header: `게시글 상세 정보`,
    content: `
    <div class="modal-box__form">
      <label><h4>제목</h4></label>
      <div class="modal-detail__title"></div>
      <label><h4>카테고리</h4></label>
      <div class="modal-detail__category"></div>
      <label><h4>신청날짜</h4></label>
      <div class="modal-detail__date"></div>
      <label><h4>신청사유</h4></label>
      <div class="modal-detail__submitreason"></div>
    </div>`,
  };
};

export const showApprovalDetailRefuseContent = () => {
  return {
    modal_id: 3,
    header: `게시글 상세 정보`,
    content: `
    <div class="modal-box__form">
      <label><h4>제목</h4></label>
      <div class="modal-detail__title"></div>
      <label><h4>카테고리</h4></label>
      <div class="modal-detail__category"></div>
      <label><h4>신청날짜</h4></label>
      <div class="modal-detail__date"></div>
      <label><h4>신청사유</h4></label>
      <div class="modal-detail__submitreason"></div>
      <label><h4>거절사유</h4></label>
      <div class="modal-detail__refusereason"></div>
    </div>`,
  };
};
