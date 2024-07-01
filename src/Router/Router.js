import renderPageNotFound from '../Pages/PageNotFound';
import renderLogin from '../Pages/Login/Login';
import renderLayout from '../Layout/Layout';
import renderResponsiveNavBar from '../Components/ResponsiveNavBar/ResponsiveNavBar'
import renderAdminNavBar from '../Components/NavBar/Admin/NavBar';
import renderUserNavBar from '../Components/NavBar/User/NavBar';
import renderUserDashboard from '../Pages/User/Dashboard/Dashboard';
import renderUserMileage from '../Pages/User/Mileage/Mileage';
import renderUserMileageHistory from '../Pages/User/Mileage/History/History';
import renderUserMypage from '../Pages/User/Mypage/Mypage';
import renderUserNotices from '../Pages/User/Notices/Notices';
import renderUserApproval from '../Pages/User/Approval/Approval';
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

  const responseNavBar = document.querySelector('#responsive-nav');
  const navBar = document.querySelector('#nav');
  const contents = document.querySelector('#contents');

  renderResponsiveNavBar(responseNavBar);

  // 현재 url에 user/admin 포함 여부에 따른 NavBar 렌더링
  if (path.includes('user')) {
    // input 인자 2가지 : 삽입할 요소, 내용
    renderUserNavBar(navBar, [
      { path: '/user/dashboard', label: '대시보드' },
      { path: '/user/approval', label: '전자결재' },
      { path: '/user/notices', label: '공지사항' },
      { path: '/user/mileage', label: '마일리지' },
      { path: '/user/mypage', label: '마이페이지' },
    ]);
  } else if (path.includes('admin')) {
    renderAdminNavBar(navBar, [
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
    case '/user/dashboard':
      renderUserDashboard(contents);
      break;
    case '/user/approval':
      renderUserApproval(contents);
      break;
    case '/user/notices':
      renderUserNotices(contents);
      break;
    case '/user/mileage':
      renderUserMileage(contents);
      break;
    case '/user/mileage/history':
      renderUserMileageHistory(contents);
      break;
    case '/user/mypage':
      renderUserMypage(contents);
      break;
    //admin
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
      renderPageNotFound(root);
      break;
  }
};

export default route;
