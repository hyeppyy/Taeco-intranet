import renderMileageList from './RenderMileageList';
import initPagination from '/src/Components/Pagination/Pagination';

// 서버 데이터 요청 함수
const fetchMileageData = async () => {
  const response = await fetch('/server/data/mileage.json');
  const data = await response.json();

  initPagination(data, renderMileageList);
};

export default fetchMileageData;
