import styles from "../Add/Add.module.css";

const registerNotice = () => {
  const addButton = document.querySelector("[data-add-btn]");
  const fileInput = document.querySelector("[data-n-file]");
  const uploadButton = document.querySelector(`.${styles.uploadButton}`);
  const titleInput = document.querySelector("[data-n-title]");
  const authorInput = document.querySelector("[data-n-author]");
  const isImportantToggle = document.querySelector("[data-n-toggle]");
  const descriptionTextarea = document.querySelector("[data-n-description]");
  const categorySelect = document.querySelector("select[name='category']");

  const validateInputs = () => {
    if (!titleInput.value.trim()) {
      alert("제목을 입력해주세요.");
      return false;
    }
    if (!authorInput.value.trim()) {
      alert("작성자를 입력해주세요.");
      return false;
    }
    if (!descriptionTextarea.value.trim()) {
      alert("내용을 입력해주세요.");
      return false;
    }
    return true;
  };

  // 토글 스위치에 이벤트 리스너 추가
  isImportantToggle.addEventListener("change", (event) => {
    console.log("토글 상태 변경:", event.target.checked);
    console.log("isImportant 값:", event.target.checked ? "0" : "1");
  });

  //파일 선택 버튼을 누르면 모달창이 열림
  uploadButton.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      fileInfo.textContent = fileInput.files[0].name;
    } else {
      fileInfo.textContent = "";
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const formData = new FormData();
    formData.append("title", titleInput.value);
    formData.append("author", authorInput.value);
    formData.append("isImportant", isImportantToggle.checked ? "0" : "1");
    formData.append("description", descriptionTextarea.value);
    formData.append("category", categorySelect.value);

    // 파일 존재 여부에 따라 1 또는 0을 반환
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      formData.append("attachments", fileInput.files[0]);
      formData.append("hasAttachment", 1);
    } else {
      formData.append("hasAttachment", 0);
    }

    try {
      const response = await fetch("/api/notices", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === "OK") {
        alert("공지사항이 성공적으로 등록되었습니다.");
        // 데이터 새로 불러오기
        window.location.href = "/admin/notices";
      } else {
        alert("공지사항 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("Failed to register notice:", error);
      alert("공지사항 등록 중 오류가 발생했습니다.");
    }
  };

  addButton.addEventListener("click", handleSubmit);
};

export default registerNotice;
