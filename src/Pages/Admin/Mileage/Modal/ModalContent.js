// 마일리지 심사
export const showMileageListContent = (item) => {
  return {
    modal_id: `mileage_${item.id}`,
    header: `마일리지 심사`,
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
              <h5>점수</h5>
              <input data-shape="line" type="text" value='${item.score}' readonly />
            </div>

            <div class="form-group">
              <h5>신청자</h5>
              <input data-shape="line" type="text" value='${item.employee}' readonly />
            </div>

            <div class="form-group">
              <h5>신청일자</h5>
              <input
                data-shape="line"
                type="text"
                value='${item.date}'
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
    `,
  };
};
