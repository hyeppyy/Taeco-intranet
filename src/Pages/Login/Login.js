import route from '../../Router/Router';
import styles from './Login.module.css';

const login = (container) => {
  // return으로 하면, 바로 종료가 되므로 추가 로직 구현 불가능
  container.innerHTML = `
      <section class="${styles.loginLayout}">
      <div class="${styles.loginContainer}">
        <img src="/public/images/company_logo_user.png" alt="logo img" />
        <form class="${styles.loginContainer__form}">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="아이디를 입력해주세요."
            data-shape="line"
            autocomplete="off"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            data-shape="line"
            autocomplete="off"
            required
          />
          <button
            id="login__button"
            type="button"
            data-shape="block"
            data-color="positive"
          >
            로그인
          </button>
        </form>
      </div>
    </section>
  `;

  SUBMIT_LOGIN_FORM();
};

const SUBMIT_LOGIN_FORM = () => {
  document
    .querySelector('#login__button')
    .addEventListener('click', validateLogin);
};

const validateLogin = () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const userCredentials = {
    username: 'user',
    password: '1234',
  };
  const adminCredentials = {
    username: 'admin',
    password: '1234',
  };

  // Check credentials
  if (
    username === userCredentials.username &&
    password === userCredentials.password
  ) {
    window.history.pushState(null, null, '/user/dashboard');
    route();
  } else if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    window.history.pushState(null, null, '/admin/dashboard');
    route();
  } else {
    alert('잘못된 아이디 또는 비밀번호입니다.');
  }
};

export default login;
