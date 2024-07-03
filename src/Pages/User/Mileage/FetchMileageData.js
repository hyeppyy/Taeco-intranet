import filterByTabs from './Filters';
import getMileageScore from './getMileageScore';

// 서버 데이터 요청 함수
const fetchMileageData = async () => {
  const response = await fetch('/server/data/mileage.json');
  const data = await response.json();
  filterByTabs(data); // 데이터 받아온 후, 탭 필터 적용
  getMileageScore(data); // 데이터의 마일리지 총합에 따른 UI 업데이트
};

export default fetchMileageData;
