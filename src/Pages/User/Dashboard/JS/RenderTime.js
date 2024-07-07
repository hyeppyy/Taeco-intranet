import styles from '../Dashboard.module.css';
const renderTime = () => {
  const recordStartTimeBtn = document.querySelector(
    `.${styles.recordStartTimeBtn}`
  );
  const recordEndTimeBtn = document.querySelector(
    `.${styles.recordEndTimeBtn}`
  );
  const todayElement = document.querySelector(
    `.${styles.userDashboard__today}`
  );

  // 출퇴근 값의 초기값
  let startTime = localStorage.getItem('startTime') || null;
  let endTime = localStorage.getItem('endTime') || null;

  // console.log(startTime, endTime); //01:10 01:10 -> 화면에는 04:15

  // 오늘 날짜를 반환하는 함수
  const getTodayDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 +1, 두 자리 수로 맞춤
    const day = ('0' + date.getDate()).slice(-2); // 두 자리 수로 맞춤
    const dayOfWeek = date.getDay();

    // console.log(year, month, day, dayOfWeek);

    // 요일 이름
    const dayOfWeekNames = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeekName = dayOfWeekNames[dayOfWeek];

    return `${year}.${month}.${day}(${dayOfWeekName})`;
  };

  todayElement.innerText = getTodayDate();

  // 현재 시간을 나타내는 함수
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  const recordTime = (setTimeFunc, displayFunc, isStartTime) => {
    const currentTime = getCurrentTime();
    setTimeFunc(getCurrentTime());
    displayFunc(); //updateTime 실행

    // 로컬스토리지에 저장
    if (isStartTime) {
      localStorage.setItem('startTime', currentTime);
      localStorage.setItem('isStartTimeDisabled', 'true');
      disableButton(recordStartTimeBtn, '출근하기');
    } else {
      localStorage.setItem('endTime', currentTime);
      localStorage.setItem('isEndTimeDisabled', 'true');
      disableButton(recordEndTimeBtn, '퇴근하기');
    }

    // 모달 닫기
    const modal = document.querySelector('.modal-box.active');
    const modalBackground = document.querySelector('#modal__background');

    if (modal) {
      modal.classList.remove('active');
    }
    if (modalBackground) {
      modalBackground.classList.remove('active');
    }

    return true; // 성공적으로 기록되었음을 나타내는 true 반환
  };

  // 출퇴근모달에서 버튼을 클릭하면 기록 시작
  const addModalEventListeners = () => {
    const checkInBtn = document.querySelector('#checkInBtn');
    const checkOutBtn = document.querySelector('#checkOutBtn');
    // console.log(checkInBtn, checkOutBtn);
    if (checkInBtn) {
      checkInBtn.addEventListener('click', () => {
        recordTime((time) => (startTime = time), updateTime, true);
      });
    }

    if (checkOutBtn) {
      checkOutBtn.addEventListener('click', () => {
        recordTime((time) => (endTime = time), updateTime, false);
      });
    }
  };

  // 버튼 비활성화
  const disableButton = (button, text) => {
    button.disabled = true;
    button.style.pointerEvents = 'none';
    button.style.opacity = '0.5';
    button.removeAttribute('data-modal-target');
    button.innerHTML = `<h3>${text}</h3><h2>${getCurrentTime()}</h2>`;
  };

  // 버튼 활성화
  const enableButton = (button, text, modalTarget) => {
    button.disabled = false;
    button.style.pointerEvents = 'auto';
    button.style.opacity = '1';
    button.setAttribute('data-modal-target', modalTarget);
    button.innerHTML = `<h3>${text}</h3><h2>-</h2>`;
  };

  // startTime, endTime 값을 업데이트하는 함수
  const updateTime = () => {
    // startTime 값이 있으면 버튼 비활성화
    if (localStorage.getItem('isStartTimeDisabled') === 'true') {
      disableButton(recordStartTimeBtn, '출근하기');
    } else {
      enableButton(recordStartTimeBtn, '출근하기', '#modal-dashboard_1');
    }

    // endTime 값이 있으면 버튼 비활성화
    if (localStorage.getItem('isEndTimeDisabled') === 'true') {
      disableButton(recordEndTimeBtn, '퇴근하기');
      localStorage.clear();
    } else {
      enableButton(recordEndTimeBtn, '퇴근하기', '#modal-dashboard_2');
    }
  };

  // 리셋
  const resetTimes = () => {
    startTime = null;
    endTime = null;
    localStorage.removeItem('startTime');
    localStorage.removeItem('endTime');
    localStorage.setItem('isStartTimeDisabled', 'false');
    localStorage.setItem('isEndTimeDisabled', 'false');
    updateTime();

    // 버튼 다시 활성화
    enableButton(recordStartTimeBtn, '출근하기', '#modal-dashboard_1');
    enableButton(recordEndTimeBtn, '퇴근하기', '#modal-dashboard_2');
  };

  // 현재 날짜를 저장하고 이를 기준으로 날짜가 변경되었는지를 확인
  let lastCheckedDate = getTodayDate();

  // 자정이 넘어가면 현재날짜와 비교해서 날짜가 바뀌면 시간을 리셋시켜주는 함수
  const checkDataChanged = () => {
    const currentDate = getTodayDate();
    // 날짜가 변경되었는지 확인
    if (currentDate !== lastCheckedDate) {
      resetTimes(); // 날짜가 변경되었으면 출퇴근 시간을 리셋
      lastCheckedDate = currentDate; // lastCheckedDate를 현재 날짜로 갱신
    }
  };

  // 1분마다 날짜 변경 확인
  setInterval(() => {
    checkDataChanged();
  }, 60000);

  // 초기 버튼 상태 설정
  const initButtonState = () => {
    const isStartTimeDisabled =
      localStorage.getItem('isStartTimeDisabled') === 'true';
    const isEndTimeDisabled =
      localStorage.getItem('isEndTimeDisabled') === 'true';

    if (isStartTimeDisabled) {
      disableButton(recordStartTimeBtn, '출근하기');
    } else {
      enableButton(recordStartTimeBtn, '출근하기', '#modal-dashboard_1');
    }

    if (isEndTimeDisabled) {
      disableButton(recordEndTimeBtn, '퇴근하기');
    } else {
      enableButton(recordEndTimeBtn, '퇴근하기', '#modal-dashboard_2');
    }
  };

  updateTime(); // 초기 화면 갱신
  addModalEventListeners(); // 모달 이벤트 리스너 추가
  initButtonState(); // 초기 버튼 상태 설정
};

export default renderTime;
