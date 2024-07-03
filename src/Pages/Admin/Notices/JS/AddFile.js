import styles from "../Add/Add.module.css";

const addFile = () => {
  const uploadButton = document.querySelector(`.${styles.uploadButton}`);
  const fileInput = document.querySelector(`.${styles.fileInput}`);
  const fileInfo = document.querySelector(`.${styles.fileInfo}`);

  // 버튼 클릭 시 파일 선택 창 열기
  uploadButton.addEventListener("click", () => {
    fileInput.click();
  });

  // 파일 선택 시 파일 정보 표시
  fileInput.addEventListener("change", () => {
    const files = fileInput.files;

    if (files.length > 0) {
      const file = files[0];
      const fileName = file.name;
      const fileSize = (file.size / 1024).toFixed(2); // KB 단위로 변환
      const fileType = file.type;

      fileInfo.innerHTML = `
                <p><strong>File Name:</strong> ${fileName}</p>
                <p><strong>File Size:</strong> ${fileSize} KB</p>
                <p><strong>File Type:</strong> ${fileType}</p>
            `;
    } else {
      fileInfo.innerHTML = "<p>No file selected.</p>";
    }
  });
};

export default addFile;
