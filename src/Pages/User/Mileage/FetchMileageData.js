import styles from './Mileage.module.css';

const fetchMileageData = async () => {
  const response = await fetch('/server/data/mileage.json');
  const data = await response.json();
  fillMileageList(data);
};

const fillMileageList = (data) => {
  const mileageList = document.querySelector(`.${styles['mileage-list']}`);

  data.forEach((item) => {
    const div = document.createElement('div');
    div.className = styles['mileage-list__item'];
    div.style.backgroundImage = `url(${item.image})`;
    div.innerHTML = `<div class="${styles['mileage-list__title']}">
      <h3>${item.category}</h3>
      <h5>${item.date}</h5>
    </div>`;

    mileageList.appendChild(div);
  });
};

export default fetchMileageData;
