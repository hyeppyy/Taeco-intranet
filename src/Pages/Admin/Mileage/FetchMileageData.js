import styles from './Mileage.module.css';
import toggle_styles from '/src/Components/ToggleSwitch/ToggleSwitch.module.css';

const fetchMileageData = async () => {
  const response = await fetch('/server/data/mileage.json');
  const data = await response.json();
  filterByToggle(data);
};

const renderMileageList = (data) => {
  // 게시 마일리지 아이템 총 개수 표시
  const totalItem = document.querySelector('#total-item');
  totalItem.textContent = `${data.length}`;

  const container = document.querySelector(`.${styles['mileage-list']}`);
  // 함수 호출마다, 기존 렌더링 초기화
  container.innerHTML = '';

  data.forEach((item) => {
    const div = document.createElement('div');
    div.className = styles['mileage-list__item'];
    div.style.backgroundImage = `url(${item.image})`;
    div.innerHTML = `<div class="${styles['mileage-list__title']}">
        <h3>${item.category}</h3>
        <h5>${item.date}</h5>
      </div>`;

    container.appendChild(div);
  });
};

const filterByToggle = (data) => {
  const undetermined = data.filter((item) => item.isApprove === null);
  renderMileageList(undetermined);

  const toggleSwitch = document.querySelector(`.${toggle_styles.switch}`);

  let filteredData = data.slice();

  toggleSwitch.addEventListener('click', () => {
    const toggleState = document.querySelector('#toggleText').textContent;

    if (toggleState === '미확인')
      filteredData = data.filter((item) => item.isApprove === null);
    else if (toggleState === '확인')
      filteredData = data.filter((item) => item.isApprove !== null);
    else return;

    renderMileageList(filteredData);
  });
};

export default fetchMileageData;
