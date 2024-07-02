import tabFilter from "./Filter";

//서버 데이터 요청 함수
const fetchNoticesData = async () => {
  const response = await fetch("/server/data/notices.json");

  const data = await response.json();
  //가져온 데이터로 필터링
  tabFilter(data);
};

export default fetchNoticesData;
