import styles from "./dashboardModal.module.css";
///
// 출근시간을 확인하는 모달 내용을 반환하는 함수
export const showCheckInTimeContent = () => {
  const currentTime = getCurrentTime();
  const today = getTodayDate();

  return {
    modal_id: `dashboard_1`,
    header: `출근`,
    content: `
        <div class="${styles.checkTimeModal}">
          <h4>${today}</h4>
          <span>${currentTime}</span>
          <h3>출근하시겠습니까?</h3>
          <button class="${styles.checkInBtn}" data-shape="block" data-color="positive">출근하기</button>
        </div>
      `,
  };
};

// 퇴근시간을 확인하는 모달 내용을 반환하는 함수
export const showCheckOutTimeContent = () => {
  const currentTime = getCurrentTime();
  const today = getTodayDate();

  return {
    modal_id: `dashboard_2`,
    header: `퇴근`,
    content: `
        <div class="${styles.checkTimeModal}">
          <h4>${today}</h4>
          <span>${currentTime}</span>
          <h3>퇴근하시겠습니까?</h3>
          <button class="${styles.checkOutBtn}" data-shape="block" data-color="positive">퇴근하기</button>
        </div>
      `,
  };
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
