import styles from './History.module.css';

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

        <li class="${styles['details__row']}">
          <div class="${styles['details__title']}">재사용 및 업사이클링</div>
          <div class="${styles['details__registration-date']}">2024.02.02</div>
          <div class="${styles['details__mileage']}">2</div>
        </li>
        <li class="${styles['details__row']}">
          <div class="${styles['details__title']}">대중교통 및 자전거 이용</div>
          <div class="${styles['details__registration-date']}">2024.02.02</div>
          <div class="${styles['details__mileage']}">2</div>
        </li>
        <li class="${styles['details__row']}">
          <div class="${styles['details__title']}">재활용 및 분리수거</div>
          <div class="${styles['details__registration-date']}">2024.02.02</div>
          <div class="${styles['details__mileage']}">2</div>
        </li>
        <li class="${styles['details__row']}">
          <div class="${styles['details__title']}">재사용 및 업사이클링</div>
          <div class="${styles['details__registration-date']}">2024.02.02</div>
          <div class="${styles['details__mileage']}">2</div>
        </li>
        <li class="${styles['details__row']}">
          <div class="${styles['details__title']}">대중교통 및 자전거 이용</div>
          <div class="${styles['details__registration-date']}">2024.02.02</div>
          <div class="${styles['details__mileage']}">2</div>
        </li>
        <li class="${styles['details__row']}">
          <div class="${styles['details__title']}">재활용 및 분리수거</div>
          <div class="${styles['details__registration-date']}">2024.02.02</div>
          <div class="${styles['details__mileage']}">2</div>
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
};

export default renderUserMileageHistory;
