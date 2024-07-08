import route from '../../Router/Router';

const validateLogin = () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const userCredentials = {
    username: 'u',
    password: '1',
  };
  const adminCredentials = {
    username: 'a',
    password: '1',
  };

  // Check credentials
  if (
    username === userCredentials.username &&
    password === userCredentials.password
  ) {
    sessionStorage.setItem('userRole', 'user');
    sessionStorage.setItem('isLoggedIn', 'true');
    window.history.pushState(null, null, '/user/dashboard');
    route();
    return true;
  } else if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    sessionStorage.setItem('userRole', 'admin');
    sessionStorage.setItem('isLoggedIn', 'true');
    window.history.pushState(null, null, '/admin/dashboard');
    route();
    return true;
  } else {
    alert('잘못된 아이디 또는 비밀번호입니다.');
    return false;
  }
};

// 로그아웃 함수
export const logout = () => {
  sessionStorage.removeItem('userRole');
  sessionStorage.removeItem('isLoggedIn');
  // 로그인 페이지로 리다이렉트
  window.history.pushState(null, null, '/');
  route();
};

// 사용자 역할 확인 함수
export const getUserRole = () => sessionStorage.getItem('userRole');

// 로그인 상태 확인 함수
export const isLoggedIn = () => sessionStorage.getItem('isLoggedIn') === 'true';

export default validateLogin;
