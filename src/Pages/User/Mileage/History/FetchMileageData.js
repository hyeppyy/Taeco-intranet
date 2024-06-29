import styles from './History.module.css';

// 서버 데이터 요청 함수
const fetchMileageData = async () => {
  const response = await fetch('/server/data/mileage.json');
  const data = await response.json();

  const historyList = document.querySelector(`.${styles.details}`);

  // 필터링된 데이터 렌더링
  data.forEach((item) => {
    const div = document.createElement('li');
    div.className = styles['details__row'];
    div.innerHTML = `
          <div class="${styles['details__title']}">${item.category}</div>
          <div class="${
            styles['details__registration-date']
          }">${item.date.replaceAll('-', '.')}</div>
          <div class="${styles['details__mileage']}">${item.score}</div>
          `;

    historyList.appendChild(div);
  });
};

export default fetchMileageData;
