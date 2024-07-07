import styles from './Dashboard.module.css';

const fetchMileageData = async () => {
  const response = await fetch('/server/data/mileage.json');
  const data = await response.json();

  const mileageList = document.querySelector(`.${styles.mileage__contents}`);

  // 필터링된 데이터 렌더링
  data.forEach((item, index) => {
    if (index > 2) return;
    const div = document.createElement('li');
    div.className = styles.mileage__header;
    div.innerHTML = `
        <div class="${styles.mileage__title}">${item.category}</div>
        <div class="${styles.mileage__requester}">${item.employee}</div>
        <div class="${styles['mileage__request-date']}">${item.date.replaceAll(
      '-',
      '.'
    )}</div>
    `;

    mileageList.appendChild(div);
  });
};

export default fetchMileageData;
