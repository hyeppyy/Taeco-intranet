import route from './Router/Router';
import renderLayout from './Components/Layout/Layout';
import renderLogin from './Pages/Login/Login';

const navigate = (event) => {
  const anchor = event.target.closest('a');

  if (anchor && anchor.href) {
    event.preventDefault();
    history.pushState(null, null, anchor.href);
    route();
  }
};

const initApp = () => {
  const root = document.querySelector('#root');
  // root.innerHTML = renderLayout();

  document.querySelector('body').addEventListener('click', navigate);
  window.addEventListener('popstate', route);
  if (window.location.pathname === '/') renderLogin(root);
  else route();
};

export default initApp;
