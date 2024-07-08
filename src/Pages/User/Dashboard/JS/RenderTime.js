// import styles from '../Dashboard.module.css';
// import { getTodayDate, getCurrentTime } from '../JS/CurrentDate';

// const renderTime = () => {
//   localStorage.clear();
//   const recordStartTimeBtn = document.querySelector(
//     `.${styles.recordStartTimeBtn}`
//   ); // 출근 버튼
//   const recordEndTimeBtn = document.querySelector(
//     `.${styles.recordEndTimeBtn}`
//   ); // 퇴근 버튼

//   const todayElement = document.querySelector(
//     `.${styles.userDashboard__today}`
//   ); // 오늘 날짜
//   todayElement.textContent = getTodayDate(); //오늘 날짜 변환

//   // 로컬 스토리지 관련 함수
//   const Storage = {
//     get: (key) => localStorage.getItem(key),
//     set: (key, value) => localStorage.setItem(key, value),
//     remove: (key) => localStorage.removeItem(key),
//     clear: () => localStorage.clear(),
//   };

//   // 출퇴근 값의 초기값 - 로컬 스토리지
//   let startTime = localStorage.getItem('startTime') || null;
//   let endTime = localStorage.getItem('endTime') || null;

//   const recordTime = (setTimeFunc, displayFunc, isStartTime) => {
//     const currentTime = getCurrentTime();
//     setTimeFunc(getCurrentTime());
//     displayFunc(); //updateTime 실행

//     // 로컬스토리지에 저장
//     if (isStartTime) {
//       localStorage.setItem('startTime', currentTime);
//       localStorage.setItem('isStartTimeDisabled', 'true');
//       disableButton(recordStartTimeBtn);
//     } else {
//       localStorage.setItem('endTime', currentTime);
//       localStorage.setItem('isEndTimeDisabled', 'true');
//       disableButton(recordEndTimeBtn);
//     }
//     return true; // 성공적으로 기록되었음을 나타내는 true 반환
//   };

//   // 출퇴근모달에서 버튼을 클릭하면 기록 시작
//   const addModalEventListeners = () => {
//     const checkInBtn = document.querySelector('#checkInBtn');
//     const checkOutBtn = document.querySelector('#checkOutBtn');
//     // console.log(checkInBtn, checkOutBtn);
//     if (checkInBtn) {
//       checkInBtn.addEventListener('click', () => {
//         recordTime((time) => (startTime = time), updateTime, true);
//       });
//     }

//     if (checkOutBtn) {
//       checkOutBtn.addEventListener('click', () => {
//         recordTime((time) => (endTime = time), updateTime, false);
//       });
//     }
//   };

//   // 버튼 비활성화
//   const disableButton = (button) => {
//     button.disabled = true; // 버튼 비활성화
//     button.style.pointerEvents = 'none';
//     button.style.opacity = '0.5';
//     button.removeAttribute('data-modal-target'); // 모달 열리지 않도록 변환
//     button.querySelector('h2').textContent = `${getCurrentTime()}`;
//   };

//   // 버튼 활성화
//   const enableButton = (button, modalTarget) => {
//     button.disabled = false;
//     button.style.pointerEvents = 'auto';
//     button.style.opacity = '1';
//     button.setAttribute('data-modal-target', modalTarget);
//     button.querySelector('h2').textContent = `-`;
//   };

//   // 버튼 상태 관리 함수
//   const ButtonManager = {
//     disable: (button) => {
//       button.disabled = true;
//       button.style.pointerEvents = 'none';
//       button.style.opacity = '0.5';
//       button.removeAttribute('data-modal-target');
//       button.querySelector('h2').textContent = getCurrentTime();
//     },
//     enable: (button, modalTarget) => {
//       button.disabled = false;
//       button.style.pointerEvents = 'auto';
//       button.style.opacity = '1';
//       button.setAttribute('data-modal-target', modalTarget);
//       button.querySelector('h2').textContent = '-';
//     },
//   };

//   // 시간(startTime, endTime) 업데이트 함수
//   const updateTime = () => {
//     ['Start', 'End'].forEach((type) => {
//       const isDisabled = Storage.get(`is${type}TimeDisabled`) === 'true';
//       const button = type === 'Start' ? recordStartTimeBtn : recordEndTimeBtn;
//       const modalTarget = `#modal-dashboard_${type === 'Start' ? '1' : '2'}`;

//       if (isDisabled) {
//         ButtonManager.disable(button);
//       } else {
//         ButtonManager.enable(button, modalTarget);
//       }
//     });

//     if (Storage.get('isEndTimeDisabled') === 'true') {
//       Storage.clear();
//     }
//   };

//   // 시간 리셋 함수
//   const resetTimes = () => {
//     [
//       'startTime',
//       'endTime',
//       'isStartTimeDisabled',
//       'isEndTimeDisabled',
//     ].forEach((key) => {
//       Storage.remove(key);
//     });
//     Storage.set('isStartTimeDisabled', 'false');
//     Storage.set('isEndTimeDisabled', 'false');
//     updateTime();

//     // 버튼 다시 활성화
//     enableButton(recordStartTimeBtn, '#modal-dashboard_1');
//     enableButton(recordEndTimeBtn, '#modal-dashboard_2');
//   };

//   // 현재 날짜를 저장하고 이를 기준으로 날짜가 변경되었는지를 확인
//   let lastCheckedDate = getTodayDate();
//   // 자정이 넘어가면 현재날짜와 비교해서 날짜가 바뀌면 시간을 리셋시켜주는 함수
//   const checkDataChanged = () => {
//     const currentDate = getTodayDate();
//     // 날짜가 변경되었는지 확인
//     if (currentDate !== lastCheckedDate) {
//       resetTimes(); // 날짜가 변경되었으면 출퇴근 시간을 리셋
//       lastCheckedDate = currentDate; // lastCheckedDate를 현재 날짜로 갱신
//     }
//   };
//   // 1분마다 날짜 변경 확인
//   setInterval(() => checkDataChanged(), 60000);

//   // 초기 버튼 상태 설정
//   const initButtonState = () => {
//     const isStartTimeDisabled =
//       localStorage.getItem('isStartTimeDisabled') === 'true';
//     const isEndTimeDisabled =
//       localStorage.getItem('isEndTimeDisabled') === 'true';

//     if (isStartTimeDisabled) {
//       disableButton(recordStartTimeBtn);
//     } else {
//       enableButton(recordStartTimeBtn, '#modal-dashboard_1');
//     }

//     if (isEndTimeDisabled) {
//       disableButton(recordEndTimeBtn);
//     } else {
//       enableButton(recordEndTimeBtn, '#modal-dashboard_2');
//     }
//   };

//   updateTime(); // 초기 화면 갱신
//   addModalEventListeners(); // 모달 이벤트 리스너 추가
//   initButtonState(); // 초기 버튼 상태 설정
// };

// export default renderTime;

import styles from '../Dashboard.module.css';
import { getTodayDate, getCurrentTime } from '../JS/CurrentDate';
import { startTimeUpdate } from '../JS/UpdateTimer';

const renderTime = () => {
  localStorage.clear();
  const recordStartTimeBtn = document.querySelector(
    `.${styles.recordStartTimeBtn}`
  );
  const recordEndTimeBtn = document.querySelector(
    `.${styles.recordEndTimeBtn}`
  );
  const todayElement = document.querySelector(
    `.${styles.userDashboard__today}`
  );

  const Storage = {
    get: (key) => localStorage.getItem(key),
    set: (key, value) => localStorage.setItem(key, value),
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear(),
  };

  const ButtonManager = {
    disable: (button, time) => {
      button.disabled = true;
      button.style.pointerEvents = 'none';
      button.style.opacity = '0.5';
      button.removeAttribute('data-modal-target');
      button.querySelector('h2').textContent = time || '-';
    },
    enable: (button, modalTarget) => {
      button.disabled = false;
      button.style.pointerEvents = 'auto';
      button.style.opacity = '1';
      button.setAttribute('data-modal-target', modalTarget);
      button.querySelector('h2').textContent = '-';
    },
  };

  const updateButtonStates = () => {
    const isCheckedIn = Storage.get('isCheckedIn') === 'true';
    // const isCheckedOut = Storage.get('isCheckedOut') === 'true';
    const isCheckedOut = Storage.get('isCheckedIn') === 'false';

    if (isCheckedIn) {
      ButtonManager.disable(recordStartTimeBtn, Storage.get('checkInTime'));
      ButtonManager.enable(recordEndTimeBtn, '#modal-dashboard_2');
    } else {
      // ButtonManager.enable(recordStartTimeBtn, '#modal-dashboard_1');
      ButtonManager.disable(recordEndTimeBtn);
    }

    if (isCheckedOut) {
      ButtonManager.disable(recordEndTimeBtn, Storage.get('checkOutTime'));
    }
  };

  const recordTime = (isCheckIn) => {
    const currentTime = getCurrentTime();
    if (isCheckIn) {
      Storage.set('checkInTime', currentTime);
      Storage.set('isCheckedIn', 'true');
    } else {
      Storage.set('checkOutTime', currentTime);
      // Storage.set('isCheckedOut', 'true');
      // Storage.set('isCheckedIn', 'false');
      Storage.get('isCheckedIn', 'false');
    }
    updateButtonStates();
  };

  const addModalEventListeners = () => {
    document.querySelector('#checkInBtn')?.addEventListener('click', () => {
      recordTime(true);
      startTimeUpdate();
    });
    document
      .querySelector('#checkOutBtn')
      ?.addEventListener('click', () => recordTime(false));
  };

  const resetTimes = () => {
    Storage.remove('checkInTime');
    Storage.remove('checkOutTime');
    Storage.remove('isCheckedIn');
    Storage.remove('isCheckedOut');
    updateButtonStates();
  };

  const checkDateChanged = () => {
    const currentDate = getTodayDate();
    if (currentDate !== todayElement.textContent) {
      todayElement.textContent = currentDate;
      resetTimes();
    }
  };

  const initialize = () => {
    todayElement.textContent = getTodayDate();
    updateButtonStates();
    addModalEventListeners();
    setInterval(checkDateChanged, 60000); // 1분마다 날짜 변경 확인
  };

  initialize();
};

export default renderTime;
