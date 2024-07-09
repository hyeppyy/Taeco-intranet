import filterByToggle from './FilterByToggle';
import spinner from '/src/Components/Spinner/Spinner';

const fetchMileageData = async () => {
  try {
    const response = await fetch("/api/mileage");
    const data = await response.json();
    if (data.status === 'OK') {
      filterByToggle(data.data);
    }
  } catch (error) {
    console.error('Failed to fetch mileage data:', error);
  } finally {
  }
};

export default fetchMileageData;
