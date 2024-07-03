import addFile from "../JS/AddFile";
import toggleSwitch from "/src/Components/ToggleSwitch/ToggleSwitch";
import toggle_styles from "/src/Components/ToggleSwitch/ToggleSwitch.module.css";
import styles from "../Add/Add.module.css";

const renderAdminAddNotices = (container) => {
  if (!container) {
    console.error("container element not found");
    return;
  }
  container.innerHTML = `
        <h1>공지사항 관리</h1>
            <div class="${styles.btnWrap}">
                <button class="${styles.btnWrap__cancel}" data-color="positive" data-shape='line'>작성취소</button>
                <button class="${styles.btnWrap__add}" data-color="positive" data-shape='block'>등록</button>
            </div>
        <section class="${styles.contents}">
            <input data-shape='underline' type="text" placeholder="제목을 입력해주세요." style="width: 100%;"></input>
            <ul class="${styles.info}">
                <li class="${styles.info__items}">
                    <h5>작성자</h5>
                    <input data-shape='transparent' type="text" placeholder="작성자를 입력해주세요."></input>
                </li>
                <li class="${styles.info__items}">
                    <h5>등록일</h5>
                    <input data-shape='transparent' type="text" placeholder="등록일을 입력해주세요."></input>
                </li>
                <li class="${styles.info__items}">
                    <h5>필수공지로 등록</h5>
                    <div class="${toggle_styles.header__toggle}">
                        <!-- input checkbox의 토글 속성을 label로 연결시켜 활용 -->
                        <label class="${toggle_styles.switch}">
                            <input type="checkbox" id="toggleSwitch" />
                            <span class="${toggle_styles.slider}"></span>
                        </label>
                    </div>
                </li>
                <li class="${styles.info__items}">
                    <h5>첨부파일</h5>
                    <div class="${styles.info__addFile}">
                        <button class="${styles.uploadButton}">Choose File</button>
                        <input type="file" class="${styles.fileInput}" class="hidden">
                        <div class="${styles.fileInfo}" id="fileInfo"></div>
                    </div>
                </li>
            </ul>
            <textarea data-shape='transparent'placeholder="내용을 입력해주세요."></textarea>
        </section>
  `;
  moveBack();
  addFile();
  toggleSwitch();
};

const moveBack = () => {
  const cancel = document.querySelector(`.${styles.btnWrap__cancel}`);
  const add = document.querySelector(`.${styles.btnWrap__add}`);

  cancel.addEventListener("click", () => {
    history.back();
  });
};
export default renderAdminAddNotices;
