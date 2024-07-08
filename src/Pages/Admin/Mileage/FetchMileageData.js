import filterByToggle from './FilterByToggle';

const fetchMileageData = async () => {
  try {
    const response = await fetch('/api/mileage');
    const data = await response.json();
    console.log('Fetched mileage data:', data);
    if (data.status === 'OK') {
      filterByToggle(data.data);
    } else {
      console.error('Error in mileage data:', data.error);
    }
  } catch (error) {
    console.error('Failed to fetch mileage data:', error);
  }
};

export default fetchMileageData;
