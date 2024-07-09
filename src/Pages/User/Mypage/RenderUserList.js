const renderUserList = (userData) => {
  const profileName = document.querySelector("[data-m-name]");
  const profilePosition = document.querySelector("[data-m-position]");
  const profileEmail = document.querySelector("[data-m-email]");
  const profilePhone = document.querySelector("[data-m-phone]");

  profileName.innerHTML = userData.name;
  profilePosition.innerHTML = userData.position;
  profileEmail.innerHTML = userData.email;
  profilePhone.innerHTML = userData.phone;
};

export default renderUserList;
