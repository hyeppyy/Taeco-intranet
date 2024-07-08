import filterByTabs from './Filters';
import getMileageScore from './getMileageScore';

// 서버 데이터 요청 함수
const fetchMileageData = async () => {
  // const response = await fetch('/server/data/mileage.json');
  // const data = await response.json();

  // filterByTabs(data); // 데이터 받아온 후, 탭 필터 적용
  // getMileageScore(data); // 데이터의 마일리지 총합에 따른 UI 업데이트
  try {
    const response = await fetch('/api/mileage');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data.data);
    if (data.status === 'OK') {
      filterByTabs(data.data); // 서버에서 받아온 데이터로 탭 필터 적용
      getMileageScore(data.data); // 서버 데이터의 마일리지 총합에 따른 UI 업데이트
    } else {
      console.error('Error fetching mileage data:', data.error);
    }
  } catch (error) {
    console.error('Error fetching mileage data:', error);
  }
};

export default fetchMileageData;
