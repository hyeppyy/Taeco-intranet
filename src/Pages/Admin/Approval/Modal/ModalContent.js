export const showApprovalDetailAdminContent = (item) => {
  return {
    modal_id: `approvala_${item.id}`,
    header: `${item.title}`,
    content: `
    <div class="modal-box__form">
            <div class="form-group">
              <h5>카테고리</h5>
                <input
                data-shape="line"
                type="text"
                value='${item.category}'
                readonly
              />
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
              <input
                data-shape="line"
                type="text"
                value='${item.submitdate}'
                readonly
              />
            </div>

            <div class="form-group">
              <h5>신청사유</h5>
              <input
                data-shape="line"
                type="text"
                value='${item.submitreason}'
                readonly
              />
            </div>
            
            <div class="form-group">
              <h5>거절사유</h5>
              <select id="">
                <option disabled selected>거절사유 선택</option>
                <option value="recycling">점수 작성 오류</option>
                <option value="recycling">카테고리 작성 오류</option>
                <option value="recycling">증빙자료 누락</option>
              </select>
            </div>
          </div>

          <div class="modal-box__review-btns">
            <button
              id="reject-btn"
              class="modal-box__button"
              data-color="positive"
              data-shape="line"
            >
              거절하기
            </button>
            <button
              id="approve-btn"
              class="modal-box__button"
              data-color="positive"
              data-shape="block"
              >
              수락하기
            </button>
          </div>
        </div>`,
  };
};
