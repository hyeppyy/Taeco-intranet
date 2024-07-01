import styles from './ResponsiveNavBar.module.css';
import navStyles from '../NavBar/Admin/NavBar.module.css';

const hamburger = () => {
  document
    .querySelector(`.${styles.hamburger}`)
    .addEventListener('click', () => {
      document.querySelector(`.${navStyles.layout}`).classList.toggle('open');
      // document.querySelector(`.${navStyles.layout}`).style.display = 'flex'
    });
};

export default hamburger;
