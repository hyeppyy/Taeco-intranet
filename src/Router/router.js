import renderLogin from '../Pages/Login/Login';
import renderLayout from '../Components/Layout/Layout';
import renderNavBar from '../Components/NavBar/NavBar';
import renderAdminDashboard from '../Pages/Admin/Dashboard/Dashboard';
import renderAdminApproval from '../Pages/Admin/Approval/Approval';
import renderAdminEmployee from '../Pages/Admin/Employee/Employee';
import renderAdminMileage from '../Pages/Admin/Mileage/Mileage';
import renderAdminNotices from '../Pages/Admin/Notices/Notices';

const route = () => {
  const path = window.location.pathname;
  const root = document.querySelector('#root');
  // App.js에서 renderLogin(root)로 renderLayout이 사라짐
  // layout이 있어야 #nav, #contents가 생성
  renderLayout(root);
  
  const navBar = document.querySelector('#nav');
  const contents = document.querySelector('#contents');

  // console.log(navBar);
  // console.log(contents);
  // console.log(root);

  // 현재 url에 user/admin 포함 여부에 따른 NavBar 렌더링
  if (path.includes('user')) {
    // input 인자 2가지 : 삽입할 요소, 내용
    renderNavBar(navBar, [
      { path: '/user/dashboard', label: '대시보드' },
      { path: '/user/approval', label: '전자결재' },
      { path: '/user/notices', label: '공지사항' },
      { path: '/user/mileage', label: '마일리지' },
      { path: '/user/mypage', label: '마이페이지' },
    ]);
  } else if (path.includes('admin')) {
    renderNavBar(navBar, [
      { path: '/admin/dashboard', label: '대시보드' },
      { path: '/admin/approval', label: '전자결재 관리' },
      { path: '/admin/employee', label: '직원 관리' },
      { path: '/admin/mileage', label: '마일리지 관리' },
      { path: '/admin/notices', label: '공지사항 관리' },
    ]);
  }

  switch (path) {
    case '/':
      renderLogin(root);
      break;
    case '/admin/dashboard':
      renderAdminDashboard(contents);
      break;
    case '/admin/approval':
      renderAdminApproval(contents);
      break;
    case '/admin/employee':
      renderAdminEmployee(contents);
      break;
    case '/admin/mileage':
      renderAdminMileage(contents);
      break;
    case '/admin/notices':
      renderAdminNotices(contents);
      break;
    default:
      contents.innerHTML = `<h1>404</h1><p>Page not found.</p>`;
      break;
  }
};

export default route;