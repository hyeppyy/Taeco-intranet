import renderMileageList from './RenderMileageList';
import styles from './Mileage.module.css';

// 탭(심사중, 승인, 반려) 필터 [input: 서버로부터 불러온 데이터]
const filterByTabs = (data) => {
  const tabsFilter = document.querySelector(
    `.${styles['mileage-approve__tabs']}`
  );

  let state = null; // 초기 상태는 심사중
  let filteredData = data.filter((item) => item.isApprove === state);
  renderMileageList(filteredData); // 초기 렌더링
  filterBySelect(filteredData); // 초기 탭 필터 후 날짜 필터 적용

  // 탭 클릭에 따른 조건 렌더링
  tabsFilter.addEventListener('click', (event) => {
    if (event.target.id === 'ongoing') state = null;
    else if (event.target.id === 'approved') state = true;
    else if (event.target.id === 'denied') state = false;
    else return;

    filteredData = data.filter((item) => item.isApprove === state);
    renderMileageList(filteredData);
    filterBySelect(filteredData); // 탭 필터 후 날짜 필터 적용
  });
};

// 날짜별(최신순, 오래된순) 필터 [input: 탭에 따른 필터링된 데이터, 현재 렌더링된 상태(심사중, 승인, 반려)]
const filterBySelect = (filteredData) => {
  const selectFilter = document.querySelector('#filter');

  selectFilter.addEventListener('change', () => {
    // .slice()를 사용해 원본 데이터 변경하지 않고 복사본 사용
    let sortedData = filteredData.slice();

    if (selectFilter.value === 'latest') {
      sortedData.sort((pre, sub) => new Date(sub.date) - new Date(pre.date));
    } else if (selectFilter.value === 'old') {
      sortedData.sort((pre, sub) => new Date(pre.date) - new Date(sub.date));
    }

    renderMileageList(sortedData);
  });
};

export default filterByTabs;
