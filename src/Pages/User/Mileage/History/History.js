import styles from './History.module.css';
import fetchMileageData from './FetchMileageData';

const renderUserMileageHistory = (container) => {
  container.innerHTML = `
    <div class="${styles.contents}">
      <h1 class="${styles.title}">마일리지 > 마일리지 적립목록</h1>
      <h2>마일리지 적립목록(12)</h2>

      <ul class="${styles.details} ${styles.h5}">
        <li class="${styles['details__header']}">
          <div class="${styles['details__title']}">제목</div>
          <div class="${styles['details__registration-date']}">등록일</div>
          <div class="${styles['details__mileage']}">마일리지</div>
        </li>
      </ul>

      <div class="${styles.pagination}">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" class="${styles.active}">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a> 
      </div>
    </div>
  `;

  fetchMileageData();
};

export default renderUserMileageHistory;
