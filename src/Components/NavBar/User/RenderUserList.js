const renderUserList = (data) => {
  const profile = document.querySelector("[data-nav-img]");
  const name = document.querySelector("[data-nav-name]");

  profile.src = data.profileImage;
  name.textContent = data.name;
};

export default renderUserList;
