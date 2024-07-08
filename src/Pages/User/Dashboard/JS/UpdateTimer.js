import { getTodayDate, getCurrentTime } from '../JS/CurrentDate';

let timeUpdateInterval;

// 모달 시간을 1초마다 현재시간을 업데이트하는 함수
export const startTimeUpdate = () => {
  const modalTimeElements = document.querySelectorAll('[data-time-element]');
  if (modalTimeElements) {
    modalTimeElements.forEach(
      (element) => (element.textContent = getCurrentTime()) // 즉시 한 번 실행:현재시간을 넣어줌
    );
  }
  timeUpdateInterval = setInterval(timeUpdateInterval, 1000); // 1초마다 업데이트
};

// 현재시간 업데이트를 멈추는 함수 -> 지금 현재 모달에 이벤트로 넘김
export const stopTimeUpdate = () => {
  if (timeUpdateInterval) clearInterval(timeUpdateInterval);
};
