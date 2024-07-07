import styles from "./dashboardModal.module.css";

// 출근시간을 확인하는 모달 내용을 반환하는 함수
export const showCheckInTimeContent = () => {
  startTimeUpdate();

  return {
    modal_id: `dashboard_1`,
    header: `출근`,
    content: `
        <div class="${styles.checkTimeModal}">
          <h4>${getTodayDate()}</h4>
          <span data-time-element>${getCurrentTime()}</span>
          <h3>출근하시겠습니까?</h3>
          <button id="checkInBtn" data-shape="block" data-color="positive">출근하기</button>
        </div>
      `,
  };
};

// 퇴근시간을 확인하는 모달 내용을 반환하는 함수
export const showCheckOutTimeContent = () => {
  startTimeUpdate();

  return {
    modal_id: `dashboard_2`,
    header: `퇴근`,
    content: `
        <div class="${styles.checkTimeModal}">
          <h4>${getTodayDate()}</h4>
          <span data-time-element>${getCurrentTime()}</span>
          <h3>퇴근하시겠습니까?</h3>
          <button id="checkOutBtn" data-shape="block" data-color="positive">퇴근하기</button>
        </div>
      `,
  };
};

// 1초마다 현재시간을 업데이트하는 함수
let timeUpdateInterval;

const startTimeUpdate = () => {
  updateModalTime(); // 즉시 한 번 실행:현재시간을 넣어줌
  timeUpdateInterval = setInterval(updateModalTime, 1000); // 1초마다 업데이트
};

const updateModalTime = () => {
  const modalTimeElements = document.querySelectorAll("[data-time-element]");
  modalTimeElements.forEach((element) => {
    element.textContent = getCurrentTime();
  });
};

// 현재시간 업데이트를 멈추는 함수
export const stopTimeUpdate = () => {
  if (timeUpdateInterval) {
    clearInterval(timeUpdateInterval);
  }
};

// 오늘 날짜를 반환하는 함수
const getTodayDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 +1, 두 자리 수로 맞춤
  const day = ("0" + date.getDate()).slice(-2); // 두 자리 수로 맞춤
  const dayOfWeek = date.getDay();

  // 요일 이름
  const dayOfWeekNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeekName = dayOfWeekNames[dayOfWeek];

  return `${year}.${month}.${day}(${dayOfWeekName})`;
};

// 현재 시간을 형식화하는 함수
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // 시간과 분이 한 자리 수인 경우 앞에 0을 붙여 두 자리로 만들기
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // 시간과 분을 문자열로 반환
  return `${formattedHours}:${formattedMinutes}`;
};
