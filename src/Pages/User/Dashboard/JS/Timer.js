import styles from "../Dashboard.module.css";
///
const timer = () => {
  const startTimeElement = document.querySelector("#userDashboard__startTime");
  const endTimeElement = document.querySelector("#userDashboard__endTime");
  const todayElement = document.querySelector("#userDashboard__today");
  const currentTimeElement = document.querySelector(
    `.${styles.userDashboard__currentTime}`
  );
  const recordStartTimeBtn = document.querySelector(`.${styles.checkInBtn}`);
  const recordEndTimeBtn = document.querySelector(`.${styles.checkOutBtn}`);

  // 출퇴근 값의 초기값
  let startTime = null;
  let endTime = null;

  // 업데이트
  const updateTime = () => {
    startTimeElement.innerText = `${
      startTime ? "startTime" : "출근스탬프를 찍어주세요."
    }`;
    endTimeElement.innerText = `${
      endTime ? endTime : "퇴근스탬프를 찍어주세요."
    }`;
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
  const getCurrentTime = (date) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // 시간과 분이 한 자리 수인 경우 앞에 0을 붙여 두 자리로 만들기
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // 시간과 분을 문자열로 반환
    return `${formattedHours}:${formattedMinutes}`;
  };

  currentTimeElement.innerHTML = getCurrentTime();
  todayElement.innerText = getTodayDate();

  // 리셋
  const resetTimes = () => {
    clockInTime = null;
    clockOutTime = null;
    updateTime();
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
  setInterval(checkDataChanged, 60000);

  // 스탬프 찍기
  const recordTime = (setTimeFunc, displayFunc) => {
    setTimeFunc(getCurrentTime());
    displayFunc();
  };

  recordStartTimeBtn.addEventListener("click", () => {
    recordTime((time) => (startTime = time), updateTime());
    console.log("ss");
  });

  recordEndTimeBtn.addEventListener("click", () => {
    recordTime((time) => (endTime = time), updateTime());
  });

  updateTime(); // 초기 화면 갱신
};

export default timer;
