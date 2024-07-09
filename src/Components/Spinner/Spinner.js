import styles from '../../Pages/Admin/Mileage/Mileage.module.css';

const spinner = () => {
  const spinnerElement = document.createElement('div');
  spinnerElement.className = 'spinner';
  spinnerElement.style.display = 'none';

  document.body.append(spinnerElement);

  return {
    show: () => {
      console.log('show');
      spinnerElement.style.display = 'block';
    },
    hide: () => {
      console.log('hide');
      spinnerElement.style.display = 'none';
    },
  };
};

export default spinner;
