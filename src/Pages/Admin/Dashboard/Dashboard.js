import styles from './Dashboard.module.css';
import fetchMileageData from './fetchMileageData';

const renderAdminDashboard = (container) => {
  if (!container) {
    console.error('container element not found');
    return;
  }
  container.innerHTML = `
  <div class="${styles.contents}">
      <h1 class="${styles.title}">대시보드</h1>
      <div class="${styles.adminDashboard}">
        <h2>2024.06.14(금)</h2>
        <div class="${styles.adminDashboard__attendance} ${
    styles.card
  }">출결요약</div>
        <div class="${styles.adminDashboard__container}">
          <div class="${styles.adminDashboard__schedule} ${
    styles.card
  }">세부 일정</div>
          <div class="${styles.adminDashboard__approval} ${
    styles.card
  }">전자결재(승민)</div>
        </div>
        <div class="${styles.adminDashboard__mileage} ${styles.card}">
          <div class="${styles['adminDashboard__mileage-title']}">
            <div class="${styles['adminDashboard__mileage-title--left']}">
              <h2>마일리지</h2>
              <h4>미확인 신청 내역만 보여집니다.</h4>
            </div>
            <h4 class="${styles['adminDashboard__mileage-title--right']}">
              <a href="/admin/mileage">마일리지페이지로 이동</a>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.78112 8.00047L5.48126 4.70062L6.42408 3.75781L10.6667 8.00047L6.42408 12.2431L5.48126 11.3003L8.78112 8.00047Z"
                />
              </svg>
            </h4>
          </div>
          <ul class="${styles.mileage__contents} ${styles.h5}">
            <li class="${styles.mileage__header}">
              <div class="${styles.mileage__title}">제목</div>
              <div class="${styles.mileage__requester}">요청자</div>
              <div class="${styles['mileage__request-date']}">요청일</div>
            </li>
          </ul>
        </div>
      </div>
    </div>`;

  fetchMileageData();
};

export default renderAdminDashboard;
