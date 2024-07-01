import styles from './Mileage.module.css';

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

export default renderMileageList;
