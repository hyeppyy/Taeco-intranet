import route from '../../Router/Router';

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

export default validateLogin;
