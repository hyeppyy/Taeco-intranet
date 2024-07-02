import filterByToggle from './FilterByToggle';

const fetchMileageData = async () => {
  const response = await fetch('/server/data/mileage.json');
  const data = await response.json();
  filterByToggle(data);
};

export default fetchMileageData;
