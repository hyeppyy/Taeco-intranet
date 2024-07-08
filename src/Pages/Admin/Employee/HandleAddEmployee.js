import styles from "./AddEmployee.module.css";
import route from "./../../../Router/Router";

const AddEmployee = () => {
  const addButton = container.querySelector("[data-e-add]");
  const fileInput = document.querySelector(`.${styles.info__fileInput}`);
  const deleteButton = container.querySelector("[data-e-delete]"); // 이미지 삭제 버튼

  addButton.addEventListener("click", handleAddEmployee); //최종 폼 제출
  fileInput.addEventListener("change", handleFileSelect); //프로필 이미지 변경
  deleteButton.addEventListener("click", handleFileDelete); // 이미지 삭제

  // 페이지 로드 시 로컬 저장소에서 이미지 로드
  loadPreviewImage();
};

export default AddEmployee;

//프로필 이미지 선택 함수
const handleFileSelect = () => {
  const file = event.target.files[0];
  const imageContainer = document.querySelector(
    `.${styles.imageContainer__image}`
  );

  if (file) {
    const reader = new FileReader();

    reader.onload = (event) => {
      imageContainer.innerHTML = ""; // 기존 이미지 제거

      const img = document.createElement("img");

      img.setAttribute("src", event.target.result);
      imageContainer.appendChild(img);

      // 이미지 데이터 로컬 저장소에 저장
      localStorage.setItem("profileImage", event.target.result);
    };
    reader.readAsDataURL(file);
  } else {
    // 기본 이미지 설정 및 로컬 저장소에 저장
    setDefaultImage(imageContainer);
  }
};

// 로컬 저장소에서 이미지 로드 함수
const loadPreviewImage = () => {
  const imageContainer = document.querySelector(
    `.${styles.imageContainer__image}`
  );
  const storedImage = localStorage.getItem("profileImage");

  if (storedImage) {
    imageContainer.innerHTML = ""; // 기존 이미지 제거
    const img = document.createElement("img");
    img.setAttribute("src", storedImage);
    imageContainer.appendChild(img);
  } else {
    // 기본 이미지 설정
    setDefaultImage(imageContainer);
  }
};

// 이미지 삭제 처리 함수
const handleFileDelete = (event) => {
  event.preventDefault(); // 기본 버튼 동작 방지
  const imageContainer = document.querySelector(
    `.${styles.imageContainer__image}`
  );
  imageContainer.innerHTML = ""; // 기존 이미지 제거

  // 로컬 저장소에서 이미지 데이터 제거
  localStorage.removeItem("profileImage");

  // 기본 이미지 설정
  setDefaultImage(imageContainer);
};

// 기본 이미지 설정 함수
const setDefaultImage = (imageContainer) => {
  const img = document.createElement("img");
  img.setAttribute("src", "/public/images/defaultProfile.png");
  img.style.display = "block"; // 이미지가 보이도록 설정
  imageContainer.appendChild(img);

  // 기본 이미지 데이터 로컬 저장소에 저장
  localStorage.setItem("profileImage", "/public/images/defaultProfile.png");
};

// 직원 추가 함수
const handleAddEmployee = async (event) => {
  if (event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    // 폼 데이터 수집
    const name = document.querySelector("[data-e-name]").value;
    const position = document.querySelector("[data-e-positions]").value;
    const email = document.querySelector("[data-e-email]").value;
    const phone = document.querySelector("[data-e-phone]").value;
    const birthday = document.querySelector("[data-e-birthday]").value;
    const startDate = document.querySelector("[data-e-joinday]").value;
    const profileImage = document.querySelector("[data-e-add-img]").files[0];

    // 필수 필드 유효성 검사
    if (!name || !email || !position || !birthday || !startDate) {
      alert("이름, 이메일, 직함, 생일, 입사일은 필수 입력 항목입니다.");
      return;
    }

    // 이메일 형식 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    // FormData 객체 생성
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("position", position);
    formData.append("birthday", birthday);
    formData.append("startDate", startDate);
    if (phone) formData.append("phone", phone);
    if (profileImage) formData.append("profileImage", profileImage);

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === "OK") {
        // 성공 모달 표시
        alert("직원 추가에 성공했습니다.");

        // 잠시 후 직원 목록 페이지로 이동
        setTimeout(() => {
          history.pushState(null, null, "/admin/employee");
          route();
        }, 2000);
      } else {
        console.error("직원 추가 오류:", result.error);
        alert("직원 추가 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("직원 추가 실패:", error);
      alert("직원 추가에 실패했습니다.");
    }
  }
};
