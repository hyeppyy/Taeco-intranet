import filterByToggle from './FilterByToggle';

const fetchMileageData = async () => {
  try {
    const response = await fetch('/server/data/mileage.json');
    const data = await response.json();
    filterByToggle(data);
  } catch (error) {
    console.error('Failed to fetch mileage data:', error);
  }
};

export default fetchMileageData;
